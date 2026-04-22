"use client";

import { useEffect, useRef, useState } from "react";
import { AlertCircle, Check } from "lucide-react";
import { onAuthStateChanged } from "firebase/auth";
import {
	addDoc,
	collection,
	doc,
	onSnapshot,
	orderBy,
	query,
	updateDoc,
	where,
} from "firebase/firestore";
import { ParentHeader } from "~/components/parent/parent-header";
import { Notifications } from "@/components/parent/notifications";
import { RecentActivity } from "@/components/parent/recent-activity";
import { BalanceSidebar } from "@/components/parent/balance-sidebar";
import { TopUpModal } from "@/components/parent/modals/topup-modal";
import { NotificationDetailsModal } from "@/components/parent/modals/notification-details-modal";
import { PushNotificationToast } from "@/components/parent/push-notification-toast";
import { ActivityFilterModal } from "@/components/parent/modals/activity-filter-modal";
import { SettingsModal } from "@/components/parent/modals/settings-modal";
import { DailySpendingLimit } from "@/components/parent/daily-spending-limit";
import { SpendingStats } from "@/components/parent/spending-stats";
import { SpendingTrend } from "@/components/parent/spending-trend";
import { auth, db } from "../configs/firebase";

interface Notification {
	id: string;
	type: "purchase" | "warning";
	title: string;
	description: string;
	amount?: number;
	icon: "purchase" | "warning";
	timestamp: string;
}

interface ActivityItem {
	name: string;
	qty: number;
	price: number;
}

interface Activity {
	id: string;
	item: string;
	items: ActivityItem[];
	date: string;
	rawDate: string;
	time: string;
	amount: number;
	type: "expense" | "income";
	category: string;
}

interface StudentData {
	id: string;
	name?: string;
	guardianName?: string;
	guardianId?: string;
	gradeLevel?: string;
	lrn?: string;
	photoUrl?: string;
	balance?: number;
	dailyLimit?: number;
	schoolEmail?: string;
	contactNumber?: string;
	guardianEmail?: string;
	studentId?: string;
	[key: string]: unknown;
}

const formatTime = (value: unknown) => {
	const date =
		typeof value === "object" && value !== null && "toDate" in value
			? (value as { toDate: () => Date }).toDate()
			: new Date(value as string | number);

	return date.toLocaleTimeString("en-PH", {
		hour: "2-digit",
		minute: "2-digit",
	});
};

