"use client"

import { useState, useEffect } from "react"
import { X, User, Mail, Lock, Eye, EyeOff, Check, AlertCircle, Phone, GraduationCap, Hash, Users } from "lucide-react"
import {
    updateProfile,
    updatePassword,
    reauthenticateWithCredential,
    EmailAuthProvider
} from "firebase/auth"
import { updateDoc, doc, addDoc, collection } from "firebase/firestore"
import { auth, db } from "app/configs/firebase"

interface SettingsModalProps {
    isOpen: boolean
    onClose: () => void
    currentName: string
    currentEmail: string
    studentId: string
    currentGradeLevel?: string
    currentStudentNumber?: string
    currentSchoolEmail?: string
    currentGuardianName?: string
    currentContactNumber?: string
    currentGuardianEmail?: string
}

type Tab = "student" | "guardian" | "password"

interface EditableFieldProps {
    label: string
    value: string
    onChange: (v: string) => void
    icon: React.ReactNode
    type?: string
    placeholder?: string
    editable?: boolean
}

async function sendAdminNotification(title: string, message: string, type: 'student' | 'topup' | 'transaction' | 'general') {
    try {
        await addDoc(collection(db, 'notifications'), {
            title,
            message,
            type,
            target: 'admin',
            read: false,
            timestamp: Date.now(),
        })
    } catch (err) {
        console.error('Failed to send notification:', err)
    }
}

function EditableField({ label, value, onChange, icon, type = "text", placeholder, editable = true }: EditableFieldProps) {
    return (
        <div>
            <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5 block">{label}</label>
            <div className={`flex items-center gap-2.5 rounded-lg border px-3 py-2.5 transition-all ${
                editable
                    ? "border-gray-200 focus-within:border-[#8B0000] focus-within:ring-1 focus-within:ring-[#8B0000]"
                    : "border-gray-100 bg-gray-50"
            }`}>
                <span className="text-gray-400 shrink-0">{icon}</span>
                <input type={type} value={value} onChange={e => onChange(e.target.value)}
                    className="flex-1 text-sm text-gray-900 bg-transparent outline-none disabled:text-gray-400"
                    placeholder={placeholder} disabled={!editable} />
            </div>
        </div>
    )
}

