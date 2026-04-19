"use client"

import { useState, useEffect } from "react"
import { Check, Wallet } from "lucide-react"
import { ParentHeader } from "@/components/parent/parent-header"
import { Notifications } from "@/components/parent/notifications"
import { RecentActivity } from "@/components/parent/recent-activity"
import { BalanceSidebar } from "@/components/parent/balance-sidebar"
import { TopUpModal } from "@/components/parent/modals/topup-modal"
import { NotificationDetailsModal } from "@/components/parent/modals/notification-details-modal"
import { ShareModal } from "@/components/parent/modals/share-modal"
import { ActivityFilterModal } from "@/components/parent/modals/activity-filter-modal"
import { DailySpendingLimit } from "@/components/parent/daily-spending-limit"

// Firebase Imports
import { collection, query, where, onSnapshot, doc, updateDoc, addDoc } from "firebase/firestore";
import { db, auth } from "../configs/firebase";
import { onAuthStateChanged } from "firebase/auth";

interface Notification {
    id: string
    type: "purchase" | "warning"
    title: string
    description: string
    amount?: number
    icon: "purchase" | "warning"
    timestamp: string
}

interface Activity {
    id: string
    item: string
    date: string
    time: string
    amount: number
    type: "expense" | "income"
    category: string
}

export default function ParentDashboard() {
    // --- State Management ---
    const [currentTime, setCurrentTime] = useState("")
    const [studentData, setStudentData] = useState<any>(null)
    const [selectedPayment, setSelectedPayment] = useState<string | null>(null)
    const [showTopUpModal, setShowTopUpModal] = useState(false)
    const [topUpAmount, setTopUpAmount] = useState("")
    const [showShareModal, setShowShareModal] = useState(false)
    const [showSuccessMessage, setShowSuccessMessage] = useState(false)
    const [showNotificationDetails, setShowNotificationDetails] = useState(false)
    const [selectedNotification, setSelectedNotification] = useState<Notification | null>(null)
    const [showActivityFilter, setShowActivityFilter] = useState(false)
    const [activityFilter, setActivityFilter] = useState<"all" | "expense" | "income">("all")

    // Static mock data for UI visual
    const [notifications, setNotifications] = useState<Notification[]>([
        { id: "1", type: "purchase", title: "Purchase Alert", description: "Student bought Chicken Sandwich", amount: -25.00, icon: "purchase", timestamp: "2 mins ago" },
        { id: "2", type: "warning", title: "Low Balance", description: "Balance below ₱150.00 threshold", icon: "warning", timestamp: "15 mins ago" }
    ])

    const [recentActivity, setRecentActivity] = useState<Activity[]>([
        { id: "1", item: "Fruit Juice", date: "Nov 22", time: "10:32 AM", amount: -12.00, type: "expense", category: "Food & Drinks" },
        { id: "5", item: "Wallet Top-up", date: "Nov 18", time: "08:00 AM", amount: 200.00, type: "income", category: "Top-up" }
    ])

    const paymentMethods = [
        { id: "cash", name: "Cash", icon: "💵" },
        { id: "gcash", name: "GCash", icon: "🔵" },
        { id: "paymaya", name: "PayMaya", icon: "🟢" },
        { id: "gotyme", name: "GoTyme", icon: "🏹" }
    ]

    // --- Effect 1: Clock ---
    useEffect(() => {
        const updateTime = () => {
            const now = new Date()
            const hours = now.getHours()
            const minutes = now.getMinutes()
            const ampm = hours >= 12 ? "PM" : "AM"
            const displayHours = hours % 12 || 12
            const displayMinutes = minutes.toString().padStart(2, "0")
            setCurrentTime(`${displayHours}:${displayMinutes} ${ampm}`)
        }
        updateTime()
        const interval = setInterval(updateTime, 60000)
        return () => clearInterval(interval)
    }, [])

    // --- Effect 2: Firebase Real-Time Listener ---
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (!user) return

            const q = query(
                collection(db, "students"),
                where("guardianId", "==", user.uid)
            )

            const studentUnsubscribe = onSnapshot(q, (snapshot) => {
                if (!snapshot.empty) {
                    const docSnap = snapshot.docs[0]
                    setStudentData({ id: docSnap.id, ...docSnap.data() })
                }
            })

            return () => studentUnsubscribe()
        })
        return () => unsubscribe()
    }, [])

    // --- Handlers ---
    const handleLogout = () => {
        localStorage.removeItem('username');
        localStorage.removeItem('role');
        window.location.href = '/';
    };

    // THIS REPLACES BOTH OLD FUNCTIONS
    // Accepts the data coming from the TopUpModal
    const handleTopUpRequest = async (modalAmount: string, referenceNumber: string) => {
        if (!studentData || !modalAmount || !referenceNumber) {
            alert("Please fill in all details, including the Reference Number.");
            return;
        }

        try {
            await addDoc(collection(db, "topup_requests"), {
                studentId: studentData.id || studentData.studentId,
                studentName: studentData.name,
                guardianId: auth.currentUser?.uid,
                amount: parseFloat(modalAmount), // Uses amount typed in the modal
                referenceNo: referenceNumber,    // Uses ref typed in the modal
                status: "pending",
                paymentMethod: "GCash",          // Since your modal is specifically GCash right now
                timestamp: Date.now()
            });

            alert("Ticket Submitted! Please wait for the Admin to verify your Reference Number.");
            setShowTopUpModal(false);
        } catch (error) {
            console.error("Error sending request:", error);
            alert("Failed to send request. Check console.");
        }
    };

    const handleShare = () => {
        const text = `EduTap Balance: ₱${studentData?.balance.toFixed(2) || "0.00"}`;
        if (navigator.share) {
            navigator.share({ title: 'EduTap', text, url: window.location.href });
        } else {
            setShowShareModal(true);
        }
    }

    const filteredActivity = recentActivity.filter(activity => {
        if (activityFilter === "all") return true
        return activity.type === activityFilter
    })

    return (
        <div className="flex h-screen flex-col bg-gray-50">
            {showSuccessMessage && (
                <div className="fixed top-4 right-4 z-50 flex items-center gap-2 rounded-lg bg-green-500 px-4 py-3 text-white shadow-lg">
                    <Check className="h-5 w-5" />
                    <span>Top-up successful!</span>
                </div>
            )}

            <ParentHeader
                username={studentData?.name || "Parent"}
                currentTime={currentTime}
                onShare={handleShare}
                onLogout={handleLogout}
            />

            <div className="flex flex-1 overflow-hidden flex-col lg:flex-row">
                <div className="flex-1 overflow-y-auto p-3 sm:p-6 pb-24 lg:pb-6">
                    <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
                        <div className="space-y-4">
                            <Notifications
                                notifications={notifications}
                                onNotificationClick={(n) => { setSelectedNotification(n); setShowNotificationDetails(true); }}
                                onClearAll={() => setNotifications([])}
                            />
                            <RecentActivity
                                activities={filteredActivity}
                                onFilterClick={() => setShowActivityFilter(true)}
                                onDownloadClick={() => alert("Report downloaded!")}
                            />
                        </div>
                        <DailySpendingLimit />
                    </div>
                </div>

                <div className="hidden lg:block lg:w-80 xl:w-96 border-l border-gray-200">
                    <BalanceSidebar
                        balance={studentData?.balance || 0}
                        paymentMethods={paymentMethods}
                        selectedPayment={selectedPayment}
                        onPaymentSelect={setSelectedPayment}
                        onTopUpClick={() => setShowTopUpModal(true)}
                    />
                </div>
            </div>

            {/* Modals */}
            {/* Modals */}
            <TopUpModal
                isOpen={showTopUpModal}
                onClose={() => setShowTopUpModal(false)}
                onSubmit={handleTopUpRequest} // THIS IS THE MAGIC LINK
            />

            <ActivityFilterModal
                isOpen={showActivityFilter}
                currentFilter={activityFilter}
                onClose={() => setShowActivityFilter(false)}
                onSelectFilter={setActivityFilter}
            />
        </div>
    )
}