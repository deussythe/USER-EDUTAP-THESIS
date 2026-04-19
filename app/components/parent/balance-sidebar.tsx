import { Wallet } from "lucide-react"

interface PaymentMethod {
    id: string
    name: string
    icon: string
}

interface BalanceSidebarProps {
    balance: number
    // Kept these props so you don't get errors from the parent component
    paymentMethods: PaymentMethod[]
    selectedPayment: string | null
    onPaymentSelect: (id: string | null) => void
    onTopUpClick: () => void
}

export function BalanceSidebar({ balance, paymentMethods, selectedPayment, onPaymentSelect, onTopUpClick }: BalanceSidebarProps) {

    // Logic kept intact for toggling selection
    const handlePaymentClick = (id: string) => {
        if (selectedPayment === id) {
            onPaymentSelect(null)
        } else {
            onPaymentSelect(id)
        }
    }

    return (
        <div className="flex w-full flex-col bg-white p-4 sm:p-6">
            <div className="mb-6">
                <h2 className="text-lg font-bold text-gray-900">Current Balance</h2>
                <p className="text-sm text-gray-500">Jane Parent's Wallet</p>
            </div>

            <div className="mb-6 flex flex-1 flex-col items-center justify-center text-center">
                <div className="mb-4 text-5xl text-gray-300">
                    <Wallet className="h-12 w-12" />
                </div>
                <p className="mb-2 text-sm text-gray-500">Available Funds</p>
                <p className="mb-1 text-4xl font-extrabold text-gray-900">₱{balance.toFixed(2)}</p>
                <p className="text-xs text-gray-400">Last updated just now</p>
            </div>

            <div className="border-t border-gray-200 pt-6">
                <h3 className="mb-3 text-sm font-semibold text-gray-700">Quick Top-Up</h3>

                {/* REPLACED: Removed the grid and map, added a single GCash button */}
                <div className="mb-4">
                    <button
                        // Hardcoded "gcash" as the ID
                        onClick={() => handlePaymentClick("gcash")}
                        className={`w-full flex items-center justify-center gap-2 rounded-lg border p-3 text-center text-sm font-medium transition ${selectedPayment === "gcash"
                                ? "border-blue-600 bg-blue-50 text-blue-700 font-bold" // Active style
                                : "border-gray-200 bg-white text-gray-600 hover:bg-gray-50" // Inactive style
                            }`}
                    >
                        {/* You can replace this emoji with your actual GCash icon component later */}
                        <span className="text-xl text-blue-600">📱</span>
                        GCash
                    </button>
                </div>

                <div className="mb-6 flex items-center justify-between text-lg font-bold text-gray-900">
                    <span>Account Total</span>
                    <span>₱{balance.toFixed(2)}</span>
                </div>

                <button
                    onClick={onTopUpClick}
                    disabled={!selectedPayment}
                    className={`flex w-full items-center justify-center gap-2 rounded-lg px-4 py-3.5 text-base font-semibold text-white transition ${selectedPayment
                            ? "bg-gray-600 hover:bg-gray-700"
                            : "bg-gray-300 cursor-not-allowed"
                        }`}
                >
                    <Wallet className="h-5 w-5" />
                    Top Up Wallet
                </button>
            </div>
            <style>{`
                .selected {
                    background-color: #3b82f6;
                    color: #fff;
                }
            `}</style>
        </div>
    )
}