import { useState } from "react"
import { ShoppingBag, TrendingUp, Download, ChevronDown, ChevronUp } from "lucide-react"

interface ActivityItem {
    name: string
    qty: number
    price: number
}

interface Activity {
    id: string
    item: string
    items: ActivityItem[]
    date: string
    time: string
    amount: number
    type: "expense" | "income"
    category: string
}

interface RecentActivityProps {
    activities: Activity[]
    onDownloadClick: () => void
}

export function RecentActivity({ activities, onDownloadClick }: RecentActivityProps) {
    const [expandedId, setExpandedId] = useState<string | null>(null)

    const toggle = (id: string) => setExpandedId(prev => prev === id ? null : id)

    return (
        <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm h-80 flex flex-col">
            <div className="mb-5 flex items-center justify-between shrink-0">
                <h2 className="text-base font-bold text-gray-900">Recent Activity</h2>
                <div className="flex items-center gap-2">
                    
                    <button
                        onClick={onDownloadClick}
                        className="flex items-center gap-1 rounded-lg border border-gray-300 px-3 py-1 text-xs font-medium text-gray-700 hover:bg-gray-50"
                    >
                        <Download className="h-3 w-3" />
                        Export
                    </button>
                </div>
            </div>

            {activities.length === 0 ? (
                <div className="py-8 text-center text-sm text-gray-400 flex-1">No activity yet</div>
            ) : (
                    <div className="space-y-2 overflow-y-auto pr-1 flex-1 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                    {activities.map((activity) => (
                        <div key={activity.id} className="rounded-lg border border-gray-100 overflow-hidden">
                            <div
                                className="flex items-center gap-3 p-3 cursor-pointer hover:bg-gray-50 transition-colors"
                                onClick={() => activity.items?.length > 0 && toggle(activity.id)}
                            >
                                <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${activity.type === "expense" ? "bg-red-100" : "bg-green-100"}`}>
                                    {activity.type === "expense"
                                        ? <ShoppingBag className="h-4 w-4 text-red-600" />
                                        : <TrendingUp className="h-4 w-4 text-green-600" />
                                    }
                                </div>
                                <div className="flex-1 min-w-0">
                                    <div className="text-sm font-semibold text-gray-900 truncate">{activity.item}</div>
                                    <div className="text-xs text-gray-400">{activity.date} • {activity.time}</div>
                                </div>
                                <div className="flex items-center gap-2 shrink-0">
                                    <span className={`text-sm font-bold ${activity.amount < 0 ? "text-red-600" : "text-green-600"}`}>
                                        {activity.amount < 0 ? "−" : "+"}₱{Math.abs(activity.amount).toFixed(2)}
                                    </span>
                                    {activity.items?.length > 0 && (
                                        expandedId === activity.id
                                            ? <ChevronUp className="h-4 w-4 text-gray-400" />
                                            : <ChevronDown className="h-4 w-4 text-gray-400" />
                                    )}
                                </div>
                            </div>

                            {expandedId === activity.id && activity.items?.length > 0 && (
                                <div className="border-t border-gray-100 bg-gray-50 px-4 py-3">
                                    <p className="text-xs font-semibold text-gray-500 mb-2 uppercase tracking-wide">Order breakdown</p>
                                    <div className="space-y-1.5">
                                        {activity.items.map((item, i) => (
                                            <div key={i} className="flex items-center justify-between text-xs">
                                                <div className="flex items-center gap-2">
                                                    <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-gray-200 text-gray-600 font-medium text-[10px]">
                                                        {item.qty}x
                                                    </span>
                                                    <span className="text-gray-700">{item.name}</span>
                                                </div>
                                                <span className="text-gray-500">₱{(item.price * item.qty).toFixed(2)}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="mt-2 pt-2 border-t border-gray-200 flex justify-between text-xs font-semibold text-gray-700">
                                        <span>Total</span>
                                        <span>₱{Math.abs(activity.amount).toFixed(2)}</span>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}