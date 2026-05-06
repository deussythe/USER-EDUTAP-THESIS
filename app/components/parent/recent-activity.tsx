import { useState, useRef, useEffect } from "react";
import {
	ShoppingBag,
	TrendingUp,
	Download,
	ChevronDown,
	ChevronUp,
	Calendar,
	ChevronLeft,
	ChevronRight,
	X,
} from "lucide-react";

interface ActivityItem {
	name: string;
	qty: number;
	price: number;
}

interface Activity {
	id: string;
	item: string;
	items: ActivityItem[];
	date: string;
	rawDate: string;
	time: string;
	amount: number;
	type: "expense" | "income";
	category: string;
}

interface RecentActivityProps {
	activities: Activity[];
	onDownloadClick: () => void;
	onDateChange: (date: string | null) => void;
	selectedDate: string | null;
}

const DAYS = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
const MONTHS = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December",
];

const escapeHtml = (value: string) =>
	value
		.replace(/&/g, "&amp;")
		.replace(/</g, "&lt;")
		.replace(/>/g, "&gt;")
		.replace(/"/g, "&quot;")
		.replace(/'/g, "&#39;");

function CalendarPicker({
	selectedDate,
	onSelect,
	onClose,
}: {
	selectedDate: string | null;
	onSelect: (date: string) => void;
	onClose: () => void;
}) {
	const today = new Date();
	const [viewYear, setViewYear] = useState(
		selectedDate ? parseInt(selectedDate.slice(0, 4)) : today.getFullYear(),
	);
	const [viewMonth, setViewMonth] = useState(
		selectedDate ? parseInt(selectedDate.slice(5, 7)) - 1 : today.getMonth(),
	);

	const firstDay = new Date(viewYear, viewMonth, 1).getDay();
	const daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate();

	const prevMonth = () => {
		if (viewMonth === 0) {
			setViewMonth(11);
			setViewYear((y) => y - 1);
		} else setViewMonth((m) => m - 1);
	};
	const nextMonth = () => {
		const isCurrentMonth = viewYear === today.getFullYear() && viewMonth === today.getMonth();
		if (isCurrentMonth) return;
		if (viewMonth === 11) {
			setViewMonth(0);
			setViewYear((y) => y + 1);
		} else setViewMonth((m) => m + 1);
	};

	const isCurrentMonth = viewYear === today.getFullYear() && viewMonth === today.getMonth();

	const cells: (number | null)[] = [
		...Array(firstDay).fill(null),
		...Array.from({ length: daysInMonth }, (_, i) => i + 1),
	];

	const isFuture = (day: number) => {
		const d = new Date(viewYear, viewMonth, day);
		d.setHours(0, 0, 0, 0);
		const t = new Date();
		t.setHours(0, 0, 0, 0);
		return d > t;
	};

	const isSelected = (day: number) => {
		if (!selectedDate) return false;
		const padded = `${viewYear}-${String(viewMonth + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
		return padded === selectedDate;
	};

	const isToday = (day: number) =>
		day === today.getDate() &&
		viewMonth === today.getMonth() &&
		viewYear === today.getFullYear();

	const handleSelect = (day: number) => {
		if (isFuture(day)) return;
		const padded = `${viewYear}-${String(viewMonth + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
		onSelect(padded);
		onClose();
	};

	return (
		<div className="absolute right-0 top-full z-50 mt-2 w-[min(16rem,calc(100vw-2.5rem))] rounded-xl border border-gray-200 bg-white p-3 shadow-xl select-none">
			{/* Month navigation */}
			<div className="flex items-center justify-between mb-3">
				<button
					onClick={prevMonth}
					className="p-1 rounded-lg hover:bg-gray-100 text-gray-500 transition-colors">
					<ChevronLeft className="h-4 w-4" />
				</button>
				<span className="text-sm font-semibold text-gray-800">
					{MONTHS[viewMonth]} {viewYear}
				</span>
				<button
					onClick={nextMonth}
					disabled={isCurrentMonth}
					className={`p-1 rounded-lg transition-colors ${isCurrentMonth ? "text-gray-200 cursor-not-allowed" : "hover:bg-gray-100 text-gray-500"}`}>
					<ChevronRight className="h-4 w-4" />
				</button>
			</div>

			{/* Day headers */}
			<div className="grid grid-cols-7 mb-1">
				{DAYS.map((d) => (
					<div
						key={d}
						className="text-center text-[10px] font-semibold text-gray-400 py-1">
						{d}
					</div>
				))}
			</div>

			{/* Day cells */}
			<div className="grid grid-cols-7 gap-y-0.5">
				{cells.map((day, i) => {
					if (!day) return <div key={`empty-${i}`} />;

					const future = isFuture(day);
					const selected = isSelected(day);
					const todayCell = isToday(day);

					return (
						<button
							key={day}
							onClick={() => handleSelect(day)}
							disabled={future}
							className={`
                                h-8 w-8 mx-auto rounded-lg text-xs font-medium transition-all
                                ${
									selected
										? "bg-[#8B0000] text-white font-bold shadow-sm"
										: todayCell
											? "bg-red-50 text-[#8B0000] font-bold ring-1 ring-[#8B0000]/30"
											: future
												? "text-gray-200 cursor-not-allowed"
												: "text-gray-700 hover:bg-gray-100"
								}
                            `}>
							{day}
						</button>
					);
				})}
			</div>

			{/* Footer */}
			<div className="mt-3 pt-2 border-t border-gray-100 flex justify-between items-center">
				<button
					onClick={() => {
						handleSelect(today.getDate());
					}}
					className="text-xs text-[#8B0000] font-semibold hover:underline">
					Today
				</button>
				<button onClick={onClose} className="text-xs text-gray-400 hover:text-gray-600">
					Close
				</button>
			</div>
		</div>
	);
}

export function RecentActivity({
	activities,
	onDownloadClick,
	onDateChange,
	selectedDate,
}: RecentActivityProps) {
	const [expandedId, setExpandedId] = useState<string | null>(null);
	const [showCalendar, setShowCalendar] = useState(false);
	const calendarRef = useRef<HTMLDivElement>(null);

	const toggle = (id: string) => setExpandedId((prev) => (prev === id ? null : id));

	// Close calendar on outside click
	useEffect(() => {
		const handler = (e: MouseEvent) => {
			if (calendarRef.current && !calendarRef.current.contains(e.target as Node)) {
				setShowCalendar(false);
			}
		};
		document.addEventListener("mousedown", handler);
		return () => document.removeEventListener("mousedown", handler);
	}, []);

	const handleExport = () => {
		const exportDate = selectedDate ?? new Date().toISOString().slice(0, 10);
		const generatedAt = new Date().toLocaleString("en-PH", {
			month: "long",
			day: "numeric",
			year: "numeric",
			hour: "2-digit",
			minute: "2-digit",
		});
		const totalAmount = activities.reduce((sum, activity) => sum + Math.abs(activity.amount), 0);

		const rowsHtml =
			activities.length > 0
				? activities
						.map((activity, index) => {
							const itemsDetail = activity.items?.length
								? activity.items
										.map(
											(item) =>
												`${item.qty}x ${escapeHtml(item.name)} @ PHP ${item.price.toFixed(2)}`,
										)
										.join(", ")
								: escapeHtml(activity.item);

							return `
								<tr style="background:${index % 2 === 0 ? "#ffffff" : "#fafafa"};">
									<td>${escapeHtml(activity.date)}</td>
									<td>${escapeHtml(activity.time)}</td>
									<td>${escapeHtml(activity.item)}</td>
									<td>${itemsDetail}</td>
									<td>${escapeHtml(activity.category)}</td>
									<td style="text-transform:capitalize;">${escapeHtml(activity.type)}</td>
									<td style="text-align:right; font-weight:700;">PHP ${Math.abs(activity.amount).toFixed(2)}</td>
								</tr>
							`;
						})
						.join("")
				: `
					<tr>
						<td colspan="7" style="text-align:center; color:#6b7280; padding:24px 12px;">
							No activity found for this period.
						</td>
					</tr>
				`;

		const html = `<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<title>EduTap Activity Report - ${exportDate}</title>
	<style>
		:root {
			--brand: #8b0000;
			--brand-soft: #fff2f2;
			--text: #111827;
			--muted: #6b7280;
			--line: #e5e7eb;
		}
		* { box-sizing: border-box; }
		body {
			margin: 0;
			font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
			background: #f7f8fa;
			color: var(--text);
			padding: 24px;
		}
		.report {
			max-width: 980px;
			margin: 0 auto;
			background: #ffffff;
			border: 1px solid var(--line);
			border-radius: 18px;
			overflow: hidden;
		}
		.header {
			background: linear-gradient(120deg, #6e0000 0%, var(--brand) 100%);
			color: #ffffff;
			padding: 24px;
		}
		.header h1 {
			margin: 0;
			font-size: 1.6rem;
			letter-spacing: 0.3px;
		}
		.header p {
			margin: 6px 0 0;
			font-size: 0.92rem;
			opacity: 0.9;
		}
		.summary {
			display: grid;
			grid-template-columns: repeat(3, minmax(0, 1fr));
			gap: 12px;
			padding: 18px 24px;
			background: var(--brand-soft);
			border-top: 1px solid #ffe0e0;
			border-bottom: 1px solid #ffe0e0;
		}
		.card {
			border: 1px solid #ffd3d3;
			border-radius: 12px;
			background: #ffffff;
			padding: 12px 14px;
		}
		.card .label {
			margin: 0 0 4px;
			font-size: 0.76rem;
			font-weight: 700;
			color: var(--muted);
			text-transform: uppercase;
			letter-spacing: 0.4px;
		}
		.card .value {
			margin: 0;
			font-size: 1.08rem;
			font-weight: 700;
			color: var(--brand);
		}
		.table-wrap {
			padding: 18px 24px 24px;
		}
		table {
			width: 100%;
			border-collapse: collapse;
			font-size: 0.85rem;
		}
		th, td {
			border: 1px solid var(--line);
			padding: 10px 12px;
			vertical-align: top;
		}
		th {
			background: #f9fafb;
			font-size: 0.76rem;
			text-transform: uppercase;
			letter-spacing: 0.4px;
			color: #374151;
			text-align: left;
		}
		@media (max-width: 760px) {
			body { padding: 12px; }
			.summary { grid-template-columns: 1fr; }
			th, td { font-size: 0.78rem; padding: 8px; }
		}
	</style>
</head>
<body>
	<article class="report">
		<header class="header">
			<h1>EduTap Recent Activity Report</h1>
			<p>Generated on ${escapeHtml(generatedAt)}</p>
		</header>
		<section class="summary">
			<div class="card">
				<p class="label">Report Date</p>
				<p class="value">${escapeHtml(exportDate)}</p>
			</div>
			<div class="card">
				<p class="label">Transactions</p>
				<p class="value">${activities.length}</p>
			</div>
			<div class="card">
				<p class="label">Total Amount</p>
				<p class="value">PHP ${totalAmount.toFixed(2)}</p>
			</div>
		</section>
		<section class="table-wrap">
			<table>
				<thead>
					<tr>
						<th>Date</th>
						<th>Time</th>
						<th>Description</th>
						<th>Items</th>
						<th>Category</th>
						<th>Type</th>
						<th>Amount</th>
					</tr>
				</thead>
				<tbody>
					${rowsHtml}
				</tbody>
			</table>
		</section>
	</article>
</body>
</html>`;

		const blob = new Blob([html], { type: "text/html;charset=utf-8;" });
		const url = URL.createObjectURL(blob);
		const link = document.createElement("a");
		link.href = url;
		link.download = `edutap-activity-report-${exportDate}.html`;
		onDownloadClick();
		link.click();
		URL.revokeObjectURL(url);
	};
	// Format selected date nicely for the button label
	const formattedDate = selectedDate
		? new Date(selectedDate + "T00:00:00").toLocaleDateString("en-PH", {
				month: "short",
				day: "numeric",
				year: "numeric",
			})
		: null;

	return (
		<div className="flex h-[22rem] flex-col rounded-xl border border-gray-200 bg-white p-3.5 shadow-sm sm:h-80 sm:p-5">
			<div className="mb-4 flex shrink-0 flex-col gap-3 sm:mb-5 sm:flex-row sm:items-start sm:justify-between">
				<div className="min-w-0">
					<h2 className="text-base font-bold text-gray-900">Recent Activity</h2>
					{selectedDate && (
						<p className="mt-1 text-[11px] font-medium text-[#8B0000]">
							{formattedDate}
						</p>
					)}
				</div>
				<div className="flex w-full flex-wrap items-center gap-2 sm:w-auto sm:flex-nowrap">
					{/* Custom Date Picker Trigger */}
					<div className="relative" ref={calendarRef}>
						<button
							onClick={() => setShowCalendar((v) => !v)}
							aria-label="Filter activity by date"
							className={`inline-flex items-center gap-2 rounded-lg border px-3 py-1.5 text-xs font-semibold transition-colors
                                ${
									selectedDate
										? "border-[#8B0000] bg-red-50 text-[#8B0000]"
										: "border-gray-300 text-gray-600 hover:bg-gray-50 hover:text-gray-700"
								} w-full justify-center sm:w-auto sm:justify-start`}>
							<Calendar className="h-3.5 w-3.5" />
							<span>{selectedDate ? "Change date" : "Filter by date"}</span>
						</button>

						{/* Clear badge */}
						{selectedDate && (
							<button
								onClick={(e) => {
									e.stopPropagation();
									onDateChange(null);
								}}
								className="absolute -top-1.5 -right-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-[#8B0000] text-white transition-colors hover:bg-red-800"
								title="Clear date filter">
								<X className="h-2.5 w-2.5" />
							</button>
						)}

						{showCalendar && (
							<CalendarPicker
								selectedDate={selectedDate}
								onSelect={(date) => {
									onDateChange(date);
									setShowCalendar(false);
								}}
								onClose={() => setShowCalendar(false)}
							/>
						)}
					</div>

					{/* Export Button */}
					<button
						onClick={handleExport}
						aria-label="Export activity"
						className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-gray-300 px-3 py-1.5 text-xs font-semibold text-gray-600 transition-colors hover:bg-gray-50 hover:text-gray-700 sm:w-auto sm:justify-start">
						<Download className="h-3.5 w-3.5" />
						<span>Export file</span>
					</button>
				</div>
			</div>

			{activities.length === 0 ? (
				<div className="py-8 text-center text-sm text-gray-400 flex-1">
					{selectedDate ? `No activity on ${formattedDate}` : "No activity yet"}
				</div>
			) : (
				<div className="flex-1 space-y-2 overflow-y-auto pr-0.5 sm:pr-1 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
					{activities.map((activity) => (
						<div
							key={activity.id}
							className="rounded-lg border border-gray-100 overflow-hidden">
							<div
								className="flex cursor-pointer flex-wrap items-center gap-3 p-3 transition-colors hover:bg-gray-50 sm:flex-nowrap"
								onClick={() => activity.items?.length > 0 && toggle(activity.id)}>
								<div
									className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${activity.type === "expense" ? "bg-red-100" : "bg-green-100"}`}>
									{activity.type === "expense" ? (
										<ShoppingBag className="h-4 w-4 text-red-600" />
									) : (
										<TrendingUp className="h-4 w-4 text-green-600" />
									)}
								</div>
								<div className="flex-1 min-w-0">
									<div className="text-sm font-semibold text-gray-900 truncate">
										{activity.item}
									</div>
									<div className="text-xs text-gray-400">
										{activity.date} {"\u2022"} {activity.time}
									</div>
								</div>
								<div className="flex w-full items-center justify-between gap-2 pl-11 sm:w-auto sm:justify-start sm:pl-0">
									<span
										className={`text-sm font-bold ${activity.amount < 0 ? "text-red-600" : "text-green-600"}`}>
										{activity.amount < 0 ? "-" : "+"}
										{"\u20B1"}
										{Math.abs(activity.amount).toFixed(2)}
									</span>
									{activity.items?.length > 0 &&
										(expandedId === activity.id ? (
											<ChevronUp className="h-4 w-4 text-gray-400" />
										) : (
											<ChevronDown className="h-4 w-4 text-gray-400" />
										))}
								</div>
							</div>

							{expandedId === activity.id && activity.items?.length > 0 && (
								<div className="border-t border-gray-100 bg-gray-50 px-4 py-3">
									<p className="text-xs font-semibold text-gray-500 mb-2 uppercase tracking-wide">
										Order breakdown
									</p>
									<div className="space-y-1.5">
										{activity.items.map((item, i) => (
											<div
												key={i}
												className="flex items-center justify-between text-xs">
												<div className="flex items-center gap-2">
													<span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-gray-200 text-gray-600 font-medium text-[10px]">
														{item.qty}x
													</span>
													<span className="text-gray-700">
														{item.name}
													</span>
												</div>
												<span className="text-gray-500">
													{"\u20B1"}
													{(item.price * item.qty).toFixed(2)}
												</span>
											</div>
										))}
									</div>
									<div className="mt-2 pt-2 border-t border-gray-200 flex justify-between text-xs font-semibold text-gray-700">
										<span>Total</span>
										<span>
											{"\u20B1"}
											{Math.abs(activity.amount).toFixed(2)}
										</span>
									</div>
								</div>
							)}
						</div>
					))}
				</div>
			)}
		</div>
	);
}