export default function ParentDashboard() {
	const [currentTime, setCurrentTime] = useState("");
	const [guardianId, setGuardianId] = useState<string | null>(auth.currentUser?.uid ?? null);
	const [studentData, setStudentData] = useState<StudentData | null>(null);
	const [selectedPayment, setSelectedPayment] = useState<string | null>(null);
	const [showTopUpModal, setShowTopUpModal] = useState(false);
	const [showSettingsModal, setShowSettingsModal] = useState(false);
	const [topUpFeedback, setTopUpFeedback] = useState<{
		type: "success" | "error";
		message: string;
	} | null>(null);
	const [showNotificationDetails, setShowNotificationDetails] = useState(false);
	const [selectedNotification, setSelectedNotification] = useState<Notification | null>(null);
	const [toastNotification, setToastNotification] = useState<Notification | null>(null);
	const [showActivityFilter, setShowActivityFilter] = useState(false);
	const [activityFilter, setActivityFilter] = useState<"all" | "expense" | "income">("all");
	const [notifications, setNotifications] = useState<Notification[]>([]);
	const [recentActivity, setRecentActivity] = useState<Activity[]>([]);
	const [todaySpent, setTodaySpent] = useState(0);
	const [dailyLimit, setDailyLimit] = useState(100);
	const [showFloatingTopUp, setShowFloatingTopUp] = useState(false);
	const [activityDate, setActivityDate] = useState<string | null>(null);
	const topUpCardRef = useRef<HTMLDivElement>(null);
	const seenNotificationIdsRef = useRef<Set<string>>(new Set());
	const hasHydratedNotificationsRef = useRef(false);

	const paymentMethods = [
		{ id: "cash", name: "Cash", icon: "cash" },
		{ id: "gcash", name: "GCash", icon: "gcash" },
		{ id: "paymaya", name: "PayMaya", icon: "paymaya" },
		{ id: "gotyme", name: "GoTyme", icon: "gotyme" },
	];

	useEffect(() => {
		const updateTime = () => {
			const now = new Date();
			const hours = now.getHours();
			const minutes = now.getMinutes().toString().padStart(2, "0");
			const ampm = hours >= 12 ? "PM" : "AM";
			setCurrentTime(`${hours % 12 || 12}:${minutes} ${ampm}`);
		};

		updateTime();
		const interval = setInterval(updateTime, 60000);
		return () => clearInterval(interval);
	}, []);

	useEffect(() => {
		let studentUnsubscribe: (() => void) | undefined;

		const authUnsubscribe = onAuthStateChanged(auth, (user) => {
			studentUnsubscribe?.();
			setGuardianId(user?.uid ?? null);

			if (!user) {
				setStudentData(null);
				return;
			}

			const studentQuery = query(
				collection(db, "students"),
				where("guardianId", "==", user.uid),
			);

			studentUnsubscribe = onSnapshot(studentQuery, (snapshot) => {
				if (snapshot.empty) {
					setStudentData(null);
					return;
				}

				const docSnap = snapshot.docs[0];
				setStudentData({ id: docSnap.id, ...(docSnap.data() as Omit<StudentData, "id">) });
			});
		});

		return () => {
			studentUnsubscribe?.();
			authUnsubscribe();
		};
	}, []);

	useEffect(() => {
		if (!guardianId || !studentData?.lrn) return;

		const txnUnsubscribe = onSnapshot(
			query(
				collection(db, "transactions"),
				where("lrn", "==", studentData.lrn),
				orderBy("timestamp", "desc"),
			),
			(snapshot) => {
				const txns = snapshot.docs.map((txnDoc) => ({
					id: txnDoc.id,
					...txnDoc.data(),
				})) as Array<Record<string, any>>;

				const purchaseNotifications: Notification[] = txns.slice(0, 5).map((txn) => ({
					id: txn.id,
					type: "purchase",
					title: "Purchase Alert",
					description: `Bought: ${txn.items?.map((item: ActivityItem) => item.name).join(", ") || "Item"}`,
					amount: -Number(txn.total || 0),
					icon: "purchase",
					timestamp: formatTime(txn.timestamp),
				}));

				setNotifications((prev) => {
					const nonPurchase = prev.filter(
						(notification) => notification.title !== "Purchase Alert",
					);
					return [...nonPurchase, ...purchaseNotifications].slice(0, 5);
				});

				const activity: Activity[] = txns.map((txn) => {
					const timestamp =
						typeof txn.timestamp?.toDate === "function"
							? txn.timestamp.toDate()
							: new Date(txn.timestamp);

					return {
						id: txn.id,
						item:
							txn.items?.map((item: ActivityItem) => item.name).join(", ") ||
							"Purchase",
						items: txn.items || [],
						date: timestamp.toLocaleDateString("en-PH", {
							month: "short",
							day: "numeric",
						}),
						rawDate: timestamp.toISOString(),
						time: timestamp.toLocaleTimeString("en-PH", {
							hour: "2-digit",
							minute: "2-digit",
						}),
						amount: -Number(txn.total || 0),
						type: "expense",
						category: "Food & Drinks",
					};
				});

				setRecentActivity(activity);
			},
			(error) => {
				console.error("Firestore transaction listener error:", error);
			},
		);

		const topupUnsubscribe = onSnapshot(
			query(
				collection(db, "topup_requests"),
				where("guardianId", "==", guardianId),
				orderBy("timestamp", "desc"),
			),
			(snapshot) => {
				const topupNotifications: Notification[] = snapshot.docs
					.filter((requestDoc) => requestDoc.data().status !== "pending")
					.map((requestDoc) => {
						const data = requestDoc.data();
						const approved = data.status === "approved";

						return {
							id: requestDoc.id,
							type: "warning",
							title: approved ? "Top-Up Approved" : "Top-Up Rejected",
							description: approved
								? `PHP ${data.amount} has been added to the wallet`
								: `Your top-up of PHP ${data.amount} was rejected`,
							amount: approved ? Number(data.amount) : undefined,
							icon: "warning",
							timestamp: formatTime(data.timestamp),
						};
					});

				setNotifications((prev) => {
					const otherNotifications = prev.filter(
						(notification) =>
							notification.title !== "Top-Up Approved" &&
							notification.title !== "Top-Up Rejected",
					);
					return [...topupNotifications, ...otherNotifications].slice(0, 5);
				});
			},
		);

		return () => {
			txnUnsubscribe();
			topupUnsubscribe();
		};
	}, [guardianId, studentData?.lrn]);

	useEffect(() => {
		if (!studentData?.lrn) return;

		if (typeof studentData.dailyLimit === "number") {
			setDailyLimit(studentData.dailyLimit);
		}

		const startOfToday = new Date();
		startOfToday.setHours(0, 0, 0, 0);

		const spendingUnsubscribe = onSnapshot(
			query(
				collection(db, "transactions"),
				where("lrn", "==", studentData.lrn),
				where("timestamp", ">=", startOfToday.getTime()),
				orderBy("timestamp", "asc"),
			),
			(snapshot) => {
				const total = snapshot.docs.reduce(
					(sum, txnDoc) => sum + Number(txnDoc.data().total || 0),
					0,
				);
				setTodaySpent(total);
			},
		);

		return () => spendingUnsubscribe();
	}, [studentData?.dailyLimit, studentData?.lrn]);

	useEffect(() => {
		const element = topUpCardRef.current;
		if (!element) return;

		const observer = new IntersectionObserver(
			([entry]) => setShowFloatingTopUp(!entry.isIntersecting),
			{ threshold: 0.1 },
		);

		observer.observe(element);
		return () => observer.disconnect();
	}, []);

	useEffect(() => {
		if (!guardianId) return;

		const notificationUnsubscribe = onSnapshot(
			query(
				collection(db, "notifications"),
				where("guardianId", "==", guardianId),
				where("read", "==", false),
				orderBy("timestamp", "desc"),
			),
			(snapshot) => {
				const blockedNotifications: Notification[] = snapshot.docs.map(
					(notificationDoc) => ({
						id: notificationDoc.id,
						type: "warning",
						title: "Purchase Blocked",
						description: notificationDoc.data().message,
						icon: "warning",
						timestamp: formatTime(notificationDoc.data().timestamp),
					}),
				);

				setNotifications((prev) => {
					const others = prev.filter(
						(notification) => notification.title !== "Purchase Blocked",
					);
					return [...blockedNotifications, ...others].slice(0, 5);
				});
			},
		);

		return () => notificationUnsubscribe();
	}, [guardianId]);

	useEffect(() => {
		if (notifications.length === 0) return;

		const seenIds = seenNotificationIdsRef.current;
		const incomingNotifications = notifications.filter(
			(notification) => !seenIds.has(notification.id),
		);

		notifications.forEach((notification) => {
			seenIds.add(notification.id);
		});

		if (!hasHydratedNotificationsRef.current) {
			hasHydratedNotificationsRef.current = true;
			return;
		}

		if (incomingNotifications.length > 0) {
			setToastNotification(incomingNotifications[0]);
		}
	}, [notifications]);

	useEffect(() => {
		if (!toastNotification) return;

		const timeout = window.setTimeout(() => {
			setToastNotification(null);
		}, 4500);

		return () => window.clearTimeout(timeout);
	}, [toastNotification]);

	useEffect(() => {
		if (!topUpFeedback) return;

		const timeout = window.setTimeout(() => {
			setTopUpFeedback(null);
		}, 4000);

		return () => window.clearTimeout(timeout);
	}, [topUpFeedback]);

	const handleLimitChange = async (newLimit: number) => {
		setDailyLimit(newLimit);
		if (studentData?.id) {
			await updateDoc(doc(db, "students", studentData.id), { dailyLimit: newLimit });
		}
	};

	const handleLogout = () => {
		localStorage.removeItem("username");
		localStorage.removeItem("role");
		window.location.href = "/";
	};

	const handleTopUpRequest = async (modalAmount: string, referenceNumber: string) => {
		if (!studentData || !modalAmount || !referenceNumber) {
			setTopUpFeedback({
				type: "error",
				message: "Please fill in all details, including the reference number.",
			});
			throw new Error("Missing top-up request details.");
		}

		try {
			await addDoc(collection(db, "topup_requests"), {
				studentId: studentData.id || studentData.studentId,
				studentName: studentData.name,
				guardianId,
				amount: parseFloat(modalAmount),
				referenceNo: referenceNumber,
				status: "pending",
				paymentMethod: "GCash",
				timestamp: Date.now(),
			});

			setTopUpFeedback({
				type: "success",
				message:
					"Ticket submitted. Please wait for the admin to verify your reference number.",
			});
			setShowTopUpModal(false);
		} catch (error) {
			console.error("Error sending request:", error);
			setTopUpFeedback({
				type: "error",
				message: "Failed to send request. Please try again.",
			});
			throw error;
		}
	};

	const handleShare = () => {
		const text = `EduTap Balance: PHP ${studentData?.balance?.toFixed(2) || "0.00"}`;
		if (navigator.share) {
			navigator.share({ title: "EduTap", text, url: window.location.href });
		}
	};

	const handleMarkNotificationAsRead = async (id: string) => {
		setNotifications((prev) => prev.filter((notification) => notification.id !== id));
		setSelectedNotification(null);
		setShowNotificationDetails(false);

		try {
			await updateDoc(doc(db, "notifications", id), { read: true });
		} catch (error) {
			console.error("Unable to mark notification as read:", error);
		}
	};

	const filteredActivity = recentActivity.filter((activity) => {
		const matchesType = activityFilter === "all" || activity.type === activityFilter;
		const matchesDate = !activityDate || activity.rawDate.startsWith(activityDate);
		return matchesType && matchesDate;
	});

	const transactions = recentActivity.map((activity) => ({
		amount: Math.abs(activity.amount),
		date: activity.rawDate,
		item: activity.item,
	}));

	return (
		<div className="flex min-h-dvh flex-col bg-gray-50">
			{topUpFeedback && (
				<div
					className={`fixed left-4 right-4 top-4 z-[80] flex items-start gap-3 rounded-2xl border px-4 py-3 shadow-2xl sm:left-auto sm:max-w-sm ${
						topUpFeedback.type === "success"
							? "border-emerald-200 bg-emerald-50 text-emerald-900"
							: "border-red-200 bg-red-50 text-red-900"
					}`}>
					<div
						className={`mt-0.5 rounded-full p-1 ${
							topUpFeedback.type === "success" ? "bg-emerald-100" : "bg-red-100"
						}`}>
						{topUpFeedback.type === "success" ? (
							<Check className="h-4 w-4" />
						) : (
							<AlertCircle className="h-4 w-4" />
						)}
					</div>
					<div className="min-w-0 flex-1">
						<p className="text-sm font-semibold">
							{topUpFeedback.type === "success"
								? "Top-Up Request Sent"
								: "Top-Up Error"}
						</p>
						<p className="text-xs leading-relaxed opacity-80">
							{topUpFeedback.message}
						</p>
					</div>
				</div>
			)}

			<div className="pointer-events-none fixed left-4 right-4 top-20 z-[70] w-auto sm:left-auto sm:w-[calc(100%-2rem)] sm:max-w-sm sm:top-24">
				<PushNotificationToast
					notification={toastNotification}
					onClose={() => setToastNotification(null)}
					onOpen={() => {
						if (!toastNotification) return;
						setSelectedNotification(toastNotification);
						setShowNotificationDetails(true);
						setToastNotification(null);
					}}
				/>
			</div>

			<ParentHeader
				username={studentData?.name || "Parent"}
				currentTime={currentTime}
				photoUrl={studentData?.photoUrl || ""}
				gradeLevel={studentData?.gradeLevel || ""}
				balance={studentData?.balance || 0}
				lrn={studentData?.lrn || ""}
				onShare={handleShare}
				onLogout={handleLogout}
				onSettingsClick={() => setShowSettingsModal(true)}
			/>

			<div className="flex flex-1 flex-col lg:flex-row">
				<div className="flex-1 overflow-y-auto p-3 pb-24 sm:p-4 sm:pb-24 lg:p-6 lg:pb-6">
					<div
						ref={topUpCardRef}
						className="mb-4 rounded-xl bg-[#8B0000] p-4 text-white lg:hidden">
						<p className="mb-1 text-xs opacity-75">
							{studentData?.name || "Student"}&apos;s Wallet
						</p>
						<p className="text-3xl font-bold">
							PHP {(studentData?.balance || 0).toFixed(2)}
						</p>
						<p className="mt-1 text-xs opacity-75">Last updated just now</p>
						<button
							onClick={() => setShowTopUpModal(true)}
							className="mt-3 w-full rounded-lg bg-white py-2 text-sm font-semibold text-[#8B0000] hover:bg-gray-100">
							Top Up Wallet
						</button>
					</div>

					<div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
						<div className="space-y-4">
							<Notifications
								notifications={notifications}
								onNotificationClick={(notification) => {
									setSelectedNotification(notification);
									setShowNotificationDetails(true);
								}}
								onClearAll={() => setNotifications([])}
							/>
							<RecentActivity
								activities={filteredActivity}
								onDownloadClick={() => {}}
								selectedDate={activityDate}
								onDateChange={setActivityDate}
							/>
						</div>

						<div className="space-y-4">
							<DailySpendingLimit
								todaySpent={todaySpent}
								dailyLimit={dailyLimit}
								transactions={transactions}
								onLimitChange={handleLimitChange}
							/>
							<SpendingStats transactions={transactions} dailyLimit={dailyLimit} />
							<SpendingTrend transactions={transactions} dailyLimit={dailyLimit} />
						</div>
					</div>
				</div>

				<div className="hidden border-l border-gray-200 lg:block lg:w-80 xl:w-96">
					<BalanceSidebar
						walletName={studentData?.name || "Parent"}
						balance={studentData?.balance || 0}
						paymentMethods={paymentMethods}
						selectedPayment={selectedPayment}
						onPaymentSelect={setSelectedPayment}
						onTopUpClick={() => setShowTopUpModal(true)}
					/>
				</div>
			</div>

			{showFloatingTopUp && (
				<button
					onClick={() => setShowTopUpModal(true)}
					className="fixed bottom-6 right-5 z-50 flex items-center gap-2 rounded-full bg-[#8B0000] px-5 py-3 text-sm font-semibold text-white shadow-xl transition-transform active:scale-95 lg:hidden">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-4 w-4"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						strokeWidth="2.5"
						strokeLinecap="round"
						strokeLinejoin="round">
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
				studentName={studentData?.guardianName || studentData?.name || "A guardian"}
			/>

			<NotificationDetailsModal
				isOpen={showNotificationDetails}
				notification={selectedNotification}
				onClose={() => {
					setShowNotificationDetails(false);
					setSelectedNotification(null);
				}}
				onMarkAsRead={handleMarkNotificationAsRead}
			/>

			{showSettingsModal && (
				<SettingsModal
					currentName={studentData?.name || ""}
					currentEmail={auth.currentUser?.email || ""}
					currentGradeLevel={studentData?.gradeLevel}
					currentLrn={studentData?.lrn}
					currentSchoolEmail={String(studentData?.schoolEmail || "")}
					currentGuardianName={String(studentData?.guardianName || "")}
					currentContactNumber={String(studentData?.contactNumber || "")}
					currentGuardianEmail={String(studentData?.guardianEmail || "")}
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
	);
}
