"use client";

import { useState } from "react";
import type { KeyboardEvent } from "react";
import { AlertTriangle, Check, Edit2, TrendingDown, TrendingUp, X } from "lucide-react";

interface Transaction {
	amount: number;
	date: string;
}

interface DailySpendingLimitProps {
	todaySpent: number;
	dailyLimit: number;
	transactions: Transaction[];
	onLimitChange: (newLimit: number) => void;
	onAddTransaction?: (amount: number) => void;
}

export function DailySpendingLimit({
	todaySpent,
	dailyLimit,
	transactions,
	onLimitChange,
	onAddTransaction,
}: DailySpendingLimitProps) {
	const [isEditingLimit, setIsEditingLimit] = useState(false);
	const [tempLimit, setTempLimit] = useState("");
	const [errorMsg, setErrorMsg] = useState("");
	const [spendInput, setSpendInput] = useState("");
	const [spendError, setSpendError] = useState("");

	const remaining = dailyLimit - todaySpent;
	const percentageUsed = dailyLimit > 0 ? (todaySpent / dailyLimit) * 100 : 0;
	const isOverLimit = todaySpent > dailyLimit;
	const isNearLimit = percentageUsed > 80 && !isOverLimit;
	const isHalfway = percentageUsed > 50 && percentageUsed <= 80;

	const now = new Date();

	const dayTotals = transactions.reduce<Record<string, number>>((acc, transaction) => {
		const day = new Date(transaction.date).toDateString();
		acc[day] = (acc[day] || 0) + transaction.amount;
		return acc;
	}, {});

	const uniqueDays = Object.keys(dayTotals).length;
	const avgPerDay =
		uniqueDays > 0
			? Object.values(dayTotals).reduce((sum, total) => sum + total, 0) / uniqueDays
			: 0;

	const startOfWeek = new Date(now);
	startOfWeek.setDate(now.getDate() - ((now.getDay() + 6) % 7));
	startOfWeek.setHours(0, 0, 0, 0);

	const thisWeekTotal = transactions
		.filter((transaction) => new Date(transaction.date) >= startOfWeek)
		.reduce((sum, transaction) => sum + transaction.amount, 0);

	const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
	const thisMonthTotal = transactions
		.filter((transaction) => new Date(transaction.date) >= startOfMonth)
		.reduce((sum, transaction) => sum + transaction.amount, 0);

	const handleSaveLimit = () => {
		const newLimit = parseFloat(tempLimit);
		if (isNaN(newLimit) || newLimit <= 0) {
			setErrorMsg("Please enter a valid amount.");
			return;
		}

		setErrorMsg("");
		onLimitChange(newLimit);
		setTempLimit("");
		setIsEditingLimit(false);
	};

	const handleCancel = () => {
		setIsEditingLimit(false);
		setTempLimit("");
		setErrorMsg("");
	};

	const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
		if (event.key === "Enter") handleSaveLimit();
		if (event.key === "Escape") handleCancel();
	};

	const handleSpend = () => {
		const amount = parseFloat(spendInput);
		if (isNaN(amount) || amount <= 0) {
			setSpendError("Please enter a valid amount.");
			return;
		}
		if (todaySpent + amount > dailyLimit) {
			setSpendError(`Exceeds your daily limit by PHP ${((todaySpent + amount) - dailyLimit).toLocaleString("en-PH", { maximumFractionDigits: 2 })}.`);
			return;
		}
		setSpendError("");
		setSpendInput("");
		onAddTransaction?.(amount);
	};

	const handleSpendKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
		if (event.key === "Enter") handleSpend();
	};

	const getBarColor = () => {
		if (isOverLimit) return "#ef4444";
		if (isNearLimit) return "#f59e0b";
		if (isHalfway) return "#eab308";
		return "#22c55e";
	};

	const remainingConfig = isOverLimit
		? { color: "#dc2626", bg: "#fef2f2", border: "#fecaca" }
		: { color: "#16a34a", bg: "#f0fdf4", border: "#bbf7d0" };

	return (
		<div className="flex h-80 flex-col justify-between rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
			<div className="flex shrink-0 items-center justify-between">
				<div className="flex items-center gap-2">
					<h2 className="text-base font-bold text-gray-900">Daily Spending Limit</h2>
					{isOverLimit && (
						<span className="flex items-center gap-1 rounded-md border border-red-200 bg-red-50 px-1.5 py-0.5 text-[10px] font-semibold text-red-600">
							<AlertTriangle className="h-2.5 w-2.5" />
							Over limit
						</span>
					)}
				</div>
				{!isEditingLimit && (
					<button
						onClick={() => {
							setTempLimit(dailyLimit.toString());
							setIsEditingLimit(true);
						}}
						className="rounded-lg border border-gray-300 p-1.5 text-gray-400 transition-colors hover:bg-gray-50 hover:text-gray-600">
						<Edit2 className="h-3.5 w-3.5" />
					</button>
				)}
			</div>

			<div className="shrink-0">
				<div className="flex items-baseline gap-1">
					<span className="text-xs font-medium text-gray-400">PHP</span>
					<span className="text-3xl font-bold tracking-tight text-gray-900">
						{todaySpent.toLocaleString("en-PH", {
							minimumFractionDigits: 2,
							maximumFractionDigits: 2,
						})}
					</span>
				</div>
				<p className="mt-0.5 text-xs text-gray-400">spent today</p>
			</div>

			<div className="shrink-0">
				<div className="h-1.5 w-full overflow-hidden rounded-full bg-gray-100">
					<div
						className="h-full rounded-full transition-all duration-500"
						style={{
							width: `${Math.min(percentageUsed, 100)}%`,
							backgroundColor: getBarColor(),
						}}
					/>
				</div>
			</div>

			<div className="grid shrink-0 grid-cols-2 gap-2">
				<div
					className={`rounded-lg border px-3 py-2.5 transition-all duration-200 ${
						isEditingLimit
							? "border-gray-300 bg-white shadow-sm ring-1 ring-gray-200"
							: "border-gray-100 bg-gray-50"
					}`}>
					<p className="mb-1 text-[10px] font-semibold uppercase tracking-wider text-gray-400">
						Budget
					</p>

					{isEditingLimit ? (
						<div className="flex flex-col gap-2">
							<div className="flex items-center gap-1.5">
								<span className="text-sm font-semibold text-gray-400">PHP</span>
								<input
									type="number"
									value={tempLimit}
									onChange={(event) => {
										setTempLimit(event.target.value);
										setErrorMsg("");
									}}
									onKeyDown={handleKeyDown}
									autoFocus
									className="
										w-full bg-transparent text-sm font-bold text-gray-900
										focus:outline-none
										[appearance:textfield]
										[&::-webkit-inner-spin-button]:appearance-none
										[&::-webkit-outer-spin-button]:appearance-none
									"
									placeholder="0"
								/>
							</div>
							{errorMsg && (
								<p className="-mt-1 text-[9px] font-medium text-red-500">
									{errorMsg}
								</p>
							)}
							<div className="flex items-center gap-1.5">
								<button
									onClick={handleSaveLimit}
									className="flex items-center gap-1 rounded-md bg-red-950 px-2 py-0.5 text-[10px] font-semibold text-white transition-colors hover:bg-gray-700">
									<Check className="h-2.5 w-2.5" />
									Save
								</button>
								<button
									onClick={handleCancel}
									className="flex items-center gap-1 rounded-md border border-gray-200 px-2 py-0.5 text-[10px] font-semibold text-gray-500 transition-colors hover:bg-gray-50">
									<X className="h-2.5 w-2.5" />
									Cancel
								</button>
							</div>
						</div>
					) : (
						<p className="text-sm font-bold text-gray-800">
							PHP {dailyLimit.toLocaleString("en-PH", { minimumFractionDigits: 2 })}
						</p>
					)}
				</div>

				<div
					className="rounded-lg border px-3 py-2.5"
					style={{ background: remainingConfig.bg, borderColor: remainingConfig.border }}>
					<p
						className="mb-1 text-[10px] font-semibold uppercase tracking-wider"
						style={{ color: remainingConfig.color, opacity: 0.7 }}>
						Remaining
					</p>
					<div className="flex items-center justify-between">
						<p className="text-sm font-bold" style={{ color: remainingConfig.color }}>
							{isOverLimit ? "-" : ""}PHP{" "}
							{Math.abs(remaining).toLocaleString("en-PH", {
								maximumFractionDigits: 0,
							})}
						</p>
						{isOverLimit ? (
							<TrendingUp
								className="h-3.5 w-3.5"
								style={{ color: remainingConfig.color }}
							/>
						) : (
							<TrendingDown
								className="h-3.5 w-3.5"
								style={{ color: remainingConfig.color }}
							/>
						)}
					</div>
				</div>
			</div>

			{onAddTransaction && (
				<div className="shrink-0 flex items-center gap-2 rounded-lg border border-gray-100 bg-gray-50 px-3 py-2">
					<span className="text-xs font-semibold text-gray-400">PHP</span>
					<input
						type="number"
						value={spendInput}
						onChange={(e) => {
							setSpendInput(e.target.value);
							setSpendError("");
						}}
						onKeyDown={handleSpendKeyDown}
						placeholder="Enter amount"
						className="
							w-full bg-transparent text-xs font-bold text-gray-900 placeholder:font-normal placeholder:text-gray-300
							focus:outline-none
							[appearance:textfield]
							[&::-webkit-inner-spin-button]:appearance-none
							[&::-webkit-outer-spin-button]:appearance-none
						"
					/>
					<button
						onClick={handleSpend}
						className="rounded-md bg-red-950 px-2.5 py-1 text-[10px] font-semibold text-white transition-colors hover:bg-gray-700 whitespace-nowrap">
						Add Spend
					</button>
					{spendError && (
						<p className="absolute mt-8 text-[9px] font-medium text-red-500">{spendError}</p>
					)}
				</div>
			)}

			<div className="grid shrink-0 grid-cols-3 gap-2 border-t border-gray-100 pt-3">
				{[
					{
						label: "Avg / Day",
						value: `PHP ${avgPerDay.toLocaleString("en-PH", { maximumFractionDigits: 0 })}`,
					},
					{
						label: "This Week",
						value: `PHP ${thisWeekTotal.toLocaleString("en-PH", { maximumFractionDigits: 0 })}`,
					},
					{
						label: "This Month",
						value: `PHP ${thisMonthTotal.toLocaleString("en-PH", { maximumFractionDigits: 0 })}`,
					},
				].map(({ label, value }) => (
					<div key={label}>
						<p className="mb-0.5 text-[10px] uppercase tracking-wide text-gray-400">
							{label}
						</p>
						<p className="text-xs font-bold text-gray-700">{value}</p>
					</div>
				))}
			</div>
		</div>
	);
}