"use client"

import { useState } from "react"
import type { KeyboardEvent } from "react"
import { TrendingDown, TrendingUp, Edit2, Check, X, AlertTriangle } from "lucide-react"

interface Transaction {
  amount: number
  date: string // ISO string e.g. "2025-04-19T16:22:00"
}

interface DailySpendingLimitProps {
  todaySpent: number
  dailyLimit: number
  transactions: Transaction[]
  onLimitChange: (newLimit: number) => void
}

export function DailySpendingLimit({ todaySpent, dailyLimit, transactions, onLimitChange }: DailySpendingLimitProps) {
  const [isEditingLimit, setIsEditingLimit] = useState(false)
  const [tempLimit, setTempLimit] = useState("")
  const [errorMsg, setErrorMsg] = useState("")

  const remaining = dailyLimit - todaySpent
  const percentageUsed = dailyLimit > 0 ? (todaySpent / dailyLimit) * 100 : 0
  const isOverLimit = todaySpent > dailyLimit
  const isNearLimit = percentageUsed > 80 && !isOverLimit
  const isHalfway = percentageUsed > 50 && percentageUsed <= 80

  // --- Stats calculations ---
  const now = new Date()

  const dayTotals = transactions.reduce<Record<string, number>>((acc, t) => {
    const day = new Date(t.date).toDateString()
    acc[day] = (acc[day] || 0) + t.amount
    return acc
  }, {})
  const uniqueDays = Object.keys(dayTotals).length
  const avgPerDay = uniqueDays > 0
    ? Object.values(dayTotals).reduce((a, b) => a + b, 0) / uniqueDays
    : 0

  const startOfWeek = new Date(now)
  startOfWeek.setDate(now.getDate() - ((now.getDay() + 6) % 7))
  startOfWeek.setHours(0, 0, 0, 0)
  const thisWeekTotal = transactions
    .filter(t => new Date(t.date) >= startOfWeek)
    .reduce((sum, t) => sum + t.amount, 0)

  const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1)
  const thisMonthTotal = transactions
    .filter(t => new Date(t.date) >= startOfMonth)
    .reduce((sum, t) => sum + t.amount, 0)
  // --- End stats calculations ---

  const handleSaveLimit = () => {
    const newLimit = parseFloat(tempLimit)
    if (isNaN(newLimit) || newLimit <= 0) {
      setErrorMsg("Please enter a valid amount.")
      return
    }
    // FIX: clear error, update limit, reset temp state
    setErrorMsg("")
    onLimitChange(newLimit)
    setTempLimit("")       // ← was missing: stale value on re-open
    setIsEditingLimit(false)
  }

  const handleCancel = () => {
    setIsEditingLimit(false)
    setTempLimit("")
    setErrorMsg("")
  }

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleSaveLimit()
    if (e.key === "Escape") handleCancel()
  }

  const getBarColor = () => {
    if (isOverLimit) return "#ef4444"
    if (isNearLimit) return "#f59e0b"
    if (isHalfway) return "#eab308"
    return "#22c55e"
  }

  const remainingConfig = isOverLimit
    ? { color: "#dc2626", bg: "#fef2f2", border: "#fecaca" }
    : { color: "#16a34a", bg: "#f0fdf4", border: "#bbf7d0" }

  return (
    <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm h-80 flex flex-col justify-between">

      {/* Header */}
      <div className="flex items-center justify-between shrink-0">
        <div className="flex items-center gap-2">
          <h2 className="text-base font-bold text-gray-900">Daily Spending Limit</h2>
          {/* FIX: surface over-limit warning so parent UI can react */}
          {isOverLimit && (
            <span className="flex items-center gap-1 text-[10px] font-semibold text-red-600 bg-red-50 border border-red-200 px-1.5 py-0.5 rounded-md">
              <AlertTriangle className="h-2.5 w-2.5" />
              Over limit
            </span>
          )}
        </div>
        {!isEditingLimit && (
          <button
            onClick={() => { setTempLimit(dailyLimit.toString()); setIsEditingLimit(true) }}
            className="p-1.5 rounded-lg text-gray-400 hover:bg-gray-100 hover:text-gray-600 transition-colors"
          >
            <Edit2 className="h-3.5 w-3.5" />
          </button>
        )}
      </div>

      {/* Big spend number */}
      <div className="shrink-0">
        <div className="flex items-baseline gap-1">
          <span className="text-xs text-gray-400 font-medium">₱</span>
          <span className="text-3xl font-bold text-gray-900 tracking-tight">
            {todaySpent.toLocaleString("en-PH", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </span>
        </div>
        <p className="text-xs text-gray-400 mt-0.5">spent today</p>
      </div>

      {/* Progress bar */}
      <div className="shrink-0">
        <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
          <div
            className="h-full rounded-full transition-all duration-500"
            style={{ width: `${Math.min(percentageUsed, 100)}%`, backgroundColor: getBarColor() }}
          />
        </div>
      </div>

      {/* Budget + Remaining */}
      <div className="grid grid-cols-2 gap-2 shrink-0">

        {/* Budget cell */}
        <div className={`rounded-lg border px-3 py-2.5 transition-all duration-200 ${isEditingLimit
          ? "border-gray-300 bg-white shadow-sm ring-1 ring-gray-200"
          : "border-gray-100 bg-gray-50"
          }`}>
          <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider mb-1">Budget</p>

          {isEditingLimit ? (
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-1.5">
                <span className="text-sm font-semibold text-gray-400">₱</span>
                <input
                  type="number"
                  value={tempLimit}
                  onChange={(e) => { setTempLimit(e.target.value); setErrorMsg("") }}
                  onKeyDown={handleKeyDown}
                  autoFocus
                  className="
                    w-full bg-transparent text-sm font-bold text-gray-900
                    focus:outline-none
                    [appearance:textfield]
                    [&::-webkit-outer-spin-button]:appearance-none
                    [&::-webkit-inner-spin-button]:appearance-none
                  "
                  placeholder="0"
                />
              </div>
              {/* FIX: show validation error inline */}
              {errorMsg && (
                <p className="text-[9px] text-red-500 font-medium -mt-1">{errorMsg}</p>
              )}
              <div className="flex items-center gap-1.5">
                <button
                  onClick={handleSaveLimit}
                  className="flex items-center gap-1 px-2 py-0.5 rounded-md bg-gray-900 text-white text-[10px] font-semibold hover:bg-gray-700 transition-colors"
                >
                  <Check className="h-2.5 w-2.5" />
                  Save
                </button>
                <button
                  onClick={handleCancel}
                  className="flex items-center gap-1 px-2 py-0.5 rounded-md border border-gray-200 text-gray-500 text-[10px] font-semibold hover:bg-gray-50 transition-colors"
                >
                  <X className="h-2.5 w-2.5" />
                  Cancel
                </button>
              </div>
            </div>
          ) : (
            <p className="text-sm font-bold text-gray-800">
              ₱{dailyLimit.toLocaleString("en-PH", { minimumFractionDigits: 2 })}
            </p>
          )}
        </div>

        {/* Remaining */}
        <div
          className="rounded-lg px-3 py-2.5 border"
          style={{ background: remainingConfig.bg, borderColor: remainingConfig.border }}
        >
          <p className="text-[10px] font-semibold uppercase tracking-wider mb-1" style={{ color: remainingConfig.color, opacity: 0.7 }}>
            Remaining
          </p>
          <div className="flex items-center justify-between">
            <p className="text-sm font-bold" style={{ color: remainingConfig.color }}>
              {isOverLimit ? "−" : ""}₱{Math.abs(remaining).toLocaleString("en-PH", { maximumFractionDigits: 0 })}
            </p>
            {isOverLimit
              ? <TrendingUp className="h-3.5 w-3.5" style={{ color: remainingConfig.color }} />
              : <TrendingDown className="h-3.5 w-3.5" style={{ color: remainingConfig.color }} />}
          </div>
        </div>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-3 gap-2 pt-3 border-t border-gray-100 shrink-0">
        {[
          { label: "Avg / Day", value: `₱${avgPerDay.toLocaleString("en-PH", { maximumFractionDigits: 0 })}` },
          { label: "This Week", value: `₱${thisWeekTotal.toLocaleString("en-PH", { maximumFractionDigits: 0 })}` },
          { label: "This Month", value: `₱${thisMonthTotal.toLocaleString("en-PH", { maximumFractionDigits: 0 })}` },
        ].map(({ label, value }) => (
          <div key={label}>
            <p className="text-[10px] text-gray-400 uppercase tracking-wide mb-0.5">{label}</p>
            <p className="text-xs font-bold text-gray-700">{value}</p>
          </div>
        ))}
      </div>

    </div>
  )
}