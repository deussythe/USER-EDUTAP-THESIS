import { AlertCircle, ShoppingBag, X } from "lucide-react";

interface Notification {
	id: string;
	type: "purchase" | "warning";
	title: string;
	description: string;
	amount?: number;
	icon: "purchase" | "warning";
	timestamp: string;
}

interface NotificationDetailsModalProps {
	isOpen: boolean;
	notification: Notification | null;
	onClose: () => void;
	onMarkAsRead: (id: string) => void;
}

export function NotificationDetailsModal({
	isOpen,
	notification,
	onClose,
	onMarkAsRead,
}: NotificationDetailsModalProps) {
	if (!isOpen || !notification) return null;

	return (
		<div className="fixed inset-0 z-[9999] flex items-center justify-center bg-slate-950/35 p-3 backdrop-blur-sm sm:p-4">
			<div className="animate-in zoom-in-95 fade-in-0 w-full max-w-md overflow-hidden rounded-[1.75rem] border border-red-100/80 bg-white shadow-[0_32px_80px_-28px_rgba(15,23,42,0.4)] duration-200">
				<div className="flex items-center justify-between border-b border-white/10 bg-gradient-to-br from-red-950 via-red-900 to-red-800 px-4 py-4 text-white sm:px-6">
					<div>
						<p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-red-100/90">
							Notification Center
						</p>
						<h3 className="mt-1 text-lg font-bold tracking-tight">
							Notification Details
						</h3>
					</div>
					<button
						onClick={onClose}
						className="rounded-full p-1.5 text-white/80 transition hover:bg-white/10 hover:text-white">
						<X className="h-5 w-5" />
					</button>
				</div>

				<div className="space-y-5 bg-gradient-to-b from-white via-white to-red-50/40 p-4 sm:p-6">
					<div className="flex items-start gap-4 rounded-3xl border border-red-100/80 bg-white p-4 shadow-sm">
						<div
							className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border ${
								notification.icon === "purchase"
									? "border-red-100 bg-red-50 text-red-700"
									: "border-amber-100 bg-amber-50 text-amber-700"
							}`}>
							{notification.icon === "purchase" ? (
								<ShoppingBag className="h-6 w-6" />
							) : (
								<AlertCircle className="h-6 w-6" />
							)}
						</div>
						<div className="min-w-0 flex-1">
							<div className="flex flex-wrap items-center gap-2">
								<h4 className="text-lg font-semibold tracking-tight text-gray-900">
									{notification.title}
								</h4>
								<span
									className={`inline-flex rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] ${
										notification.type === "warning"
											? "bg-amber-50 text-amber-700"
											: "bg-red-50 text-red-700"
									}`}>
									{notification.type === "warning" ? "Unread" : "Recent"}
								</span>
							</div>
							<p className="mt-2 text-sm text-gray-500">{notification.timestamp}</p>
						</div>
					</div>

					<div className="rounded-3xl border border-gray-100 bg-white p-4 shadow-sm">
						<p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-gray-400">
							Message
						</p>
						<p className="text-sm leading-7 text-gray-700">
							{notification.description}
						</p>
					</div>

					{typeof notification.amount === "number" && (
						<div className="rounded-3xl border border-red-100 bg-gradient-to-br from-red-50 to-white p-4 shadow-sm">
							<p className="text-sm font-medium text-gray-600">Amount</p>
							<p
								className={`mt-2 text-2xl font-bold tracking-tight ${
									notification.amount < 0 ? "text-red-600" : "text-green-600"
								}`}>
								{notification.amount < 0 ? "- " : ""}PHP{" "}
								{Math.abs(notification.amount).toFixed(2)}
							</p>
						</div>
					)}
				</div>

				<div className="border-t border-red-100/80 bg-white px-4 py-4 sm:px-6">
					<div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
						<button
							onClick={onClose}
							className="w-full rounded-2xl border border-gray-200 bg-white px-4 py-3 text-sm font-semibold text-gray-700 shadow-sm hover:border-gray-300 hover:bg-gray-50 sm:w-auto">
							Close
						</button>
						<button
							onClick={() => onMarkAsRead(notification.id)}
							className="w-full rounded-2xl bg-red-950 px-4 py-3 text-sm font-semibold text-white shadow-sm hover:bg-red-900 sm:w-auto">
							Mark as read
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