export function SettingsModal({
    isOpen, onClose, currentName, currentEmail, studentId,
    currentGradeLevel = "", currentStudentNumber = "", currentSchoolEmail = "",
    currentGuardianName = "", currentContactNumber = "", currentGuardianEmail = "",
}: SettingsModalProps) {
    const [tab, setTab] = useState<Tab>("student")
    const [name, setName] = useState(currentName)
    const [gradeLevel, setGradeLevel] = useState(currentGradeLevel)
    const [studentNumber, setStudentNumber] = useState(currentStudentNumber)
    const [schoolEmail, setSchoolEmail] = useState(currentSchoolEmail)
    const [guardianName, setGuardianName] = useState(currentGuardianName)
    const [contactNumber, setContactNumber] = useState(currentContactNumber)
    const [guardianEmail, setGuardianEmail] = useState(currentGuardianEmail)
    const [currentPassword, setCurrentPassword] = useState("")
    const [newPassword, setNewPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [showCurrent, setShowCurrent] = useState(false)
    const [showNew, setShowNew] = useState(false)
    const [showConfirm, setShowConfirm] = useState(false)
    const [loading, setLoading] = useState(false)
    const [successMsg, setSuccessMsg] = useState("")
    const [errorMsg, setErrorMsg] = useState("")

    useEffect(() => {
        if (isOpen) {
            setName(currentName); setGradeLevel(currentGradeLevel)
            setStudentNumber(currentStudentNumber); setSchoolEmail(currentSchoolEmail)
            setGuardianName(currentGuardianName); setContactNumber(currentContactNumber)
            setGuardianEmail(currentGuardianEmail); setTab("student")
            setSuccessMsg(""); setErrorMsg("")
        }
    }, [isOpen])

    if (!isOpen) return null
    const clearMessages = () => { setSuccessMsg(""); setErrorMsg("") }

    const handleSaveStudent = async () => {
        clearMessages()
        if (!name.trim()) { setErrorMsg("Student name cannot be empty."); return }
        setLoading(true)
        try {
            const user = auth.currentUser
            if (!user) throw new Error("Not logged in")
            await updateProfile(user, { displayName: name })
            if (studentId) {
                await updateDoc(doc(db, "students", studentId), { name, gradeLevel, studentNumber, schoolEmail })
            }
            await sendAdminNotification(
                'Student Info Updated',
                `Guardian updated student info for ${name} (${studentNumber || 'N/A'}).`,
                'student'
            )
            setSuccessMsg("Student info updated successfully!")
        } catch (err: any) {
            setErrorMsg(err.message || "Failed to update student info.")
        } finally { setLoading(false) }
    }

    const handleSaveGuardian = async () => {
        clearMessages()
        setLoading(true)
        try {
            if (studentId) {
                await updateDoc(doc(db, "students", studentId), { guardianName, contactNumber, guardianEmail })
            }
            await sendAdminNotification(
                'Guardian Info Updated',
                `${guardianName} updated their guardian profile (contact: ${contactNumber}).`,
                'general'
            )
            setSuccessMsg("Guardian info updated successfully!")
        } catch (err: any) {
            setErrorMsg(err.message || "Failed to update guardian info.")
        } finally { setLoading(false) }
    }

    const handleChangePassword = async () => {
        clearMessages()
        if (!currentPassword || !newPassword || !confirmPassword) { setErrorMsg("Please fill in all password fields."); return }
        if (newPassword !== confirmPassword) { setErrorMsg("New passwords do not match."); return }
        if (newPassword.length < 6) { setErrorMsg("New password must be at least 6 characters."); return }
        setLoading(true)
        try {
            const user = auth.currentUser
            if (!user || !user.email) throw new Error("Not logged in")
            const credential = EmailAuthProvider.credential(user.email, currentPassword)
            await reauthenticateWithCredential(user, credential)
            await updatePassword(user, newPassword)
            await sendAdminNotification(
                'Password Changed',
                `A guardian account (${user.email}) changed their password.`,
                'general'
            )
            setSuccessMsg("Password changed successfully!")
            setCurrentPassword(""); setNewPassword(""); setConfirmPassword("")
        } catch (err: any) {
            if (err.code === "auth/wrong-password") setErrorMsg("Current password is incorrect.")
            else setErrorMsg(err.message || "Failed to change password.")
        } finally { setLoading(false) }
    }

    const TABS: { key: Tab; label: string }[] = [
        { key: "student", label: "Student" },
        { key: "guardian", label: "Guardian" },
        { key: "password", label: "Password" },
    ]

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
            <div className="w-full max-w-md rounded-2xl bg-white shadow-xl overflow-hidden">
                <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
                    <h2 className="text-base font-bold text-gray-900">Account Settings</h2>
                    <button onClick={onClose} className="p-1.5 rounded-lg text-gray-400 hover:bg-gray-100 hover:text-gray-600 transition-colors">
                        <X className="h-4 w-4" />
                    </button>
                </div>

                <div className="flex border-b border-gray-100">
                    {TABS.map(t => (
                        <button key={t.key} onClick={() => { setTab(t.key); clearMessages() }}
                            className={`flex-1 py-2.5 text-sm font-semibold transition-colors ${
                                tab === t.key ? "text-[#8B0000] border-b-2 border-[#8B0000]" : "text-gray-400 hover:text-gray-600"
                            }`}>
                            {t.label}
                        </button>
                    ))}
                </div>

                <div className="p-5 space-y-4">
                    {successMsg && (
                        <div className="flex items-center gap-2 rounded-lg bg-green-50 border border-green-200 px-3 py-2.5 text-sm text-green-700">
                            <Check className="h-4 w-4 shrink-0" /> {successMsg}
                        </div>
                    )}
                    {errorMsg && (
                        <div className="flex items-center gap-2 rounded-lg bg-red-50 border border-red-200 px-3 py-2.5 text-sm text-red-700">
                            <AlertCircle className="h-4 w-4 shrink-0" /> {errorMsg}
                        </div>
                    )}

                    {tab === "student" && (
                        <>
                            <div className="flex items-center gap-2 mb-1">
                                <GraduationCap className="h-4 w-4 text-[#8B0000]" />
                                <span className="text-sm font-bold text-gray-700">Student Information</span>
                            </div>
                            <EditableField label="Student Name" value={name} onChange={setName} icon={<User className="h-4 w-4" />} placeholder="Full name" />
                            <EditableField label="Grade Level" value={gradeLevel} onChange={setGradeLevel} icon={<GraduationCap className="h-4 w-4" />} placeholder="e.g. Grade 10" />
                            <EditableField label="Student Number" value={studentNumber} onChange={setStudentNumber} icon={<Hash className="h-4 w-4" />} placeholder="e.g. 2024-00123" />
                            <EditableField label="School Email" value={schoolEmail} onChange={setSchoolEmail} icon={<Mail className="h-4 w-4" />} type="email" placeholder="student@school.edu" />
                            <button onClick={handleSaveStudent} disabled={loading}
                                className="w-full py-2.5 rounded-lg bg-[#8B0000] text-white text-sm font-semibold hover:bg-[#6f0000] disabled:opacity-60 transition-colors">
                                {loading ? "Saving…" : "Save Student Info"}
                            </button>
                        </>
                    )}

                    {tab === "guardian" && (
                        <>
                            <div className="flex items-center gap-2 mb-1">
                                <Users className="h-4 w-4 text-[#8B0000]" />
                                <span className="text-sm font-bold text-gray-700">Guardian Information</span>
                            </div>
                            <EditableField label="Guardian Name" value={guardianName} onChange={setGuardianName} icon={<User className="h-4 w-4" />} placeholder="Full name of guardian" />
                            <EditableField label="Contact Number" value={contactNumber} onChange={setContactNumber} icon={<Phone className="h-4 w-4" />} type="tel" placeholder="e.g. 09XX-XXX-XXXX" />
                            <EditableField label="Guardian Email" value={guardianEmail} onChange={setGuardianEmail} icon={<Mail className="h-4 w-4" />} type="email" placeholder="guardian@email.com" />
                            <button onClick={handleSaveGuardian} disabled={loading}
                                className="w-full py-2.5 rounded-lg bg-[#8B0000] text-white text-sm font-semibold hover:bg-[#6f0000] disabled:opacity-60 transition-colors">
                                {loading ? "Saving…" : "Save Guardian Info"}
                            </button>
                        </>
                    )}

                    {tab === "password" && (
                        <>
                            {[
                                { label: "Current Password", value: currentPassword, set: setCurrentPassword, show: showCurrent, toggle: () => setShowCurrent(v => !v) },
                                { label: "New Password", value: newPassword, set: setNewPassword, show: showNew, toggle: () => setShowNew(v => !v) },
                                { label: "Confirm New Password", value: confirmPassword, set: setConfirmPassword, show: showConfirm, toggle: () => setShowConfirm(v => !v) },
                            ].map(({ label, value, set, show, toggle }) => (
                                <div key={label}>
                                    <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5 block">{label}</label>
                                    <div className="flex items-center gap-2.5 rounded-lg border border-gray-200 px-3 py-2.5 focus-within:border-[#8B0000] focus-within:ring-1 focus-within:ring-[#8B0000] transition-all">
                                        <Lock className="h-4 w-4 text-gray-400 shrink-0" />
                                        <input type={show ? "text" : "password"} value={value}
                                            onChange={e => set(e.target.value)}
                                            className="flex-1 text-sm text-gray-900 bg-transparent outline-none"
                                            placeholder="••••••••" />
                                        <button type="button" onClick={toggle} className="text-gray-400 hover:text-gray-600">
                                            {show ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                                        </button>
                                    </div>
                                </div>
                            ))}
                            <button onClick={handleChangePassword} disabled={loading}
                                className="w-full py-2.5 rounded-lg bg-[#8B0000] text-white text-sm font-semibold hover:bg-[#6f0000] disabled:opacity-60 transition-colors">
                                {loading ? "Updating…" : "Change Password"}
                            </button>
                        </>
                    )}
                </div>
            </div>
        </div>
    )
}