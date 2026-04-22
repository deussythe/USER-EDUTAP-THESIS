import { Wallet } from "lucide-react"

interface PaymentMethod {
    id: string
    name: string
    icon: string
}

interface BalanceSidebarProps {
    balance: number
    paymentMethods: PaymentMethod[]
    selectedPayment: string | null
    onPaymentSelect: (id: string | null) => void
    onTopUpClick: () => void
}

export function BalanceSidebar({
    balance,
    paymentMethods,
    selectedPayment,
    onPaymentSelect,
    onTopUpClick,
}: BalanceSidebarProps) {
    const handlePaymentClick = (id: string) => {
        if (selectedPayment === id) {
            onPaymentSelect(null)
        } else {
            onPaymentSelect(id)
        }
    }

    const isEWalletSelected = selectedPayment === "ewallet"

    return (
        <div className="flex h-full w-full flex-col bg-white p-5">

            {/* Header */}
            <div className="mb-5">
                <h2 className="text-lg font-bold text-gray-900">Current Balance</h2>
                <p className="text-sm text-gray-500">Jane Parent's Wallet</p>
            </div>

            {/* Balance — grows to fill available space */}
            <div className="flex flex-1 flex-col items-center justify-center text-center py-6 rounded-2xl bg-gray-50 mb-5">
                <Wallet className="h-10 w-10 text-gray-300 mb-3" />
                <p className="text-sm text-gray-500 mb-1">Available Funds</p>
                <p className="text-5xl font-extrabold text-gray-900 tracking-tight mb-1">
                    ₱{balance.toFixed(2)}
                </p>
                <p className="text-xs text-gray-400">Last updated just now</p>
            </div>

            {/* Bottom section */}
            <div className="border-t border-gray-200 pt-5 flex flex-col gap-4">

                {/* Quick Top-Up */}
                <div>
                    <h3 className="text-sm font-semibold text-gray-700 mb-2">Quick Top-Up</h3>
                    <button
                        onClick={() => handlePaymentClick("ewallet")}
                        aria-pressed={isEWalletSelected}
                        aria-label="Select E-Wallet / E-Bank as payment method"
                        className={`w-full rounded-xl overflow-hidden transition-all duration-200 ${
                            isEWalletSelected
                                ? "ring-4 ring-[#7f1d1d] ring-offset-2 shadow-lg shadow-red-200"
                                : "ring-2 ring-transparent hover:ring-[#7f1d1d]/40 shadow-sm hover:shadow-md"
                        }`}
                    >
                        <div className="w-full h-16 bg-[#7f1d1d] flex items-center justify-center gap-2 rounded-xl">
                            <Wallet className="h-6 w-6 text-white" />
                            <span className="text-white text-lg font-bold tracking-wide">E-Wallets & E-Banks</span>
                        </div>
                    </button>
                </div>

                {/* Account Total */}
                <div className="flex items-center justify-between text-lg font-bold text-gray-900">
                    <span>Account Total</span>
                    <span>₱{balance.toFixed(2)}</span>
                </div>

                {/* Top Up Button */}
                <button
                    onClick={onTopUpClick}
                    disabled={!selectedPayment}
                    className={`flex w-full items-center justify-center gap-2 rounded-xl px-4 py-4 text-base font-semibold text-white transition-all duration-200 ${
                        selectedPayment
                            ? "bg-gray-600 hover:bg-gray-700 active:scale-[0.98]"
                            : "bg-gray-300 cursor-not-allowed"
                    }`}
                >
                    <Wallet className="h-5 w-5" />
                    Top Up Wallet
                </button>
            </div>
        </div>
    )
}