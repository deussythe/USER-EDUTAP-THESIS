    "use client"

    import { useState, useEffect, useRef } from "react"
    import { Check } from "lucide-react"
    import { ParentHeader } from "~/components/parent/parent-header"
    import { Notifications } from "@/components/parent/notifications"
    import { RecentActivity } from "@/components/parent/recent-activity"
    import { BalanceSidebar } from "@/components/parent/balance-sidebar"
    import { TopUpModal } from "@/components/parent/modals/topup-modal"
    import { NotificationDetailsModal } from "@/components/parent/modals/notification-details-modal"
    import { ActivityFilterModal } from "@/components/parent/modals/activity-filter-modal"
    import { SettingsModal } from "@/components/parent/modals/settings-modal"
    import { DailySpendingLimit } from "@/components/parent/daily-spending-limit"
    import { SpendingStats } from "@/components/parent/spending-stats"
    import { SpendingTrend } from "@/components/parent/spending-trend"
    import { collection, query, where, onSnapshot, addDoc, orderBy, updateDoc, doc } from "firebase/firestore"
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
        items: { name: string; qty: number; price: number }[]
        date: string
        rawDate: string
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
        const [showSettingsModal, setShowSettingsModal] = useState(false)
        const [showSuccessMessage, setShowSuccessMessage] = useState(false)
        const [showNotificationDetails, setShowNotificationDetails] = useState(false)
        const [selectedNotification, setSelectedNotification] = useState<Notification | null>(null)
        const [showActivityFilter, setShowActivityFilter] = useState(false)
        const [activityFilter, setActivityFilter] = useState<"all" | "expense" | "income">("all")
        const [notifications, setNotifications] = useState<Notification[]>([])
        const [recentActivity, setRecentActivity] = useState<Activity[]>([])
        const [todaySpent, setTodaySpent] = useState(0)
        const [dailyLimit, setDailyLimit] = useState(100)
        const [showFloatingTopUp, setShowFloatingTopUp] = useState(false)
        const topUpCardRef = useRef<HTMLDivElement>(null)

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

            const txnUnsubscribe = onSnapshot(
                query(
                    collection(db, "transactions"),
                    where("studentNumber", "==", studentData.studentNumber),
                    orderBy("timestamp", "desc")
                ),
                (snapshot) => {
                    console.log("📦 Transactions found:", snapshot.docs.length)

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

                    const newActivity = txns.slice(0, 10).map(txn => {
                        const ts = txn.timestamp?.toDate?.() ?? new Date(txn.timestamp)
                        return {
                            id: txn.id,
                            item: txn.items?.map((i: any) => i.name).join(", ") || "Purchase",
                            items: txn.items || [],
                            date: ts.toLocaleDateString('en-PH', { month: 'short', day: 'numeric' }),
                            rawDate: ts.toISOString(),
                            time: ts.toLocaleTimeString('en-PH', { hour: '2-digit', minute: '2-digit' }),
                            amount: -txn.total,
                            type: "expense" as const,
                            category: "Food & Drinks"
                        }
                    })
                    setRecentActivity(newActivity)
                },
                (error) => {
                    console.error("❌ Firestore error:", error)
                }
            )

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

        // Effect 4: Today's spending
        useEffect(() => {
            if (!studentData?.id) return

            if (studentData.dailyLimit) setDailyLimit(studentData.dailyLimit)

            const startOfToday = new Date()
            startOfToday.setHours(0, 0, 0, 0)
            const startTimestamp = startOfToday.getTime()

            const spendingUnsubscribe = onSnapshot(
                query(
                    collection(db, "transactions"),
                    where("studentNumber", "==", studentData.studentNumber),
                    where("timestamp", ">=", startTimestamp),
                    orderBy("timestamp", "asc")
                ),
                (snapshot) => {
                    const total = snapshot.docs.reduce((sum, doc) => sum + (doc.data().total || 0), 0)
                    setTodaySpent(total)
                }
            )

            return () => spendingUnsubscribe()
        }, [studentData?.id, studentData?.dailyLimit])

        // Effect 5: Floating top-up visibility
        useEffect(() => {
        const el = topUpCardRef.current
        if (!el) return
        const observer = new IntersectionObserver(
            ([entry]) => setShowFloatingTopUp(!entry.isIntersecting),
            { threshold: 0.1 }
        )
        observer.observe(el)
        return () => observer.disconnect()
    }, [topUpCardRef.current])

        useEffect(() => {
        if (!auth.currentUser?.uid) return

        const notifUnsubscribe = onSnapshot(
            query(
                collection(db, "notifications"),
                where("guardianId", "==", auth.currentUser.uid),
                where("read", "==", false),
                orderBy("timestamp", "desc")
            ),
            (snapshot) => {
                const limitNotifs = snapshot.docs.map(doc => ({
                    id: doc.id,
                    type: "warning" as const,
                    title: "⚠️ Purchase Blocked",
                    description: doc.data().message,
                    icon: "warning" as const,
                    timestamp: new Date(doc.data().timestamp).toLocaleTimeString('en-PH', {
                        hour: '2-digit', minute: '2-digit'
                    })
                }))
                setNotifications(prev => {
                    const others = prev.filter(n => n.title !== "⚠️ Purchase Blocked")
                    return [...limitNotifs, ...others].slice(0, 5)
                })
            }
        )
        return () => notifUnsubscribe()
    }, [studentData?.id])

        // Handlers
        const handleLimitChange = async (newLimit: number) => {
            setDailyLimit(newLimit)
            if (studentData?.id) {
                await updateDoc(doc(db, "students", studentData.id), { dailyLimit: newLimit })
            }
        }

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

        const transactions = recentActivity.map(a => ({
            amount: Math.abs(a.amount),
            date: a.rawDate,
            item: a.item,
        }))

        return (
            <div className="flex h-screen flex-col bg-gray-50">
                {showSuccessMessage && (
                    <div className="fixed top-4 right-4 z-50 flex items-center gap-2 rounded-lg bg-green-500 px-4 py-3 text-white shadow-lg">
                        <Check className="h-5 w-5" />
                        <span>Top-up successful!</span>
                    </div>
                )}

                {/* Pass onSettingsClick to header */}
                    <ParentHeader
                        username={studentData?.name || "Parent"}
                        currentTime={currentTime}
                        photoUrl={studentData?.photoUrl || ""}
                        gradeLevel={studentData?.gradeLevel || ""}
                        balance={studentData?.balance || 0}
                        studentNumber={studentData?.studentNumber || ""}
                        onShare={handleShare}
                        onLogout={handleLogout}
                        onSettingsClick={() => setShowSettingsModal(true)}
                    />
                <div className="flex flex-1 overflow-hidden flex-col lg:flex-row">
                    <div className="flex-1 overflow-y-auto p-3 sm:p-6 pb-24 lg:pb-6">

                        {/* Mobile-only Balance Card */}
                        <div ref={topUpCardRef} className="lg:hidden mb-4 rounded-xl bg-[#8B0000] p-4 text-white">
                            <p className="text-xs opacity-75 mb-1">{studentData?.name || "Student"}'s Wallet</p>
                            <p className="text-3xl font-bold">₱{(studentData?.balance || 0).toFixed(2)}</p>
                            <p className="text-xs opacity-75 mt-1">Last updated just now</p>
                            <button
                                onClick={() => setShowTopUpModal(true)}
                                className="mt-3 w-full rounded-lg bg-white py-2 text-sm font-semibold text-[#8B0000] hover:bg-gray-100"
                            >
                                Top Up Wallet
                            </button>
                        </div>

                        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
                            {/* Left column */}
                            <div className="space-y-4">
                                <Notifications
                                    notifications={notifications}
                                    onNotificationClick={(n) => { setSelectedNotification(n); setShowNotificationDetails(true) }}
                                    onClearAll={() => setNotifications([])}
                                />
                                <RecentActivity
                                    activities={filteredActivity}
                                    onDownloadClick={() => alert("Report downloaded!")}
                                />
                            </div>

                            {/* Right column */}
                            <div className="space-y-4">
                                <DailySpendingLimit
                                    todaySpent={todaySpent}
                                    dailyLimit={dailyLimit}
                                    transactions={transactions}
                                    onLimitChange={handleLimitChange}
                                />
                                <SpendingStats
                                    transactions={transactions}
                                    dailyLimit={dailyLimit}
                                />
                                <SpendingTrend
                                    transactions={transactions}
                                    dailyLimit={dailyLimit}
                                />
                            </div>
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

                {/* Floating Top Up */}
                {showFloatingTopUp && (
                    <button
                        onClick={() => setShowTopUpModal(true)}
                        className="lg:hidden fixed bottom-6 right-5 z-50 flex items-center gap-2 bg-[#8B0000] text-white text-sm font-semibold px-5 py-3 rounded-full shadow-xl active:scale-95 transition-transform"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="12" y1="5" x2="12" y2="19" />
                            <line x1="5" y1="12" x2="19" y2="12" />
                        </svg>
                        Top Up
                    </button>
                )}

                <TopUpModal
                    isOpen={showTopUpModal}
                    onClose={() => setShowTopUpModal(false)}
                    onSubmit={handleTopUpRequest}
                />

                {showSettingsModal && (
                    <SettingsModal
                        currentName={studentData?.name || ""}
                        currentEmail={auth.currentUser?.email || ""}
                        currentGradeLevel={studentData?.gradeLevel}
                        currentStudentNumber={studentData?.studentNumber}
                        currentSchoolEmail={studentData?.schoolEmail}
                        currentGuardianName={studentData?.guardianName}
                        currentContactNumber={studentData?.contactNumber}
                        currentGuardianEmail={studentData?.guardianEmail}
                        isOpen={showSettingsModal}
                        onClose={() => setShowSettingsModal(false)}
                        studentId={studentData?.id || ""}
                    />
                )}

                <ActivityFilterModal
                    isOpen={showActivityFilter}
                    currentFilter={activityFilter}
                    onClose={() => setShowActivityFilter(false)}
                    onSelectFilter={setActivityFilter}
                />
            </div>
        )
    }