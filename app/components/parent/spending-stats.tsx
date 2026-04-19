"use client"

import { TrendingUp, ShoppingBag, AlertTriangle, Star } from "lucide-react"

interface Transaction {
    amount: number
    date: string // ISO string
    item?: string
}

interface SpendingStatsProps {
    transactions: Transaction[]
    dailyLimit: number
}

export function SpendingStats({ transactions, dailyLimit }: SpendingStatsProps) {
    const now = new Date()
    const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1)

    // Total spent this month
    const monthlyTotal = transactions
        .filter(t => new Date(t.date) >= startOfMonth)
        .reduce((sum, t) => sum + t.amount, 0)

    // Days over limit this month
    const dayTotals = transactions
        .filter(t => new Date(t.date) >= startOfMonth)
        .reduce<Record<string, number>>((acc, t) => {
            const day = new Date(t.date).toDateString()
            acc[day] = (acc[day] || 0) + t.amount
            return acc
        }, {})
    const daysOverLimit = Object.values(dayTotals).filter(total => total > dailyLimit).length

    // Highest single purchase
    const highestPurchase = transactions.length > 0
        ? Math.max(...transactions.map(t => t.amount))
        : 0

    // Most purchased item
    const itemCounts = transactions.reduce<Record<string, number>>((acc, t) => {
        if (t.item) acc[t.item] = (acc[t.item] || 0) + 1
        return acc
    }, {})
    const topItem = Object.entries(itemCounts).sort((a, b) => b[1] - a[1])[0]?.[0] || "—"

    const stats = [
        {
            label: "Total This Month",
            value: `₱${monthlyTotal.toLocaleString("en-PH", { maximumFractionDigits: 0 })}`,
            icon: TrendingUp,
            color: "#8B0000",
            bg: "#fff1f1",
        },
        {
            label: "Days Over Limit",
            value: daysOverLimit === 0 ? "None 🎉" : `${daysOverLimit} day${daysOverLimit > 1 ? "s" : ""}`,
            icon: AlertTriangle,
            color: daysOverLimit > 0 ? "#d97706" : "#16a34a",
            bg: daysOverLimit > 0 ? "#fffbeb" : "#f0fdf4",
        },
        {
            label: "Highest Purchase",
            value: `₱${highestPurchase.toLocaleString("en-PH", { maximumFractionDigits: 0 })}`,
            icon: ShoppingBag,
            color: "#4f46e5",
            bg: "#eef2ff",
        },
        {
            label: "Most Bought",
            value: topItem.length > 12 ? topItem.slice(0, 12) + "…" : topItem,
            icon: Star,
            color: "#0891b2",
            bg: "#ecfeff",
        },
    ]

    return (
        <div className="grid grid-cols-2 gap-2">
            {stats.map(({ label, value, icon: Icon, color, bg }) => (
                <div
                    key={label}
                    className="rounded-xl border border-gray-100 p-3 flex items-center gap-2.5 h-16"
                    style={{ background: bg }}
                >
                    <div
                        className="rounded-lg p-1.5 shrink-0"
                        style={{ background: color + "18" }}
                    >
                        <Icon className="h-3.5 w-3.5" style={{ color }} />
                    </div>
                    <div className="min-w-0">
                        <p className="text-[10px] text-gray-400 uppercase tracking-wide leading-tight mb-0.5">{label}</p>
                        <p className="text-sm font-bold text-gray-800 truncate">{value}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}