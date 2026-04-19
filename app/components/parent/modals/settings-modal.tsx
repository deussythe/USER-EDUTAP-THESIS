"use client"

import { useState, useEffect } from "react"
import { X, User, Mail, Lock, Eye, EyeOff, Check, AlertCircle } from "lucide-react"
import {
    updateProfile,
    updateEmail,
    updatePassword,
    reauthenticateWithCredential,
    EmailAuthProvider
} from "firebase/auth"
import { updateDoc, doc } from "firebase/firestore"
import { auth, db } from "app/configs/firebase"

interface SettingsModalProps {
    isOpen: boolean
    onClose: () => void
    currentName: string
    currentEmail: string
    studentId: string
}

export function SettingsModal({ isOpen, onClose, currentName, currentEmail, studentId }: SettingsModalProps) {
    const [tab, setTab] = useState<"info" | "password">("info")

    // Info fields
    const [name, setName] = useState(currentName)
    const [email, setEmail] = useState(currentEmail)
    const [isEditingName, setIsEditingName] = useState(false)

    // Password fields
    const [currentPassword, setCurrentPassword] = useState("")
    const [newPassword, setNewPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [showCurrent, setShowCurrent] = useState(false)
    const [showNew, setShowNew] = useState(false)
    const [showConfirm, setShowConfirm] = useState(false)

    // UI state
    const [loading, setLoading] = useState(false)
    const [successMsg, setSuccessMsg] = useState("")
    const [errorMsg, setErrorMsg] = useState("")

    // Add this after your existing useState declarations
    useEffect(() => {
        if (isOpen) {
            setName(currentName)
            setEmail(currentEmail)
            setIsEditingName(false)
            setSuccessMsg("")
            setErrorMsg("")
        }
    }, [isOpen])

    if (!isOpen) return null

    const clearMessages = () => { setSuccessMsg(""); setErrorMsg("") }

    const handleSaveInfo = async () => {
        clearMessages()
        if (!name.trim() || !email.trim()) {
            setErrorMsg("Name and email cannot be empty.")
            return
        }
        setLoading(true)
        try {
            const user = auth.currentUser
            if (!user) throw new Error("Not logged in")

            // Update Firebase Auth profile
            await updateProfile(user, { displayName: name })
            if (email !== user.email) await updateEmail(user, email)

            // Update Firestore student record
            if (studentId) {
                await updateDoc(doc(db, "students", studentId), { name })
            }

            setSuccessMsg("Info updated successfully!")
        } catch (err: any) {
            setErrorMsg(err.message || "Failed to update info.")
        } finally {
            setLoading(false)
        }
    }
    

    const handleChangePassword = async () => {
        clearMessages()
        if (!currentPassword || !newPassword || !confirmPassword) {
            setErrorMsg("Please fill in all password fields.")
            return
        }
        if (newPassword !== confirmPassword) {
            setErrorMsg("New passwords do not match.")
            return
        }
        if (newPassword.length < 6) {
            setErrorMsg("New password must be at least 6 characters.")
            return
        }
        setLoading(true)
        try {
            const user = auth.currentUser
            if (!user || !user.email) throw new Error("Not logged in")

            const credential = EmailAuthProvider.credential(user.email, currentPassword)
            await reauthenticateWithCredential(user, credential)
            await updatePassword(user, newPassword)

            setSuccessMsg("Password changed successfully!")
            setCurrentPassword("")
            setNewPassword("")
            setConfirmPassword("")
        } catch (err: any) {
            if (err.code === "auth/wrong-password") {
                setErrorMsg("Current password is incorrect.")
            } else {
                setErrorMsg(err.message || "Failed to change password.")
            }
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
            <div className="w-full max-w-md rounded-2xl bg-white shadow-xl overflow-hidden">

                {/* Header */}
                <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
                    <h2 className="text-base font-bold text-gray-900">Account Settings</h2>
                    <button
                        onClick={onClose}
                        className="p-1.5 rounded-lg text-gray-400 hover:bg-gray-100 hover:text-gray-600 transition-colors"
                    >
                        <X className="h-4 w-4" />
                    </button>
                </div>

                {/* Tabs */}
                <div className="flex border-b border-gray-100">
                    {(["info", "password"] as const).map(t => (
                        <button
                            key={t}
                            onClick={() => { setTab(t); clearMessages() }}
                            className={`flex-1 py-2.5 text-sm font-semibold transition-colors ${tab === t
                                    ? "text-[#8B0000] border-b-2 border-[#8B0000]"
                                    : "text-gray-400 hover:text-gray-600"
                                }`}
                        >
                            {t === "info" ? "Basic Info" : "Change Password"}
                        </button>
                    ))}
                </div>

                <div className="p-5 space-y-4">

                    {/* Feedback messages */}
                    {successMsg && (
                        <div className="flex items-center gap-2 rounded-lg bg-green-50 border border-green-200 px-3 py-2.5 text-sm text-green-700">
                            <Check className="h-4 w-4 shrink-0" />
                            {successMsg}
                        </div>
                    )}
                    {errorMsg && (
                        <div className="flex items-center gap-2 rounded-lg bg-red-50 border border-red-200 px-3 py-2.5 text-sm text-red-700">
                            <AlertCircle className="h-4 w-4 shrink-0" />
                            {errorMsg}
                        </div>
                    )}

                    {tab === "info" ? (
                        <>
                            {/* Name */}
                            <div>
                                <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5 block">
                                    Full Name
                                </label>
                                <div className="flex items-center gap-2.5 rounded-lg border border-gray-200 px-3 py-2.5 focus-within:border-[#8B0000] focus-within:ring-1 focus-within:ring-[#8B0000] transition-all">
                                    <User className="h-4 w-4 text-gray-400 shrink-0" />
                                    {isEditingName ? (
                                        <input
                                            type="text"
                                            value={name}
                                            onChange={e => setName(e.target.value)}
                                            className="flex-1 text-sm text-gray-900 bg-transparent outline-none"
                                            placeholder="Your name"
                                            autoFocus
                                        />
                                    ) : (
                                        <span className="flex-1 text-sm text-gray-900">{name || "No name set"}</span>
                                    )}
                                    <button
                                        type="button"
                                        onClick={() => setIsEditingName(v => !v)}
                                        className="text-xs text-[#8B0000] font-semibold hover:underline shrink-0"
                                    >
                                        {isEditingName ? "Done" : "Change"}
                                    </button>
                                </div>
                            </div>
                            

                            {/* Email */}
                            <div>
                                <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5 block">
                                    Email Address
                                </label>
                                <div className="flex items-center gap-2.5 rounded-lg border border-gray-200 px-3 py-2.5 focus-within:border-[#8B0000] focus-within:ring-1 focus-within:ring-[#8B0000] transition-all">
                                    <Mail className="h-4 w-4 text-gray-400 shrink-0" />
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={e => setEmail(e.target.value)}
                                        className="flex-1 text-sm text-gray-900 bg-transparent outline-none"
                                        placeholder="your@email.com"
                                    />
                                </div>
                            </div>

                            <button
                                onClick={handleSaveInfo}
                                disabled={loading}
                                className="w-full py-2.5 rounded-lg bg-[#8B0000] text-white text-sm font-semibold hover:bg-[#6f0000] disabled:opacity-60 transition-colors"
                            >
                                {loading ? "Saving…" : "Save Changes"}
                            </button>
                        </>
                    ) : (
                        <>
                            {/* Current Password */}
                            {[
                                { label: "Current Password", value: currentPassword, set: setCurrentPassword, show: showCurrent, toggle: () => setShowCurrent(v => !v) },
                                { label: "New Password", value: newPassword, set: setNewPassword, show: showNew, toggle: () => setShowNew(v => !v) },
                                { label: "Confirm New Password", value: confirmPassword, set: setConfirmPassword, show: showConfirm, toggle: () => setShowConfirm(v => !v) },
                            ].map(({ label, value, set, show, toggle }) => (
                                <div key={label}>
                                    <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5 block">
                                        {label}
                                    </label>
                                    <div className="flex items-center gap-2.5 rounded-lg border border-gray-200 px-3 py-2.5 focus-within:border-[#8B0000] focus-within:ring-1 focus-within:ring-[#8B0000] transition-all">
                                        <Lock className="h-4 w-4 text-gray-400 shrink-0" />
                                        <input
                                            type={show ? "text" : "password"}
                                            value={value}
                                            onChange={e => set(e.target.value)}
                                            className="flex-1 text-sm text-gray-900 bg-transparent outline-none"
                                            placeholder="••••••••"
                                        />
                                        <button type="button" onClick={toggle} className="text-gray-400 hover:text-gray-600">
                                            {show ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                                        </button>
                                    </div>
                                </div>
                            ))}

                            <button
                                onClick={handleChangePassword}
                                disabled={loading}
                                className="w-full py-2.5 rounded-lg bg-[#8B0000] text-white text-sm font-semibold hover:bg-[#6f0000] disabled:opacity-60 transition-colors"
                            >
                                {loading ? "Updating…" : "Change Password"}
                            </button>
                        </>
                    )}
                </div>
            </div>
        </div>
    )
}