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
		<div className="pointer-events-auto w-full max-w-sm animate-in slide-in-from-top-3 fade-in-0 overflow-hidden rounded-[1.75rem] border border-red-100/80 bg-white/95 shadow-[0_24px_60px_-22px_rgba(15,23,42,0.35)] ring-1 ring-red-100/70 backdrop-blur-sm duration-300">
			<div className="flex items-start gap-3 bg-gradient-to-br from-red-950 via-red-900 to-red-800 p-4 text-white">
				<div className="mt-0.5 rounded-2xl border border-white/10 bg-white/15 p-2.5 shadow-inner">
					{isPurchase ? (
						<ShoppingBag className="h-4 w-4" />
					) : (
						<AlertCircle className="h-4 w-4" />
					)}
				</div>
				<div className="min-w-0 flex-1">
					<p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-red-100/90">
						{isPurchase ? "Wallet Update" : "Important Alert"}
					</p>
					<h3 className="mt-1 text-sm font-bold leading-tight tracking-tight">
						{notification.title}
					</h3>
					<p className="mt-1.5 line-clamp-2 text-xs leading-relaxed text-red-100/90">
						{notification.description}
					</p>
					{typeof notification.amount === "number" && (
						<p className="mt-3 inline-flex rounded-full bg-white/10 px-2.5 py-1 text-xs font-semibold text-white">
							{notification.amount < 0 ? "-" : "+"}PHP{" "}
							{Math.abs(notification.amount).toFixed(2)}
						</p>
					)}
				</div>
				<button
					onClick={onClose}
					className="rounded-full p-1.5 text-white/80 transition hover:bg-white/10 hover:text-white">
					<X className="h-4 w-4" />
				</button>
			</div>

			<div className="flex flex-col gap-3 bg-gradient-to-b from-white to-red-50/40 px-4 py-3.5 sm:flex-row sm:items-center sm:justify-between">
				<p className="text-xs font-medium text-gray-500">
					Open this update to review the full details.
				</p>
				<button
					onClick={onOpen}
					className="w-full rounded-2xl bg-red-950 px-4 py-2 text-xs font-semibold text-white shadow-sm hover:bg-red-900 sm:w-auto">
					View notification
				</button>
			</div>
		</div>
	);
}
