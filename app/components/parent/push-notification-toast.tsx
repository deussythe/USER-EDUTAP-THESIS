import { AlertCircle, ShoppingBag, X } from "lucide-react";

interface NotificationToast {
	id: string;
	title: string;
	description: string;
	amount?: number;
	icon: "purchase" | "warning";
}

interface PushNotificationToastProps {
	notification: NotificationToast | null;
	onClose: () => void;
	onOpen: () => void;
}

export function PushNotificationToast({
	notification,
	onClose,
	onOpen,
}: PushNotificationToastProps) {
	if (!notification) return null;

	const isPurchase = notification.icon === "purchase";

	return (
		<div className="pointer-events-auto w-full max-w-sm overflow-hidden rounded-2xl border border-red-950/10 bg-white shadow-2xl ring-1 ring-black/5">
			<div className="flex items-start gap-3 bg-gradient-to-r from-red-950 via-red-900 to-red-800 p-3.5 text-white sm:p-4">
				<div className="mt-0.5 rounded-xl bg-white/15 p-2">
					{isPurchase ? (
						<ShoppingBag className="h-4 w-4" />
					) : (
						<AlertCircle className="h-4 w-4" />
					)}
				</div>
				<div className="min-w-0 flex-1">
					<p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-red-100">
						New Notification
					</p>
					<h3 className="mt-1 text-sm font-bold leading-tight">{notification.title}</h3>
					<p className="mt-1 line-clamp-2 text-xs text-red-100/90">
						{notification.description}
					</p>
					{typeof notification.amount === "number" && (
						<p className="mt-2 text-xs font-semibold text-white">
							{notification.amount < 0 ? "-" : "+"}PHP{" "}
							{Math.abs(notification.amount).toFixed(2)}
						</p>
					)}
				</div>
				<button
					onClick={onClose}
					className="rounded-full p-1 text-white/80 transition hover:bg-white/10 hover:text-white">
					<X className="h-4 w-4" />
				</button>
			</div>

			<div className="flex flex-col gap-2 bg-white px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
				<p className="text-xs font-medium text-gray-500">Tap to review details</p>
				<button
					onClick={onOpen}
					className="w-full rounded-lg bg-red-950 px-3 py-1.5 text-xs font-semibold text-white transition hover:bg-red-900 sm:w-auto">
					View
				</button>
			</div>
		</div>
	);
}
