"use client";

import { AlertTriangle, Ban, ShoppingBag, Star } from "lucide-react";
import { useEffect, useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { auth, db } from "@/configs/firebase";

interface Transaction {
	amount: number;
	date: string;
	item?: string;
}

interface SpendingStatsProps {
	transactions: Transaction[];
	dailyLimit: number;
}

export function SpendingStats({ transactions, dailyLimit }: SpendingStatsProps) {
	const [timesLimitHit, setTimesLimitHit] = useState(0);

	useEffect(() => {
		const fetchLimitHits = async () => {
			const user = auth.currentUser;
			if (!user) return;

			const snap = await getDocs(
				query(
					collection(db, "notifications"),
					where("guardianId", "==", user.uid),
					where("type", "==", "limit_exceeded"),
				),
			);
			setTimesLimitHit(snap.size);
		};

		fetchLimitHits();
	}, []);

	const highestPurchase =
		transactions.length > 0
			? Math.max(...transactions.map((transaction) => transaction.amount))
			: 0;

	const now = new Date();
	const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
	const dayTotals = transactions
		.filter((transaction) => new Date(transaction.date) >= startOfMonth)
		.reduce<Record<string, number>>((acc, transaction) => {
			const day = new Date(transaction.date).toDateString();
			acc[day] = (acc[day] || 0) + transaction.amount;
			return acc;
		}, {});
	const daysOverLimit = Object.values(dayTotals).filter((total) => total > dailyLimit).length;

	const itemCounts = transactions.reduce<Record<string, number>>((acc, transaction) => {
		if (transaction.item) acc[transaction.item] = (acc[transaction.item] || 0) + 1;
		return acc;
	}, {});
	const topItem = Object.entries(itemCounts).sort((a, b) => b[1] - a[1])[0]?.[0] || "--";

	const stats = [
		{
			label: "Times Limit Hit",
			value: timesLimitHit === 0 ? "None" : `${timesLimitHit}x blocked`,
			icon: Ban,
			color: timesLimitHit > 0 ? "#dc2626" : "#16a34a",
			bg: timesLimitHit > 0 ? "#fef2f2" : "#f0fdf4",
		},
		{
			label: "Days Over Limit",
			value:
				daysOverLimit === 0
					? "None"
					: `${daysOverLimit} day${daysOverLimit > 1 ? "s" : ""}`,
			icon: AlertTriangle,
			color: daysOverLimit > 0 ? "#d97706" : "#16a34a",
			bg: daysOverLimit > 0 ? "#fffbeb" : "#f0fdf4",
		},
		{
			label: "Highest Purchase",
			value: `PHP ${highestPurchase.toLocaleString("en-PH", { maximumFractionDigits: 0 })}`,
			icon: ShoppingBag,
			color: "#4f46e5",
			bg: "#eef2ff",
		},
		{
			label: "Most Bought",
			value: topItem.length > 12 ? `${topItem.slice(0, 12)}...` : topItem,
			icon: Star,
			color: "#0891b2",
			bg: "#ecfeff",
		},
	];

	return (
		<div className="grid grid-cols-2 gap-2">
			{stats.map(({ label, value, icon: Icon, color, bg }) => (
				<div
					key={label}
					className="flex min-h-[4rem] items-center gap-2 rounded-xl border border-gray-100 p-2.5 sm:gap-2.5 sm:p-3"
					style={{ background: bg }}>
					<div className="shrink-0 rounded-lg p-1.5" style={{ background: `${color}18` }}>
						<Icon className="h-3.5 w-3.5" style={{ color }} />
					</div>
					<div className="min-w-0">
						<p className="mb-0.5 text-[10px] uppercase tracking-wide leading-tight text-gray-400">
							{label}
						</p>
						<p className="truncate text-xs font-bold text-gray-800 sm:text-sm">{value}</p>
					</div>
				</div>
			))}
		</div>
	);
}
