import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { doc, onSnapshot, addDoc, collection } from 'firebase/firestore';
import { db } from '../../../configs/firebase';

interface TopUpModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (amount: string, refNumber: string) => void;
    studentName?: string;
}

async function sendAdminNotification(title: string, message: string, type: 'student' | 'topup' | 'transaction' | 'general') {
    try {
        await addDoc(collection(db, 'notifications'), {
            title,
            message,
            type,
            target: 'admin',
            read: false,
            timestamp: Date.now(),
        })
    } catch (err) {
        console.error('Failed to send notification:', err)
    }
}

export function TopUpModal({ isOpen, onClose, onSubmit, studentName }: TopUpModalProps) {
    const [amount, setAmount] = useState('');
    const [refNumber, setRefNumber] = useState('');
    const [isZoomed, setIsZoomed] = useState(false);
    const [qrMap, setQrMap] = useState<Record<string, string>>({});
    const quickAmounts = [50, 100, 200, 500];

    useEffect(() => {
        const docRef = doc(db, "settings", "payment_qr");
        const unsubscribe = onSnapshot(docRef, (docSnap) => {
            if (docSnap.exists()) setQrMap(docSnap.data() as Record<string, string>);
        });
        return () => unsubscribe();
    }, []);

    const getQRCodePath = () => {
        if (amount && qrMap[amount]) return qrMap[amount];
        return qrMap['generic'] || 'https://res.cloudinary.com/dvjilvllm/image/upload/v1776797129/kgughoyqgkurbgggno2p.jpg';
    };

    if (!isOpen) return null;

    const handleSubmit = async () => {
        await sendAdminNotification(
            'New Top-Up Request',
            `${studentName || 'A guardian'} submitted a ₱${amount} top-up request (Ref: ${refNumber}).`,
            'topup'
        )
        onSubmit(amount, refNumber);
        setAmount('');
        setRefNumber('');
    };

    return (
        <>
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
                <div className="w-full max-w-[400px] mx-4 max-h-[90vh] overflow-y-auto rounded-2xl bg-white p-4 sm:p-5 shadow-xl scrollbar-hide"
                    onClick={(e) => e.stopPropagation()}>

                    <div className="mb-4 flex items-center justify-between">
                        <h2 className="text-xl font-bold text-gray-900">Top Up via GCash</h2>
                        <button onClick={onClose} className="rounded-full p-1 transition hover:bg-gray-100">
                            <X className="h-5 w-5 text-gray-500" />
                        </button>
                    </div>

                    <div className="mb-4 flex flex-col items-center justify-center rounded-xl border-2 border-dashed border-gray-300 bg-gray-50 p-3 transition-all duration-300">
                        <p className="mb-2 text-sm font-semibold text-gray-700">Scan to Pay</p>
                        <img src={getQRCodePath()} alt="GCash QR Code" onClick={() => setIsZoomed(true)}
                            className="mb-2 h-64 w-64 cursor-pointer rounded-lg object-contain shadow-sm transition-transform duration-300 hover:scale-105" />
                        <p className="text-xs font-medium text-gray-500">EDUTAP Admin • 09 ** *** ****</p>
                        {amount && (
                            <p className="mt-1 text-xs font-bold text-blue-600">
                                {['50', '100', '200', '500'].includes(amount)
                                    ? "Exact amount embedded in QR!"
                                    : "Please input the exact amount in GCash"}
                            </p>
                        )}
                    </div>

                    <div className="mb-3">
                        <label className="mb-1 block text-sm font-medium text-gray-700">Amount Paid</label>
                        <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)}
                            placeholder="0.00"
                            className="w-full rounded-lg border border-gray-300 px-3 py-2 outline-none transition focus:border-blue-500 focus:ring-1 focus:ring-blue-500" />
                    </div>

                    <div className="mb-3">
                        <div className="grid grid-cols-4 gap-2">
                            {quickAmounts.map((amt) => (
                                <button key={amt} onClick={() => setAmount(amt.toString())}
                                    className="rounded-lg border border-gray-200 py-1.5 text-sm font-medium text-gray-600 transition hover:border-gray-300 hover:bg-gray-50">
                                    ₱{amt}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="mb-4">
                        <label className="mb-1 block text-sm font-medium text-gray-700">Reference Number</label>
                        <input type="text" value={refNumber} onChange={(e) => setRefNumber(e.target.value)}
                            placeholder="Enter 13-digit ref number"
                            className="w-full rounded-lg border border-gray-300 px-3 py-2 outline-none transition focus:border-blue-500 focus:ring-1 focus:ring-blue-500" />
                    </div>

                    <button onClick={handleSubmit} disabled={!amount || refNumber.length !== 13}
                        className={`w-full rounded-lg py-2.5 font-semibold text-white transition ${
                            amount && refNumber.length === 13 ? 'bg-blue-600 hover:bg-blue-700' : 'cursor-not-allowed bg-gray-300'
                        }`}>
                        Submit Top Up Ticket
                    </button>
                </div>
            </div>

            {isZoomed && (
                <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 backdrop-blur-md"
                    onClick={() => setIsZoomed(false)}>
                    <div className="relative flex flex-col items-center">
                        <button onClick={() => setIsZoomed(false)}
                            className="absolute -right-4 -top-12 rounded-full p-2 text-white transition hover:bg-white/20">
                            <X className="h-8 w-8" />
                        </button>
                        <img src={getQRCodePath()} alt="Zoomed GCash QR Code"
                            className="max-h-[75vh] max-w-[90vw] rounded-xl object-contain shadow-2xl" />
                        <p className="mt-4 text-sm font-medium text-white">Scan with GCash App</p>
                    </div>
                </div>
            )}

            <style>{`
                .scrollbar-hide::-webkit-scrollbar { display: none; }
                .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
            `}</style>
        </>
    );
}