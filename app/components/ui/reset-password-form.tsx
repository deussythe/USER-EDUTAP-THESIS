"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { ShoppingCart, AlertCircle, CheckCircle, Eye, EyeOff, KeyRound } from "lucide-react"
import { confirmPasswordReset, verifyPasswordResetCode } from "firebase/auth"
import { auth } from "@/configs/firebase"
import {
    applyFavicon,
    type BrandingSettings,
    fetchBrandingSettingsForTab,
    readBrandingCache,
    subscribeToBrandingSettings,
} from "@/configs/branding"

export function ResetPasswordForm() {
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirm, setShowConfirm] = useState(false)
    const [error, setError] = useState("")
    const [success, setSuccess] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [isVerifying, setIsVerifying] = useState(true)
    const [oobCode, setOobCode] = useState<string | null>(null)
    const [codeError, setCodeError] = useState("")
    const [schoolName, setSchoolName] = useState("St. Clare College of Caloocan")
    const [canteenName, setCanteenName] = useState("EDUTAP")
    const [logoUrl, setLogoUrl] = useState<string | null>(null)
    const [bgStyle, setBgStyle] = useState<React.CSSProperties>({
        background: "linear-gradient(to bottom right, #450a0a, #7f1d1d, #7f1d1d)",
    })

    function applyBg(type: "color" | "image", color: string, url: string | null) {
        if (type === "image" && url) {
            setBgStyle({
                backgroundImage: `url(${url})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            })
        } else {
            setBgStyle({ backgroundColor: color })
        }
    }

    useEffect(() => {
        // Branding
        const cached = readBrandingCache("student")
        if (cached) applyBranding(cached)
        fetchBrandingSettingsForTab("student")
            .then((settings) => {
                applyBranding(settings)
            })
            .catch((brandingError) => {
                console.error("Failed to load branding settings:", brandingError)
            })

        const unsubscribeBranding = subscribeToBrandingSettings(
            "student",
            (settings) => {
                applyBranding(settings)
            },
            (subscriptionError) => {
                console.error("Failed to subscribe to branding settings:", subscriptionError)
            },
        )

        // Verify oobCode
        const params = new URLSearchParams(window.location.search)
        const code = params.get("oobCode")

        if (!code) {
            setCodeError("Invalid or missing reset link. Please request a new one.")
            setIsVerifying(false)
            return unsubscribeBranding
        }

        verifyPasswordResetCode(auth, code)
            .then(() => {
                setOobCode(code)
                setIsVerifying(false)
            })
            .catch(() => {
                setCodeError("This reset link has expired or already been used. Please request a new one.")
                setIsVerifying(false)
            })

        return unsubscribeBranding
    }, [])

    function applyBranding(settings: BrandingSettings) {
        setSchoolName(settings.schoolName)
        setCanteenName(settings.canteenName)
        setLogoUrl(settings.logoUrl)
        applyFavicon(settings.faviconUrl)
        applyBg(settings.loginBgType, settings.loginBgColor, settings.loginBgUrl)
    }

    const handleSubmit = async (e: React.FormEvent | React.KeyboardEvent) => {
        e.preventDefault()
        setError("")

        if (!password || !confirmPassword) {
            setError("Please fill in both fields.")
            return
        }

        if (password.length < 6) {
            setError("Password must be at least 6 characters.")
            return
        }

        if (password !== confirmPassword) {
            setError("Passwords do not match.")
            return
        }

        if (!oobCode) {
            setError("Invalid reset code. Please request a new link.")
            return
        }

        setIsLoading(true)

        try {
            await confirmPasswordReset(auth, oobCode, password)
            setSuccess(true)
        } catch (err: any) {
            console.error(err)
            if (err.code === "auth/expired-action-code") {
                setError("This reset link has expired. Please request a new one.")
            } else if (err.code === "auth/weak-password") {
                setError("Password is too weak. Please use at least 6 characters.")
            } else {
                setError("Failed to reset password. Please try again.")
            }
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div className="flex min-h-screen items-center justify-center p-4" style={bgStyle}>
            <div className="w-full max-w-md rounded-xl border border-red-700 bg-white shadow-2xl">
                {/* Header */}
                <div className="space-y-3 p-6 text-center bg-gradient-to-r from-red-900 to-red-800 rounded-t-xl">
                    <div className="mx-auto flex h-24 w-24 items-center justify-center overflow-hidden rounded-full border-4 border-white bg-white shadow-lg">
                        {logoUrl ? (
                            <img src={logoUrl} alt={`${canteenName} logo`} className="h-full w-full scale-110 rounded-full object-cover" />
                        ) : (
                            <ShoppingCart className="h-8 w-8 text-red-900" />
                        )}
                    </div>
                    <h2 className="text-2xl font-bold text-white">{canteenName}</h2>
                    <p className="text-sm text-red-100">{schoolName}</p>
                </div>

                <div className="p-6">
                    {/* Verifying state */}
                    {isVerifying && (
                        <div className="flex flex-col items-center justify-center py-8 gap-3">
                            <div className="h-8 w-8 animate-spin rounded-full border-4 border-red-200 border-t-red-800" />
                            <p className="text-sm text-gray-500">Verifying reset link...</p>
                        </div>
                    )}

                    {/* Invalid code */}
                    {!isVerifying && codeError && (
                        <div className="flex flex-col items-center gap-4 py-4">
                            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-red-100">
                                <AlertCircle className="h-7 w-7 text-red-700" />
                            </div>
                            <div className="text-center">
                                <h3 className="text-base font-semibold text-gray-800 mb-1">Link Invalid</h3>
                                <p className="text-sm text-gray-500">{codeError}</p>
                            </div>
                            <a
                                href="/"
                                className="w-full rounded-lg bg-gradient-to-r from-red-900 to-red-800 px-4 py-2.5 text-center text-sm font-semibold text-white transition hover:from-red-800 hover:to-red-700 shadow-md"
                            >
                                Back to Sign In
                            </a>
                        </div>
                    )}

                    {/* Success state */}
                    {!isVerifying && !codeError && success && (
                        <div className="flex flex-col items-center gap-4 py-4">
                            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-green-100">
                                <CheckCircle className="h-7 w-7 text-green-600" />
                            </div>
                            <div className="text-center">
                                <h3 className="text-base font-semibold text-gray-800 mb-1">Password Reset!</h3>
                                <p className="text-sm text-gray-500">Your password has been updated successfully. You can now sign in.</p>
                            </div>
                            <a
                                href="/"
                                className="w-full rounded-lg bg-gradient-to-r from-red-900 to-red-800 px-4 py-2.5 text-center text-sm font-semibold text-white transition hover:from-red-800 hover:to-red-700 shadow-md"
                            >
                                Go to Sign In
                            </a>
                        </div>
                    )}

                    {/* Reset form */}
                    {!isVerifying && !codeError && !success && (
                        <>
                            <div className="flex items-center gap-2 mb-1">
                                <KeyRound className="h-4 w-4 text-red-800" />
                                <h3 className="text-base font-semibold text-gray-800">Set New Password</h3>
                            </div>
                            <p className="text-sm text-gray-500 mb-6">Choose a strong password for your account.</p>

                            <div className="space-y-4">
                                {/* New Password */}
                                <div className="space-y-2">
                                    <label htmlFor="password" className="text-sm font-medium text-gray-700">
                                        New Password
                                    </label>
                                    <div className="relative">
                                        <input
                                            id="password"
                                            type={showPassword ? "text" : "password"}
                                            placeholder="Enter new password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            onKeyDown={(e) => e.key === "Enter" && handleSubmit(e)}
                                            autoFocus
                                            disabled={isLoading}
                                            className="w-full rounded-lg border border-gray-300 px-3 py-2 pr-10 text-sm focus:border-red-800 focus:outline-none focus:ring-2 focus:ring-red-200 disabled:bg-gray-100 disabled:cursor-not-allowed"
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setShowPassword(!showPassword)}
                                            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                                            tabIndex={-1}
                                        >
                                            {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                                        </button>
                                    </div>
                                </div>

                                {/* Confirm Password */}
                                <div className="space-y-2">
                                    <label htmlFor="confirm-password" className="text-sm font-medium text-gray-700">
                                        Confirm Password
                                    </label>
                                    <div className="relative">
                                        <input
                                            id="confirm-password"
                                            type={showConfirm ? "text" : "password"}
                                            placeholder="Re-enter new password"
                                            value={confirmPassword}
                                            onChange={(e) => setConfirmPassword(e.target.value)}
                                            onKeyDown={(e) => e.key === "Enter" && handleSubmit(e)}
                                            disabled={isLoading}
                                            className="w-full rounded-lg border border-gray-300 px-3 py-2 pr-10 text-sm focus:border-red-800 focus:outline-none focus:ring-2 focus:ring-red-200 disabled:bg-gray-100 disabled:cursor-not-allowed"
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setShowConfirm(!showConfirm)}
                                            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                                            tabIndex={-1}
                                        >
                                            {showConfirm ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                                        </button>
                                    </div>
                                </div>

                                {error && (
                                    <div className="flex items-center gap-2 rounded-md bg-red-50 p-3 text-sm text-red-600 border border-red-200">
                                        <AlertCircle className="h-4 w-4 shrink-0" />
                                        <span>{error}</span>
                                    </div>
                                )}

                                <button
                                    type="button"
                                    onClick={handleSubmit}
                                    disabled={isLoading}
                                    className="w-full rounded-lg bg-gradient-to-r from-red-900 to-red-800 px-4 py-2.5 text-sm font-semibold text-white transition hover:from-red-800 hover:to-red-700 disabled:opacity-60 disabled:cursor-not-allowed shadow-md"
                                >
                                    {isLoading ? "Resetting..." : "Reset Password"}
                                </button>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    )
}
