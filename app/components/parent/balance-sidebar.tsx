import { Wallet } from "lucide-react";

interface PaymentMethod {
	id: string;
	name: string;
	icon: string;
}

interface BalanceSidebarProps {
	walletName?: string;
	balance: number;
	paymentMethods: PaymentMethod[];
	selectedPayment: string | null;
	onPaymentSelect: (id: string | null) => void;
	onTopUpClick: () => void;
}

export function BalanceSidebar({
	walletName,
	balance,
	paymentMethods,
	selectedPayment,
	onPaymentSelect,
	onTopUpClick,
}: BalanceSidebarProps) {
	const handlePaymentClick = (id: string) => {
		if (selectedPayment === id) {
			onPaymentSelect(null);
		} else {
			onPaymentSelect(id);
		}
	};

	const isEWalletSelected = selectedPayment === "ewallet";

	return (
		<div className="flex h-full w-full flex-col bg-white p-5">
			<div className="mb-5">
				<h2 className="text-lg font-bold text-gray-900">Current Balance</h2>
				<p className="text-sm text-gray-500">{walletName ?? "Parent"}&apos;s Wallet</p>
			</div>

			<div className="mb-5 flex flex-1 flex-col items-center justify-center rounded-2xl bg-gray-50 py-6 text-center">
				<Wallet className="mb-3 h-10 w-10 text-gray-300" />
				<p className="mb-1 text-sm text-gray-500">Available Funds</p>
				<p className="mb-1 text-5xl font-extrabold tracking-tight text-gray-900">
					PHP {balance.toFixed(2)}
				</p>
				<p className="text-xs text-gray-400">Last updated just now</p>
			</div>

			<div className="flex flex-col gap-4 border-t border-gray-200 pt-5">
				<div>
					<h3 className="mb-2 text-sm font-semibold text-gray-700">Quick Top-Up</h3>
					<button
						onClick={() => handlePaymentClick("ewallet")}
						aria-pressed={isEWalletSelected}
						aria-label="Select E-Wallet / E-Bank as payment method"
						className={`w-full overflow-hidden rounded-xl transition-all duration-200 ${
							isEWalletSelected
								? "ring-4 ring-[#7f1d1d] ring-offset-2 shadow-lg shadow-red-200"
								: "ring-2 ring-transparent shadow-sm hover:shadow-md hover:ring-[#7f1d1d]/40"
						}`}>
						<div className="flex h-16 w-full items-center justify-center gap-2 rounded-xl bg-[#7f1d1d]">
							<Wallet className="h-6 w-6 text-white" />
							<span className="text-lg font-bold tracking-wide text-white">
								E-Wallets & E-Banks
							</span>
						</div>
					</button>
				</div>

				<div className="flex items-center justify-between text-lg font-bold text-gray-900">
					<span>Account Total</span>
					<span>PHP {balance.toFixed(2)}</span>
				</div>

				<button
					onClick={onTopUpClick}
					disabled={!selectedPayment || paymentMethods.length === 0}
					className={`flex w-full items-center justify-center gap-2 rounded-xl px-4 py-4 text-base font-semibold text-white transition-all duration-200 ${
						selectedPayment && paymentMethods.length > 0
							? "bg-gray-600 hover:bg-gray-700 active:scale-[0.98]"
							: "cursor-not-allowed bg-gray-300"
					}`}>
					<Wallet className="h-5 w-5" />
					Top Up Wallet
				</button>
			</div>
		</div>
	);
}
