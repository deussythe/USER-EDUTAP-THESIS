"use client"

import type React from "react"
import { useState } from "react"
import { ShoppingCart, AlertCircle } from "lucide-react"
import { signInWithEmailAndPassword } from "firebase/auth"
import { doc, getDoc } from "firebase/firestore"
import { auth, db } from "@/configs/firebase"

interface LoginFormProps {
    onLogin: (username: string) => void
}

export function LoginForm({ onLogin }: LoginFormProps) {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const [isLoading, setIsLoading] = useState(false)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setError("")
        setIsLoading(true)

        if (!email || !password) {
            setError("Please enter both email and password")
            setIsLoading(false)
            return
        }

        try {
            // 1. Sign in with Firebase Auth
            const userCredential = await signInWithEmailAndPassword(auth, email, password)
            const uid = userCredential.user.uid

            // 2. Get role from Firestore 'users' collection
            const userDoc = await getDoc(doc(db, "users", uid))

            if (!userDoc.exists()) {
                setError("Account not found. Please contact admin.")
                setIsLoading(false)
                return
            }

            const role = userDoc.data().role

            // 3. Store role and redirect
            localStorage.setItem("username", userDoc.data().name || email)
            localStorage.setItem("role", role)

            onLogin(role)

            setTimeout(() => {
                if (role === "admin") {
                    window.location.href = "/admin-panel"
                } else if (role === "staff") {
                    window.location.href = "/pos"
                } else if (role === "parent") {
                    window.location.href = "/parent-dashboard"
                } else {
                    setError("Unknown role. Please contact admin.")
                }
            }, 500)

        } catch (err: any) {
            console.error(err)
            if (err.code === "auth/user-not-found" || err.code === "auth/wrong-password" || err.code === "auth/invalid-credential") {
                setError("Invalid email or password.")
            } else {
                setError("Login failed. Please try again.")
            }
            setIsLoading(false)
        }
    }

    return (
        <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-red-950 via-red-900 to-red-900 p-4">
            <div className="w-full max-w-md rounded-xl border border-red-700 bg-white shadow-2xl">
                <div className="space-y-3 p-6 text-center bg-gradient-to-r from-red-900 to-red-800 rounded-t-xl">
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-lg">
                        <ShoppingCart className="h-8 w-8 text-red-900" />
                    </div>
                    <h2 className="text-2xl font-bold text-white">EDUTAP</h2>
                    <p className="text-sm text-red-100">St. Clare College of Caloocan</p>
                </div>
                <div className="p-6">
                    <p className="text-center text-sm text-gray-600 mb-6">Sign in to access your dashboard</p>
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <label htmlFor="email" className="text-sm font-medium text-gray-700">
                                Email
                            </label>
                            <input
                                id="email"
                                type="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                onKeyDown={(e) => e.key === "Enter" && handleSubmit(e)}
                                autoComplete="email"
                                autoFocus
                                disabled={isLoading}
                                className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-red-800 focus:outline-none focus:ring-2 focus:ring-red-200 disabled:bg-gray-100 disabled:cursor-not-allowed"
                            />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="password" className="text-sm font-medium text-gray-700">
                                Password
                            </label>
                            <input
                                id="password"
                                type="password"
                                placeholder="Enter your password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                onKeyDown={(e) => e.key === "Enter" && handleSubmit(e)}
                                autoComplete="current-password"
                                disabled={isLoading}
                                className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-red-800 focus:outline-none focus:ring-2 focus:ring-red-200 disabled:bg-gray-100 disabled:cursor-not-allowed"
                            />
                        </div>

                        {error && (
                            <div className="flex items-center gap-2 rounded-md bg-red-50 p-3 text-sm text-red-600 border border-red-200">
                                <AlertCircle className="h-4 w-4" />
                                <span>{error}</span>
                            </div>
                        )}

                        <button
                            type="button"
                            onClick={handleSubmit}
                            disabled={isLoading}
                            className="w-full rounded-lg bg-gradient-to-r from-red-900 to-red-800 px-4 py-2.5 text-sm font-semibold text-white transition hover:from-red-800 hover:to-red-700 disabled:bg-gray-400 disabled:cursor-not-allowed shadow-md"
                        >
                            {isLoading ? "Signing in..." : "Sign In"}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
