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
		const rows: string[] = [];
		rows.push(
			["Date", "Time", "Description", "Items", "Category", "Type", "Amount (₱)"].join(","),
		);

		for (const activity of activities) {
			const itemsDetail = activity.items?.length
				? activity.items
						.map((i) => `${i.qty}x ${i.name} @₱${i.price.toFixed(2)}`)
						.join("; ")
				: activity.item;

			rows.push(
				[
					activity.date,
					activity.time,
					`"${activity.item.replace(/"/g, '""')}"`,
					`"${itemsDetail.replace(/"/g, '""')}"`,
					activity.category,
					activity.type,
					Math.abs(activity.amount).toFixed(2),
				].join(","),
			);
		}

		const blob = new Blob([rows.join("\n")], { type: "text/csv;charset=utf-8;" });
		const url = URL.createObjectURL(blob);
		const link = document.createElement("a");
		link.href = url;
		link.download = `edutap-activity-${selectedDate ?? new Date().toISOString().slice(0, 10)}.csv`;
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
		<div className="flex h-80 flex-col rounded-xl border border-gray-200 bg-white p-4 shadow-sm sm:p-5">
			<div className="mb-5 flex shrink-0 items-start justify-between gap-3">
				<div className="min-w-0">
					<h2 className="text-base font-bold text-gray-900">Recent Activity</h2>
					{selectedDate && (
						<p className="mt-1 text-[11px] font-medium text-[#8B0000]">
							{formattedDate}
						</p>
					)}
				</div>
				<div className="flex items-center gap-2">
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
								}`}>
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
						className="inline-flex items-center gap-2 rounded-lg border border-gray-300 px-3 py-1.5 text-xs font-semibold text-gray-600 transition-colors hover:bg-gray-50 hover:text-gray-700">
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
				<div className="space-y-2 overflow-y-auto pr-1 flex-1 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
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
										{activity.date} • {activity.time}
									</div>
								</div>
								<div className="flex w-full items-center justify-between gap-2 pl-11 sm:w-auto sm:justify-start sm:pl-0">
									<span
										className={`text-sm font-bold ${activity.amount < 0 ? "text-red-600" : "text-green-600"}`}>
										{activity.amount < 0 ? "−" : "+"}₱
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
													₱{(item.price * item.qty).toFixed(2)}
												</span>
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
	);
}
