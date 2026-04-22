import { AlertCircle, Bell, ShoppingBag, Trash2 } from "lucide-react";

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
		<div className="flex h-80 flex-col rounded-xl border border-gray-200 bg-white p-4 shadow-sm sm:p-5">
			<div className="mb-4 flex shrink-0 items-start justify-between gap-3">
				<div className="min-w-0">
					<h2 className="text-base font-bold text-gray-900">Notifications</h2>
					<span className="mt-1 inline-flex items-center gap-1.5 rounded-lg border border-gray-200 bg-gray-50 px-2.5 py-1 text-[11px] font-medium text-gray-600">
						{notifications.length} New
					</span>
				</div>
				{notifications.length > 0 && (
					<button
						onClick={onClearAll}
						aria-label="Clear all notifications"
						className="rounded-lg border border-gray-300 p-1.5 text-gray-400 transition-colors hover:bg-gray-50 hover:text-red-600">
						<Trash2 className="h-3.5 w-3.5" />
					</button>
				)}
			</div>

			<div className="flex-1 space-y-3 overflow-y-auto pr-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
				{notifications.length === 0 ? (
					<div className="py-8 text-center text-gray-500">
						<Bell className="mx-auto mb-2 h-8 w-8 text-gray-300" />
						<p className="text-sm">No notifications</p>
					</div>
				) : (
					notifications.map((notification) => (
						<button
							key={notification.id}
							onClick={() => onNotificationClick(notification)}
							className="flex w-full flex-wrap items-start gap-3 rounded-xl border border-transparent px-1 py-2 text-left transition hover:border-red-100 hover:bg-red-50/60 sm:flex-nowrap">
							<div
								className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${
									notification.icon === "purchase"
										? "bg-red-100 text-red-700"
										: "bg-amber-100 text-amber-700"
								}`}>
								{notification.icon === "purchase" ? (
									<ShoppingBag className="h-4 w-4" />
								) : (
									<AlertCircle className="h-4 w-4" />
								)}
							</div>
							<div className="min-w-0 flex-1">
								<div className="text-sm font-semibold text-gray-900">
									{notification.title}
								</div>
								<div className="text-xs leading-relaxed text-gray-500">
									{notification.description}
								</div>
								<div className="mt-1 text-xs text-gray-400">
									{notification.timestamp}
								</div>
							</div>
							{typeof notification.amount === "number" && (
								<div
									className={`w-full pl-11 text-sm font-bold sm:w-auto sm:pl-0 ${
										notification.amount < 0 ? "text-red-600" : "text-green-600"
									}`}>
									{notification.amount < 0 ? "-" : "+"}PHP{" "}
									{Math.abs(notification.amount).toFixed(2)}
								</div>
							)}
						</button>
					))
				)}
			</div>
		</div>
	);
}
