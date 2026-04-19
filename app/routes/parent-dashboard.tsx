"use client"

import { useState, useEffect } from "react"
import { Check } from "lucide-react"
import { ParentHeader } from "@/components/parent/parent-header"
import { Notifications } from "@/components/parent/notifications"
import { RecentActivity } from "@/components/parent/recent-activity"
import { BalanceSidebar } from "@/components/parent/balance-sidebar"
import { TopUpModal } from "@/components/parent/modals/topup-modal"
import { NotificationDetailsModal } from "@/components/parent/modals/notification-details-modal"
import { ActivityFilterModal } from "@/components/parent/modals/activity-filter-modal"
import { DailySpendingLimit } from "@/components/parent/daily-spending-limit"
import { collection, query, where, onSnapshot, addDoc, orderBy } from "firebase/firestore"
import { db, auth } from "../configs/firebase"
import { onAuthStateChanged } from "firebase/auth"

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
    const [currentTime, setCurrentTime] = useState("")
    const [studentData, setStudentData] = useState<any>(null)
    const [selectedPayment, setSelectedPayment] = useState<string | null>(null)
    const [showTopUpModal, setShowTopUpModal] = useState(false)
    const [showSuccessMessage, setShowSuccessMessage] = useState(false)
    const [showNotificationDetails, setShowNotificationDetails] = useState(false)
    const [selectedNotification, setSelectedNotification] = useState<Notification | null>(null)
    const [showActivityFilter, setShowActivityFilter] = useState(false)
    const [activityFilter, setActivityFilter] = useState<"all" | "expense" | "income">("all")
    const [notifications, setNotifications] = useState<Notification[]>([])
    const [recentActivity, setRecentActivity] = useState<Activity[]>([])

    const paymentMethods = [
        { id: "cash", name: "Cash", icon: "💵" },
        { id: "gcash", name: "GCash", icon: "🔵" },
        { id: "paymaya", name: "PayMaya", icon: "🟢" },
        { id: "gotyme", name: "GoTyme", icon: "🏹" }
    ]

    // Effect 1: Clock
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

    // Effect 2: Load student data
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

    // Effect 3: Real-time notifications and activity from transactions
    useEffect(() => {
        if (!studentData?.id) return

        // Listener 1: Transactions
        const txnUnsubscribe = onSnapshot(
            query(
                collection(db, "transactions"),
                where("studentId", "==", studentData.id),
                orderBy("timestamp", "desc")
            ),
            (snapshot) => {
                const txns = snapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                })) as any[]

                const newNotifications = txns.slice(0, 5).map(txn => ({
                    id: txn.id,
                    type: "purchase" as const,
                    title: "Purchase Alert",
                    description: `Bought: ${txn.items?.map((i: any) => i.name).join(", ") || "Item"}`,
                    amount: -txn.total,
                    icon: "purchase" as const,
                    timestamp: new Date(txn.timestamp).toLocaleTimeString('en-PH', {
                        hour: '2-digit', minute: '2-digit'
                    })
                }))
                setNotifications(prev => {
                    const topupNotifs = prev.filter(n => n.title.includes("Top-Up"))
                    return [...topupNotifs, ...newNotifications].slice(0, 5)
                })

                const newActivity = txns.slice(0, 10).map(txn => ({
                    id: txn.id,
                    item: txn.items?.map((i: any) => i.name).join(", ") || "Purchase",
                    date: new Date(txn.timestamp).toLocaleDateString('en-PH', { month: 'short', day: 'numeric' }),
                    time: new Date(txn.timestamp).toLocaleTimeString('en-PH', { hour: '2-digit', minute: '2-digit' }),
                    amount: -txn.total,
                    type: "expense" as const,
                    category: "Food & Drinks"
                }))
                setRecentActivity(newActivity)
            }
        )

        // Listener 2: Top-up requests status changes
        const topupUnsubscribe = onSnapshot(
            query(
                collection(db, "topup_requests"),
                where("guardianId", "==", auth.currentUser?.uid),
                orderBy("timestamp", "desc")
            ),
            (snapshot) => {
                const topupNotifs = snapshot.docs
                    .filter(doc => doc.data().status !== "pending")
                    .map(doc => ({
                        id: doc.id,
                        type: "warning" as const,
                        title: doc.data().status === "approved" ? "Top-Up Approved ✅" : "Top-Up Rejected ❌",
                        description: doc.data().status === "approved"
                            ? `₱${doc.data().amount} has been added to the wallet`
                            : `Your top-up of ₱${doc.data().amount} was rejected`,
                        amount: doc.data().status === "approved" ? doc.data().amount : undefined,
                        icon: "warning" as const,
                        timestamp: new Date(doc.data().timestamp).toLocaleTimeString('en-PH', {
                            hour: '2-digit', minute: '2-digit'
                        })
                    }))

                setNotifications(prev => {
                    const txnNotifs = prev.filter(n => n.title === "Purchase Alert")
                    return [...topupNotifs, ...txnNotifs].slice(0, 5)
                })
            }
        )

        return () => {
            txnUnsubscribe()
            topupUnsubscribe()
        }
    }, [studentData?.id])

    
    // Handlers
    const handleLogout = () => {
        localStorage.removeItem('username')
        localStorage.removeItem('role')
        window.location.href = '/'
    }

    const handleTopUpRequest = async (modalAmount: string, referenceNumber: string) => {
        if (!studentData || !modalAmount || !referenceNumber) {
            alert("Please fill in all details, including the Reference Number.")
            return
        }

        try {
            await addDoc(collection(db, "topup_requests"), {
                studentId: studentData.id || studentData.studentId,
                studentName: studentData.name,
                guardianId: auth.currentUser?.uid,
                amount: parseFloat(modalAmount),
                referenceNo: referenceNumber,
                status: "pending",
                paymentMethod: "GCash",
                timestamp: Date.now()
            })

            alert("Ticket Submitted! Please wait for the Admin to verify your Reference Number.")
            setShowTopUpModal(false)
        } catch (error) {
            console.error("Error sending request:", error)
            alert("Failed to send request. Check console.")
        }
    }

    const handleShare = () => {
        const text = `EduTap Balance: ₱${studentData?.balance.toFixed(2) || "0.00"}`
        if (navigator.share) {
            navigator.share({ title: 'EduTap', text, url: window.location.href })
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
                                onNotificationClick={(n) => { setSelectedNotification(n); setShowNotificationDetails(true) }}
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

            <TopUpModal
                isOpen={showTopUpModal}
                onClose={() => setShowTopUpModal(false)}
                onSubmit={handleTopUpRequest}
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