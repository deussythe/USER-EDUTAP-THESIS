import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { doc, onSnapshot } from 'firebase/firestore';
import { db } from 'app/configs/firebase'; // Ensure this path is correct

interface TopUpModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export function TopUpModal({ isOpen, onClose }: TopUpModalProps) {
    const [amount, setAmount] = useState('');
    const [refNumber, setRefNumber] = useState('');
    const [isZoomed, setIsZoomed] = useState(false);

    // NEW: State to hold the links from Firebase
    const [qrMap, setQrMap] = useState<Record<string, string>>({});

    const quickAmounts = [50, 100, 200, 500];

    // NEW: Fetch links from Firebase when the component mounts
    useEffect(() => {
        const docRef = doc(db, "settings", "payment_qr");

        const unsubscribe = onSnapshot(docRef, (docSnap) => {
            if (docSnap.exists()) {
                setQrMap(docSnap.data() as Record<string, string>);
            }
        });

        return () => unsubscribe();
    }, []);

    // UPDATED: Now uses the state from Firebase instead of hardcoded links
    const getQRCodePath = () => {
        // If the amount matches a key in Firebase (50, 100, etc)
        if (amount && qrMap[amount]) {
            return qrMap[amount];
        }

        // Try to use the generic link from Firebase, but if it's not loaded yet, 
        // use your hardcoded Cloudinary link so it NEVER shows a broken image!
        return qrMap['generic'] || 'https://res.cloudinary.com/dd8hz51ff/image/upload/v1776419738/IMG_20260417_175022_szpu2a.jpg';
    };

    if (!isOpen) return null;

// ... (rest of your handleSubmit and return code stays exactly the same)

    const handleSubmit = () => {
        console.log("Submitting:", { amount, refNumber, method: 'GCash' });
        // TODO: Add your Firebase logic here
        onClose();
    };

    return (
        <>
            <div
                className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
                onClick={onClose}
            >
                <div
                    className="w-[400px] max-h-[95vh] overflow-y-auto rounded-2xl bg-white p-5 shadow-xl scrollbar-hide"
                    onClick={(e) => e.stopPropagation()}
                >
                    {/* Header */}
                    <div className="mb-4 flex items-center justify-between">
                        <h2 className="text-xl font-bold text-gray-900">Top Up via GCash</h2>
                        <button onClick={onClose} className="rounded-full p-1 transition hover:bg-gray-100">
                            <X className="h-5 w-5 text-gray-500" />
                        </button>
                    </div>

                    {/* QR Code Section */}
                    <div className="mb-4 flex flex-col items-center justify-center rounded-xl border-2 border-dashed border-gray-300 bg-gray-50 p-3 transition-all duration-300">
                        <p className="mb-2 text-sm font-semibold text-gray-700">Scan to Pay</p>

                        {/* Made image massive and clickable */}
                        <img
                            src={getQRCodePath()}
                            alt={`GCash QR Code`}
                            onClick={() => setIsZoomed(true)}
                            className="mb-2 h-64 w-64 cursor-pointer rounded-lg object-contain shadow-sm transition-transform duration-300 hover:scale-105"
                        />

                        <p className="text-xs font-medium text-gray-500">EDUTAP Admin • 0912 *** ****</p>
                        {amount && (
                            <p className="mt-1 text-xs font-bold text-blue-600">
                                {['50', '100', '200', '500'].includes(amount)
                                    ? "Exact amount embedded in QR!"
                                    : "Please input the exact amount in GCash"}
                            </p>
                        )}
                    </div>

                    {/* Amount Input */}
                    <div className="mb-3">
                        <label className="mb-1 block text-sm font-medium text-gray-700">
                            Amount Paid
                        </label>
                        <input
                            type="number"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            placeholder="0.00"
                            className="w-full rounded-lg border border-gray-300 px-3 py-2 outline-none transition focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                        />
                    </div>

                    {/* Quick Amounts */}
                    <div className="mb-3">
                        <div className="grid grid-cols-4 gap-2">
                            {quickAmounts.map((amt) => (
                                <button
                                    key={amt}
                                    onClick={() => setAmount(amt.toString())}
                                    className="rounded-lg border border-gray-200 py-1.5 text-sm font-medium text-gray-600 transition hover:border-gray-300 hover:bg-gray-50"
                                >
                                    ₱{amt}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Reference Number Input */}
                    <div className="mb-4">
                        <label className="mb-1 block text-sm font-medium text-gray-700">
                            Reference Number
                        </label>
                        <input
                            type="text"
                            value={refNumber}
                            onChange={(e) => setRefNumber(e.target.value)}
                            placeholder="Enter 13-digit ref number"
                            className="w-full rounded-lg border border-gray-300 px-3 py-2 outline-none transition focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                        />
                    </div>

                    {/* Confirm Button */}
                    {/* Confirm Button */}
                    <button
                        onClick={handleSubmit}
                        disabled={!amount || refNumber.length !== 13}
                        className={`w-full rounded-lg py-2.5 font-semibold text-white transition ${amount && refNumber.length === 13
                                ? 'bg-blue-600 hover:bg-blue-700'
                                : 'cursor-not-allowed bg-gray-300'
                            }`}
                    >
                        Submit Top Up Ticket
                    </button>
                </div>
            </div>

            {/* ZOOM OVERLAY - Pops up when the QR code is clicked */}
            {isZoomed && (
                <div
                    className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 backdrop-blur-md"
                    onClick={() => setIsZoomed(false)}
                >
                    <div className="relative flex flex-col items-center">
                        <button
                            onClick={() => setIsZoomed(false)}
                            className="absolute -right-4 -top-12 rounded-full p-2 text-white transition hover:bg-white/20"
                        >
                            <X className="h-8 w-8" />
                        </button>
                        <img
                            src={getQRCodePath()}
                            alt="Zoomed GCash QR Code"
                            className="h-[80vh] w-[80vw] rounded-xl object-contain shadow-2xl"
                        />
                        <p className="mt-4 text-sm font-medium text-white">
                            Scan with GCash App
                        </p>
                    </div>
                </div>
            )}

            {/* CSS to physically hide the scrollbar while keeping the ability to scroll */}
            <style>{`
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
                .scrollbar-hide {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}</style>
        </>
    );
}