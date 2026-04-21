import { ShoppingBag, Clock, Share2, LogOut, Settings, ChevronDown } from "lucide-react"
import { useState, useRef, useEffect } from "react"

interface ParentHeaderProps {
    username: string
    currentTime: string
    photoUrl?: string
    gradeLevel?: string
    balance?: number
    onShare: () => void
    onLogout: () => void
    onSettingsClick: () => void
}

export function ParentHeader({ username, currentTime, photoUrl, gradeLevel, balance, onShare, onLogout, onSettingsClick }: ParentHeaderProps) {
    const [dropdownOpen, setDropdownOpen] = useState(false)
    const dropdownRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
                setDropdownOpen(false)
            }
        }
        document.addEventListener("mousedown", handleClickOutside)
        return () => document.removeEventListener("mousedown", handleClickOutside)
    }, [])

    return (
        <header className="bg-gradient-to-r from-red-950 to-red-900 border-b border-red-900 px-4 py-3 relative z-50">
            <div className="flex items-center justify-between gap-2">

                {/* Left: Logo */}
                <div className="flex items-center gap-2 min-w-0">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white text-red-900">
                        <ShoppingBag className="h-4 w-4" />
                    </div>
                    <div className="min-w-0">
                        <h1 className="text-sm font-semibold text-white leading-tight">EDUTAP</h1>
                        <p className="hidden sm:block text-xs text-red-100 truncate">St. Clare College of Caloocan</p>
                    </div>
                </div>

                {/* Right: Actions + Avatar */}
                <div className="flex items-center gap-2 sm:gap-3 shrink-0">

                    {/* Clock */}
                    <div className="hidden sm:flex items-center gap-1 text-xs text-red-100">
                        <Clock className="h-3 w-3" />
                        <span className="font-mono">{currentTime}</span>
                    </div>

                    {/* Share */}
                    <button
                        onClick={onShare}
                        className="flex items-center gap-1 rounded-lg bg-white/10 border border-white/20 px-2 py-1.5 text-xs font-semibold text-white hover:bg-white/20 transition"
                    >
                        <Share2 className="h-3.5 w-3.5" />
                        <span className="hidden sm:inline">Share</span>
                    </button>

                    {/* Divider */}
                    <div className="hidden sm:block h-6 w-px bg-white/20" />

                    {/* Avatar Dropdown */}
                    <div className="relative" ref={dropdownRef}>
                        <button
                            onClick={() => setDropdownOpen(!dropdownOpen)}
                            className="flex items-center gap-2 rounded-lg px-1.5 py-1 hover:bg-white/10 transition"
                        >
                            {/* Avatar */}
                            <div className="relative">
                                {photoUrl ? (
                                    <img
                                        src={photoUrl}
                                        alt={username}
                                        className="h-8 w-8 rounded-full object-cover border-2 border-white/40 ring-2 ring-white/20"
                                    />
                                ) : (
                                    <div className="h-8 w-8 rounded-full bg-white/20 border-2 border-white/40 flex items-center justify-center">
                                        <span className="text-xs font-bold text-white">
                                            {username.charAt(0).toUpperCase()}
                                        </span>
                                    </div>
                                )}
                                <span className="absolute bottom-0 right-0 h-2 w-2 rounded-full bg-green-400 border border-red-900" />
                            </div>

                            {/* Name */}
                            <div className="hidden md:flex flex-col leading-tight text-left">
                                <span className="text-xs font-semibold text-white">{username}</span>
                                <span className="text-xs text-red-200">Parent</span>
                            </div>

                            <ChevronDown className={`h-3.5 w-3.5 text-white/70 transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`} />
                        </button>

                        {/* Dropdown */}
                        {dropdownOpen && (
                            <div className="absolute right-0 mt-2 w-64 rounded-xl bg-white shadow-2xl border border-gray-100 overflow-hidden">

                                {/* Profile card */}
                                <div className="p-4 bg-gradient-to-br from-red-50 to-white border-b border-gray-100 flex items-center gap-3">
                                    <div className="relative flex-shrink-0">
                                        {photoUrl ? (
                                            <img
                                                src={photoUrl}
                                                alt={username}
                                                className="h-14 w-14 rounded-full object-cover border-2 border-red-200 shadow-sm"
                                            />
                                        ) : (
                                            <div className="h-14 w-14 rounded-full bg-red-100 flex items-center justify-center">
                                                <span className="text-xl font-bold text-red-900">
                                                    {username.charAt(0).toUpperCase()}
                                                </span>
                                            </div>
                                        )}
                                        <span className="absolute bottom-0.5 right-0.5 h-3 w-3 rounded-full bg-green-400 border-2 border-white" />
                                    </div>
                                    <div className="min-w-0 flex-1">
                                        <p className="font-semibold text-gray-900 text-sm truncate">{username}</p>
                                        {gradeLevel && (
                                            <p className="text-xs text-gray-500">{gradeLevel}</p>
                                        )}
                                        {balance !== undefined && (
                                            <p className="text-xs font-bold text-red-700 mt-0.5">
                                                ₱{balance.toFixed(2)}
                                            </p>
                                        )}
                                        <span className="inline-flex items-center gap-1 mt-1 text-xs text-green-600 font-medium">
                                            <span className="h-1.5 w-1.5 rounded-full bg-green-500 inline-block" />
                                            Active
                                        </span>
                                    </div>
                                </div>

                                {/* Menu */}
                                <div className="py-1.5">
                                    <button
                                        onClick={() => { onSettingsClick(); setDropdownOpen(false) }}
                                        className="w-full flex items-center gap-3 px-4 py-2.5 hover:bg-gray-50 transition"
                                    >
                                        <div className="h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
                                            <Settings className="h-4 w-4 text-gray-600" />
                                        </div>
                                        <div className="text-left">
                                            <p className="text-sm font-medium text-gray-800">Settings</p>
                                            <p className="text-xs text-gray-400">Manage your account</p>
                                        </div>
                                    </button>

                                    <div className="mx-3 my-1 border-t border-gray-100" />

                                    <button
                                        onClick={() => { onLogout(); setDropdownOpen(false) }}
                                        className="w-full flex items-center gap-3 px-4 py-2.5 hover:bg-red-50 transition"
                                    >
                                        <div className="h-8 w-8 rounded-full bg-red-50 flex items-center justify-center flex-shrink-0">
                                            <LogOut className="h-4 w-4 text-red-600" />
                                        </div>
                                        <div className="text-left">
                                            <p className="text-sm font-medium text-red-600">Log Out</p>
                                            <p className="text-xs text-red-300">See you next time!</p>
                                        </div>
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </header>
    )
}