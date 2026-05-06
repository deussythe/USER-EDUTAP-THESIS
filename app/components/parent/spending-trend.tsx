"use client";

import { useState } from "react";

interface Transaction {
	amount: number;
	date: string; // ISO string
}

interface SpendingTrendProps {
	transactions: Transaction[];
	dailyLimit: number;
}

const RANGES = [
	{ label: "7D", days: 7 },
	{ label: "14D", days: 14 },
	{ label: "30D", days: 30 },
];

export function SpendingTrend({ transactions, dailyLimit }: SpendingTrendProps) {
	const [range, setRange] = useState(7);

	const days = Array.from({ length: range }, (_, i) => {
		const d = new Date();
		d.setDate(d.getDate() - (range - 1 - i));
		d.setHours(0, 0, 0, 0);
		return d;
	});

	const dayTotals = days.map((day) => {
		const dayStr = day.toDateString();
		const total = transactions
			.filter((t) => new Date(t.date).toDateString() === dayStr)
			.reduce((sum, t) => sum + t.amount, 0);

		// Label: for 7D show weekday, for 14D/30D show "Apr 19" style
		const label =
			range === 7
				? day.toLocaleDateString("en-PH", { weekday: "short" })
				: day.toLocaleDateString("en-PH", { month: "short", day: "numeric" });

		return {
			label,
			total,
			isToday: day.toDateString() === new Date().toDateString(),
		};
	});

	const maxValue = Math.max(...dayTotals.map((d) => d.total), dailyLimit, 1);

	// For 30D, only show every 5th label to avoid crowding
	const showLabel = (i: number) => {
		if (range <= 14) return true;
		return i === 0 || i === range - 1 || i % 5 === 0;
	};

	return (
		<div className="rounded-xl border border-gray-200 bg-white p-3.5 shadow-sm sm:p-5">
			<div className="mb-3 flex flex-wrap items-center justify-between gap-2 sm:mb-4">
				<h2 className="text-base font-bold text-gray-900">Spending Trend</h2>

				<div className="flex items-center gap-1 bg-gray-100 rounded-lg p-0.5">
					{RANGES.map((r) => (
						<button
							key={r.label}
							onClick={() => setRange(r.days)}
							className={`px-2.5 py-1 rounded-md text-[11px] font-semibold transition-all ${
								range === r.days
									? "bg-white text-gray-900 shadow-sm"
									: "text-gray-400 hover:text-gray-600"
							}`}>
							{r.label}
						</button>
					))}
				</div>
			</div>

			<div className="mb-2.5 flex flex-wrap items-center gap-2.5 text-[10px] uppercase tracking-wide text-gray-400 sm:mb-3">
				<span className="flex items-center gap-1">
					<span className="inline-block w-2.5 h-2.5 rounded-sm bg-[#8B0000]" /> Spent
				</span>
				<span className="flex items-center gap-1">
					<span className="inline-block w-2.5 h-0.5 bg-amber-400" /> Limit
				</span>
			</div>

			<div className="relative">
				{/* Limit line */}
				<div
					className="absolute left-0 right-0 border-t border-dashed border-amber-400 z-10"
					style={{ bottom: `${(dailyLimit / maxValue) * 100}%` }}>
					<span className="absolute -top-3.5 right-0 text-[9px] font-semibold text-amber-500">
						₱{dailyLimit.toLocaleString("en-PH", { maximumFractionDigits: 0 })}
					</span>
				</div>

				{/* Bars */}
				<div className="flex items-end justify-between gap-0.5 h-28">
					{dayTotals.map(({ label, total, isToday }, i) => {
						const heightPct = maxValue > 0 ? (total / maxValue) * 100 : 0;
						const isOver = total > dailyLimit;
						const barColor = isOver ? "#ef4444" : isToday ? "#8B0000" : "#c4b5b5";

						return (
							<div
								key={i}
								className="flex flex-col items-center gap-1 flex-1 min-w-0">
								<div
									className="w-full flex items-end justify-center"
									style={{ height: "100%" }}>
									<div
										className="w-full rounded-t-sm transition-all duration-500 relative group"
										style={{
											height: total > 0 ? `${Math.max(heightPct, 4)}%` : "4%",
											backgroundColor: barColor,
											opacity: total > 0 ? 1 : 0.15,
										}}>
										{/* Tooltip */}
										{total > 0 && (
											<div className="absolute -top-7 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-[9px] font-semibold px-1.5 py-0.5 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity z-20">
												₱
												{total.toLocaleString("en-PH", {
													maximumFractionDigits: 0,
												})}
											</div>
										)}
									</div>
								</div>
								<span
									className={`text-[9px] font-medium truncate w-full text-center ${
										isToday ? "text-[#8B0000] font-bold" : "text-gray-400"
									} ${!showLabel(i) ? "invisible" : ""}`}>
									{label}
								</span>
							</div>
						);
					})}
				</div>
			</div>

			<p className="mt-2.5 text-[10px] text-gray-400 sm:mt-3">
				Red bars = over daily limit · Darker bar = today
			</p>
		</div>
	);
}
