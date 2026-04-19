import { ShoppingBag, Clock, Share2, LogOut } from "lucide-react"
import { Settings } from "lucide-react"
interface ParentHeaderProps {
    username: string
    currentTime: string
    onShare: () => void
    onLogout: () => void
    onSettingsClick: () => void
}

export function ParentHeader({ username, currentTime, onShare, onLogout, onSettingsClick }: ParentHeaderProps) {
    return (
        <header className="bg-gradient-to-r from-red-950 to-red-900 border-b border-red-900 px-4 py-3">
            <div className="flex items-center justify-between gap-2">
                {/* Logo */}
                <div className="flex items-center gap-2 min-w-0">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white text-red-900">
                        <ShoppingBag className="h-4 w-4" />
                    </div>
                    <div className="min-w-0">
                        <h1 className="text-sm font-semibold text-white leading-tight">EDUTAP</h1>
                        <p className="hidden sm:block text-xs text-red-100 truncate">St. Clare College of Caloocan</p>
                    </div>
                </div>

                {/* Right side */}
                <div className="flex items-center gap-1 sm:gap-3 shrink-0">
                    <span className="hidden md:block text-xs text-white">{username} (Parent)</span>
                    <div className="hidden sm:flex items-center gap-1 text-xs text-red-100">
                        <Clock className="h-3 w-3" />
                        <span className="font-mono">{currentTime}</span>
                    </div>
                    <button
                        onClick={onShare}
                        className="flex items-center gap-1 rounded-lg bg-white/10 border border-white/20 px-2 py-1.5 text-xs font-semibold text-white hover:bg-white/20"
                    >
                        <Share2 className="h-3.5 w-3.5" />
                        <span className="hidden sm:inline">Share</span>
                    </button>
                    <button
                        onClick={onSettingsClick}
                        className="flex items-center gap-1 rounded-lg px-3 py-1.5 text-sm text-white hover:bg-white/20 transition"
                    >
                        <Settings className="h-4 w-4" />
                    </button>
                    <button
                        onClick={onLogout}
                        className="flex items-center gap-1 rounded-lg bg-white border border-white px-2 py-1.5 text-xs font-semibold text-red-900 hover:bg-red-50"
                    >
                        <LogOut className="h-3.5 w-3.5" />
                        <span className="hidden sm:inline">Logout</span>
                    </button>
                </div>
            </div>
        </header>
    )
}

export default function App() {
    const handleShare = () => {
        console.log('Share clicked')
    }

    const handleLogout = () => {
        console.log('Logging out...')
    }

    return (
        <div className="min-h-screen bg-gray-50">
            <ParentHeader
                username="Maria Santos"
                currentTime="2:30 PM"
                onShare={handleShare}
                onLogout={handleLogout}
                onSettingsClick={() => { }}  // Add this line
            />
            <div className="p-8">
                <div className="bg-white rounded-lg border border-gray-200 p-6">
                    <h2 className="text-xl font-semibold mb-2">Parent Dashboard</h2>
                    <p className="text-gray-600">View your child's transactions and account balance...</p>
                </div>
            </div>
        </div>
    )
}