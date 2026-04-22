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
		<div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/30 p-3 backdrop-blur-sm sm:p-4">
			<div className="w-full max-w-md overflow-hidden rounded-2xl bg-white shadow-2xl">
				<div className="flex items-center justify-between bg-gradient-to-r from-red-950 via-red-900 to-red-800 px-4 py-4 text-white sm:px-6">
					<h3 className="text-lg font-bold">Notification Details</h3>
					<button
						onClick={onClose}
						className="rounded-full p-1 text-white/80 transition hover:bg-white/10 hover:text-white">
						<X className="h-5 w-5" />
					</button>
				</div>

				<div className="space-y-4 p-4 sm:p-6">
					<div
						className={`flex h-12 w-12 items-center justify-center rounded-xl ${
							notification.icon === "purchase"
								? "bg-red-100 text-red-700"
								: "bg-amber-100 text-amber-700"
						}`}>
						{notification.icon === "purchase" ? (
							<ShoppingBag className="h-6 w-6" />
						) : (
							<AlertCircle className="h-6 w-6" />
						)}
					</div>
					<div>
						<h4 className="text-lg font-semibold text-gray-900">
							{notification.title}
						</h4>
						<p className="text-sm text-gray-500">{notification.timestamp}</p>
					</div>
					<p className="text-gray-700">{notification.description}</p>
					{typeof notification.amount === "number" && (
						<div className="rounded-xl border border-red-100 bg-red-50/50 p-4">
							<p className="text-sm text-gray-600">Amount</p>
							<p
								className={`text-2xl font-bold ${
									notification.amount < 0 ? "text-red-600" : "text-green-600"
								}`}>
								{notification.amount < 0 ? "- " : ""}PHP{" "}
								{Math.abs(notification.amount).toFixed(2)}
							</p>
						</div>
					)}
				</div>

				<div className="border-t border-gray-100 px-4 py-4 sm:px-6">
					<button
						onClick={() => onMarkAsRead(notification.id)}
						className="w-full rounded-xl bg-red-950 py-3 font-semibold text-white transition hover:bg-red-900">
						Mark as Read
					</button>
				</div>
			</div>
		</div>
	);
}
