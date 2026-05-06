import { AlertCircle, Bell, ChevronRight, ShoppingBag, Trash2 } from "lucide-react";

interface Notification {
	id: string;
	type: "purchase" | "warning";
	title: string;
	description: string;
	amount?: number;
	icon: "purchase" | "warning";
	timestamp: string;
}

interface NotificationsProps {
	notifications: Notification[];
	onNotificationClick: (notification: Notification) => void;
	onClearAll: () => void;
}

export function Notifications({
	notifications,
	onNotificationClick,
	onClearAll,
}: NotificationsProps) {
	return (
		<div className="flex h-[22rem] flex-col overflow-hidden rounded-3xl border border-red-100/70 bg-white/95 shadow-[0_18px_50px_-22px_rgba(15,23,42,0.22)] backdrop-blur-sm sm:h-80">
			<div className="border-b border-red-100/80 bg-gradient-to-br from-white via-red-50/50 to-red-100/40 px-3.5 py-3.5 sm:px-5 sm:py-4">
				<div className="flex shrink-0 items-start justify-between gap-3">
					<div className="min-w-0">
						<div className="flex items-center gap-2">
							<div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-red-100 bg-white text-red-900 shadow-sm">
								<Bell className="h-4 w-4" />
							</div>
							<div className="min-w-0">
								<h2 className="text-base font-semibold tracking-tight text-gray-900">
									Notifications
								</h2>
								<p className="text-xs text-gray-500">
									Latest account and wallet updates
								</p>
							</div>
						</div>
						<span className="mt-3 inline-flex items-center gap-1.5 rounded-full border border-red-200 bg-white px-3 py-1 text-[11px] font-semibold text-red-800 shadow-sm">
							<span className="h-1.5 w-1.5 rounded-full bg-red-500" />
							{notifications.length}{" "}
							{notifications.length === 1 ? "update" : "updates"}
						</span>
					</div>
					{notifications.length > 0 && (
						<button
							onClick={onClearAll}
							aria-label="Clear all notifications"
							className="inline-flex items-center gap-2 rounded-2xl border border-red-200 bg-white px-2.5 py-1.5 text-[11px] font-semibold text-red-900 shadow-sm hover:border-red-300 hover:bg-red-50 sm:px-3 sm:py-2 sm:text-xs">
							<Trash2 className="h-3.5 w-3.5" />
							<span>Clear list</span>
						</button>
					)}
				</div>
			</div>

			<div className="flex-1 space-y-2.5 overflow-y-auto bg-gradient-to-b from-white to-red-50/30 px-3.5 py-3.5 pr-2.5 sm:space-y-3 sm:px-5 sm:py-4 sm:pr-3 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
				{notifications.length === 0 ? (
					<div className="flex h-full min-h-48 flex-col items-center justify-center rounded-3xl border border-dashed border-red-200 bg-white/80 px-6 py-8 text-center shadow-inner">
						<div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-red-50 text-red-700">
							<Bell className="h-6 w-6" />
						</div>
						<p className="mt-4 text-sm font-semibold text-gray-900">
							No new notifications
						</p>
						<p className="mt-1 max-w-xs text-xs leading-relaxed text-gray-500">
							Important updates about purchases, top-ups, and account activity will
							appear here.
						</p>
					</div>
				) : (
					notifications.map((notification) => (
						<button
							key={notification.id}
							onClick={() => onNotificationClick(notification)}
							className="group flex w-full flex-wrap items-start gap-3 rounded-3xl border border-red-100/80 bg-white/90 p-4 text-left shadow-sm ring-1 ring-transparent transition-all duration-200 hover:-translate-y-0.5 hover:border-red-200 hover:bg-white hover:shadow-[0_14px_32px_-18px_rgba(127,29,29,0.35)] hover:ring-red-100/80 sm:flex-nowrap">
							<div
								className={`mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border ${
									notification.icon === "purchase"
										? "border-red-100 bg-red-50 text-red-700"
										: "border-amber-100 bg-amber-50 text-amber-700"
								}`}>
								{notification.icon === "purchase" ? (
									<ShoppingBag className="h-4 w-4" />
								) : (
									<AlertCircle className="h-4 w-4" />
								)}
							</div>
							<div className="min-w-0 flex-1">
								<div className="flex flex-wrap items-center gap-2">
									<div className="text-sm font-semibold tracking-tight text-gray-900">
										{notification.title}
									</div>
									<span
										className={`inline-flex items-center rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] ${
											notification.type === "warning"
												? "bg-amber-50 text-amber-700"
												: "bg-red-50 text-red-700"
										}`}>
										{notification.type === "warning" ? "New" : "Recent"}
									</span>
								</div>
								<div className="mt-1 text-xs font-medium text-gray-400">
									{notification.timestamp}
								</div>
								<div className="mt-2 text-sm leading-relaxed text-gray-600">
									{notification.description}
								</div>
							</div>
							<div className="ml-auto flex w-full items-center justify-between gap-3 pl-14 sm:w-auto sm:flex-col sm:items-end sm:justify-start sm:pl-0">
								{typeof notification.amount === "number" ? (
									<div
										className={`rounded-2xl px-3 py-2 text-sm font-bold shadow-sm ${
											notification.amount < 0
												? "bg-red-50 text-red-700"
												: "bg-emerald-50 text-emerald-700"
										}`}>
										{notification.amount < 0 ? "-" : "+"}PHP{" "}
										{Math.abs(notification.amount).toFixed(2)}
									</div>
								) : (
									<div className="rounded-full bg-gray-100 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-gray-500">
										Action needed
									</div>
								)}
								<div className="flex items-center gap-1 text-xs font-semibold text-red-900">
									<span>Open</span>
									<ChevronRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
								</div>
							</div>
						</button>
					))
				)}
			</div>
		</div>
	);
}
