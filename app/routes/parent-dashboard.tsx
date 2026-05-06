"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import { AlertCircle, Check, Users } from "lucide-react";
import { onAuthStateChanged } from "firebase/auth";
import {
	addDoc,
	collection,
	doc,
	getDocs,
	limit as queryLimit,
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
import { logUserPanelActivity } from "@/configs/auditLogService";
import {
	applyFavicon,
	defaultBrandingSettings,
	readBrandingCache,
	subscribeToBrandingSettings,
} from "@/configs/branding";
import { auth, db } from "../configs/firebase";

export function meta() {
	return [
		{ title: `Parent Dashboard | ${defaultBrandingSettings.canteenName}` },
		{
			name: "description",
			content:
				`Monitor linked students, wallet balance, notifications, and daily spending limits in the ${defaultBrandingSettings.canteenName} parent dashboard.`,
		},
	];
}

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

type StudentLookupStatus = "loading" | "ready" | "unlinked" | "permission-denied" | "error";

const MAX_LINKED_STUDENTS = 5;
const HEX_COLOR_PATTERN = /^#(?:[0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/;

const clampColorChannel = (value: number) => Math.max(0, Math.min(255, value));

const normalizeHexColor = (value: string, fallback: string) => {
	const candidate = value.trim();
	const fallbackCandidate = fallback.trim();
	const safeFallback = HEX_COLOR_PATTERN.test(fallbackCandidate)
		? fallbackCandidate
		: defaultBrandingSettings.themeColor;
	if (!HEX_COLOR_PATTERN.test(candidate)) return safeFallback;

	if (candidate.length === 4) {
		return `#${candidate[1]}${candidate[1]}${candidate[2]}${candidate[2]}${candidate[3]}${candidate[3]}`.toLowerCase();
	}

	return candidate.toLowerCase();
};

const shiftHexColor = (hexColor: string, amount: number) => {
	const normalized = normalizeHexColor(hexColor, defaultBrandingSettings.themeColor).slice(1);
	const red = clampColorChannel(parseInt(normalized.slice(0, 2), 16) + amount);
	const green = clampColorChannel(parseInt(normalized.slice(2, 4), 16) + amount);
	const blue = clampColorChannel(parseInt(normalized.slice(4, 6), 16) + amount);

	return `#${red.toString(16).padStart(2, "0")}${green
		.toString(16)
		.padStart(2, "0")}${blue.toString(16).padStart(2, "0")}`;
};

const toCssContentValue = (value: string) =>
	`"${value.replace(/\\/g, "\\\\").replace(/"/g, '\\"')}"`;

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

const getActorLabel = (studentData: StudentData | null) => {
	const currentUserEmail = auth.currentUser?.email?.trim();
	if (currentUserEmail) return currentUserEmail;

	const guardianEmail =
		typeof studentData?.guardianEmail === "string" ? studentData.guardianEmail.trim() : "";
	if (guardianEmail) return guardianEmail;

	const guardianName =
		typeof studentData?.guardianName === "string" ? studentData.guardianName.trim() : "";
	if (guardianName) return guardianName;

	return "Parent";
};

const getPanelViewSessionKey = (guardianId: string) =>
	`edutap:parent-dashboard:viewed:${guardianId}`;

const getLinkedStudentSessionKey = (guardianId: string, studentId: string) =>
	`edutap:parent-dashboard:viewed-linked-student:${guardianId}:${studentId}`;

const getLinkedStudentNotice = (status: StudentLookupStatus) => {
	switch (status) {
		case "loading":
			return {
				title: "Loading linked student account",
				message:
					"Wallet actions will be available as soon as this parent account finishes loading its student record.",
				tone: "warning" as const,
			};
		case "unlinked":
			return {
				title: "No student linked to this parent account",
				message:
					"Ask an admin to connect this account to the correct student record before using wallet features.",
				tone: "error" as const,
			};
		case "permission-denied":
			return {
				title: "Student access is blocked",
				message:
					"Firestore denied access to the linked student record. Check the guardian link and parent read rules for the students collection.",
				tone: "error" as const,
			};
		case "error":
			return {
				title: "Student details could not be loaded",
				message:
					"Refresh the page and try again. If this keeps happening, check the Firestore listener errors.",
				tone: "error" as const,
			};
		default:
			return null;
	}
};

const getTopUpBlockedMessage = (status: StudentLookupStatus) => {
	switch (status) {
		case "loading":
			return "Student account details are still loading. Please try again in a moment.";
		case "unlinked":
			return "This parent account is not linked to a student yet. Ask the admin to connect it before submitting a top-up.";
		case "permission-denied":
			return "This account cannot access its linked student record. Please ask the admin to verify the student link and Firestore permissions.";
		case "error":
			return "Unable to load the student account right now. Please refresh and try again.";
		default:
			return "Student account details are still unavailable. Please try again in a moment.";
	}
};

const toStudentDataList = (
	docs: Array<{ id: string; data: () => Record<string, unknown> }>,
) =>
	docs.slice(0, MAX_LINKED_STUDENTS).map((docSnap) => ({
		id: docSnap.id,
		...(docSnap.data() as Omit<StudentData, "id">),
	}));

export default function ParentDashboard() {
	const [currentTime, setCurrentTime] = useState("");
	const [guardianId, setGuardianId] = useState<string | null>(auth.currentUser?.uid ?? null);
	const [students, setStudents] = useState<StudentData[]>([]);
	const [selectedStudentId, setSelectedStudentId] = useState<string | null>(null);
	const [studentLookupStatus, setStudentLookupStatus] = useState<StudentLookupStatus>("loading");
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
	const [brandingSettings, setBrandingSettings] = useState(defaultBrandingSettings);
	const topUpCardRef = useRef<HTMLDivElement>(null);
	const seenNotificationIdsRef = useRef<Set<string>>(new Set());
	const hasHydratedNotificationsRef = useRef(false);
	const hasLoggedPanelViewRef = useRef(false);
	const loggedLinkedStudentIdsRef = useRef<Set<string>>(new Set());

	const studentData =
		students.find((student) => student.id === selectedStudentId) ?? students[0] ?? null;

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
		const cachedBranding = readBrandingCache("student");
		if (cachedBranding) {
			setBrandingSettings(cachedBranding);
			applyFavicon(cachedBranding.faviconUrl);
		} else {
			applyFavicon(defaultBrandingSettings.faviconUrl);
		}

		const unsubscribe = subscribeToBrandingSettings(
			"student",
			(nextBranding) => {
				setBrandingSettings(nextBranding);
				applyFavicon(nextBranding.faviconUrl);
			},
			(error) => {
				console.error("Failed to subscribe to student branding settings:", error);
			},
		);

		return () => {
			unsubscribe();
		};
	}, []);

	useEffect(() => {
		if (typeof document === "undefined") return;
		document.title = `Parent Dashboard | ${brandingSettings.canteenName}`;
	}, [brandingSettings.canteenName]);

	useEffect(() => {
		let studentUnsubscribe: (() => void) | undefined;

		const applyLinkedStudents = (linkedStudents: StudentData[]) => {
			setStudents(linkedStudents);
			setSelectedStudentId((currentId) => {
				if (currentId && linkedStudents.some((student) => student.id === currentId)) {
					return currentId;
				}

				return linkedStudents[0]?.id ?? null;
			});
			setStudentLookupStatus(linkedStudents.length > 0 ? "ready" : "unlinked");
		};

		const authUnsubscribe = onAuthStateChanged(auth, (user) => {
			studentUnsubscribe?.();
			setGuardianId(user?.uid ?? null);

			if (!user) {
				setStudents([]);
				setSelectedStudentId(null);
				setStudentLookupStatus("loading");
				return;
			}

			setStudentLookupStatus("loading");

			const studentQuery = query(
				collection(db, "students"),
				where("guardianId", "==", user.uid),
				queryLimit(MAX_LINKED_STUDENTS),
			);

			studentUnsubscribe = onSnapshot(
				studentQuery,
				(snapshot) => {
					if (!snapshot.empty) {
						applyLinkedStudents(toStudentDataList(snapshot.docs));
						return;
					}

					const guardianEmail = user.email?.trim();
					if (!guardianEmail) {
						setStudents([]);
						setSelectedStudentId(null);
						setStudentLookupStatus("unlinked");
						return;
					}

					void (async () => {
						try {
							const emailSnapshot = await getDocs(
								query(
									collection(db, "students"),
									where("guardianEmail", "==", guardianEmail),
									queryLimit(MAX_LINKED_STUDENTS),
								),
							);

							if (auth.currentUser?.uid !== user.uid) return;

							if (!emailSnapshot.empty) {
								applyLinkedStudents(toStudentDataList(emailSnapshot.docs));
								return;
							}

							setStudents([]);
							setSelectedStudentId(null);
							setStudentLookupStatus("unlinked");
						} catch (error) {
							if (auth.currentUser?.uid !== user.uid) return;

							console.error("Failed to look up linked student by guardian email:", error);
							setStudents([]);
							setSelectedStudentId(null);
							setStudentLookupStatus("unlinked");
						}
					})();
				},
				(error) => {
					console.error("Failed to subscribe to linked student:", error);
					setStudents([]);
					setSelectedStudentId(null);
					setStudentLookupStatus(
						error.code === "permission-denied" ? "permission-denied" : "error",
					);
				},
			);
		});

		return () => {
			studentUnsubscribe?.();
			authUnsubscribe();
		};
	}, []);

	useEffect(() => {
		if (!guardianId || hasLoggedPanelViewRef.current) return;

		const sessionKey = getPanelViewSessionKey(guardianId);
		if (window.sessionStorage.getItem(sessionKey)) {
			hasLoggedPanelViewRef.current = true;
			return;
		}

		hasLoggedPanelViewRef.current = true;
		window.sessionStorage.setItem(sessionKey, "1");

		const actorLabel = getActorLabel(studentData);
		void logUserPanelActivity({
			action: "viewed_panel",
			targetType: "panel",
			targetId: "parent-dashboard",
			targetName: "Parent Dashboard",
			details: `${actorLabel} opened the parent dashboard.`,
			actorId: guardianId,
			actorLabel,
		});
	}, [guardianId, studentData]);

	useEffect(() => {
		if (!guardianId || !studentData?.id) return;

		const sessionKey = getLinkedStudentSessionKey(guardianId, studentData.id);
		if (
			loggedLinkedStudentIdsRef.current.has(studentData.id) ||
			window.sessionStorage.getItem(sessionKey)
		) {
			loggedLinkedStudentIdsRef.current.add(studentData.id);
			return;
		}

		loggedLinkedStudentIdsRef.current.add(studentData.id);
		window.sessionStorage.setItem(sessionKey, "1");

		const actorLabel = getActorLabel(studentData);
		const studentName = studentData.name?.trim() || "Linked Student";
		const studentLrn =
			typeof studentData.lrn === "string" && studentData.lrn.trim()
				? ` (LRN: ${studentData.lrn.trim()})`
				: "";

		void logUserPanelActivity({
			action: "viewed_linked_student",
			targetType: "student",
			targetId: studentData.id,
			targetName: studentName,
			details: `${actorLabel} loaded linked student data for ${studentName}${studentLrn}.`,
			actorId: guardianId,
			actorLabel,
		});
	}, [guardianId, studentData]);

	useEffect(() => {
		if (!guardianId) return;

		let txnUnsubscribe: (() => void) | undefined;

		if (studentData?.lrn) {
			txnUnsubscribe = onSnapshot(
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
		} else {
			setRecentActivity([]);
			setNotifications((prev) =>
				prev.filter((notification) => notification.title !== "Purchase Alert"),
			);
		}

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
						const studentName =
							typeof data.studentName === "string" && data.studentName.trim()
								? data.studentName.trim()
								: "student";

						return {
							id: requestDoc.id,
							type: "warning",
							title: approved ? "Top-Up Approved" : "Top-Up Rejected",
							description: approved
								? `PHP ${data.amount} has been added to ${studentName}'s wallet`
								: `Your top-up of PHP ${data.amount} for ${studentName} was rejected`,
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
			txnUnsubscribe?.();
			topupUnsubscribe();
		};
	}, [guardianId, studentData?.lrn]);

	useEffect(() => {
		setDailyLimit(typeof studentData?.dailyLimit === "number" ? studentData.dailyLimit : 100);

		if (!studentData?.lrn) {
			setTodaySpent(0);
			return;
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
	}, [studentData?.dailyLimit, studentData?.id, studentData?.lrn]);

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

	const handleLogout = async () => {
		const actorId = guardianId ?? auth.currentUser?.uid ?? "";
		if (actorId) {
			const actorLabel = getActorLabel(studentData);
			await logUserPanelActivity({
				action: "logged_out",
				targetType: "panel",
				targetId: "parent-dashboard",
				targetName: "Parent Dashboard",
				details: `${actorLabel} logged out from the parent dashboard.`,
				actorId,
				actorLabel,
			});
		}

		localStorage.removeItem("username");
		localStorage.removeItem("role");
		window.location.href = "/";
	};

	const openTopUpModal = () => {
		if (studentLookupStatus === "ready" && studentData?.id && guardianId) {
			setShowTopUpModal(true);
			return;
		}

		setTopUpFeedback({
			type: "error",
			message: getTopUpBlockedMessage(studentLookupStatus),
		});
	};

	const handleTopUpRequest = async (modalAmount: string, referenceNumber: string) => {
		const trimmedAmount = modalAmount.trim();
		const trimmedReferenceNumber = referenceNumber.trim();

		if (!trimmedAmount || !trimmedReferenceNumber) {
			setTopUpFeedback({
				type: "error",
				message: "Please fill in all details, including the reference number.",
			});
			throw new Error("Missing top-up request details.");
		}

		if (studentLookupStatus !== "ready" || !studentData?.id || !guardianId) {
			setTopUpFeedback({
				type: "error",
				message: getTopUpBlockedMessage(studentLookupStatus),
			});
			throw new Error("Missing linked student data for top-up request.");
		}

		try {
			await addDoc(collection(db, "topup_requests"), {
				studentId: studentData.id || studentData.studentId,
				studentName: studentData.name || "Student",
				studentLrn: studentData.lrn || "",
				guardianId,
				amount: parseFloat(trimmedAmount),
				referenceNo: trimmedReferenceNumber,
				status: "pending",
				paymentMethod: "GCash",
				timestamp: Date.now(),
			});

			setTopUpFeedback({
				type: "success",
				message:
					`Ticket submitted for ${studentData.name || "the selected student"}. Please wait for the admin to verify your reference number.`,
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
		const studentName = studentData?.name?.trim() || "Selected student";
		const text = `${studentName} EduTap Balance: PHP ${
			studentData?.balance?.toFixed(2) || "0.00"
		}`;
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
	const linkedStudentNotice = getLinkedStudentNotice(studentLookupStatus);
	const resolvedThemeColor = normalizeHexColor(
		brandingSettings.themeColor,
		defaultBrandingSettings.themeColor,
	);
	const headerGradientFrom = shiftHexColor(resolvedThemeColor, -34);
	const headerGradientTo = shiftHexColor(resolvedThemeColor, -12);
	const headerBorderColor = shiftHexColor(resolvedThemeColor, -42);
	const headerCanteenName =
		brandingSettings.canteenName || defaultBrandingSettings.canteenName;
	const headerSchoolName = brandingSettings.schoolName || defaultBrandingSettings.schoolName;
	const headerBrandingStyle = {
		"--parent-header-branding-canteen-name": toCssContentValue(headerCanteenName),
		"--parent-header-branding-school-name": toCssContentValue(headerSchoolName),
	} as CSSProperties;

	return (
		<div
			className="parent-dashboard-branding flex min-h-dvh flex-col bg-gray-50"
			style={headerBrandingStyle}>
			<style>{`
				.parent-dashboard-branding > header {
					border-bottom-color: ${headerBorderColor};
					background-image: linear-gradient(to right, ${headerGradientFrom}, ${headerGradientTo});
				}
				.parent-dashboard-branding > header > div > div:first-child > div:last-child > h1 {
					font-size: 0 !important;
					line-height: 1.25rem;
				}
				.parent-dashboard-branding > header > div > div:first-child > div:last-child > h1::after {
					content: var(--parent-header-branding-canteen-name);
					font-size: 0.875rem;
					font-weight: 600;
					line-height: 1.25rem;
					color: #ffffff;
				}
				.parent-dashboard-branding > header > div > div:first-child > div:last-child > p {
					font-size: 0 !important;
					line-height: 1rem;
				}
				.parent-dashboard-branding > header > div > div:first-child > div:last-child > p::after {
					content: var(--parent-header-branding-school-name);
					font-size: 0.75rem;
					line-height: 1rem;
					color: rgba(255, 255, 255, 0.75);
				}
			`}</style>
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
				<div className="flex-1 overflow-y-auto p-2.5 pb-20 sm:p-4 sm:pb-24 lg:p-6 lg:pb-6">
					{linkedStudentNotice && (
						<div
							className={`mb-3 rounded-xl border px-4 py-3 shadow-sm sm:mb-4 ${
								linkedStudentNotice.tone === "warning"
									? "border-amber-200 bg-amber-50 text-amber-900"
									: "border-red-200 bg-red-50 text-red-900"
							}`}>
							<div className="flex items-start gap-3">
								<AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
								<div>
									<p className="text-sm font-semibold">{linkedStudentNotice.title}</p>
									<p className="mt-1 text-xs leading-relaxed opacity-80">
										{linkedStudentNotice.message}
									</p>
								</div>
							</div>
						</div>
					)}

					{students.length > 0 && (
						<div className="mb-3 rounded-xl border border-gray-200 bg-white p-2.5 shadow-sm sm:mb-4 sm:p-4">
							<div className="flex flex-wrap items-start justify-between gap-2.5 sm:items-center sm:gap-3">
								<div className="flex min-w-0 items-center gap-2.5 sm:gap-3">
									<div className="flex h-8 w-8 items-center justify-center rounded-lg bg-red-50 text-[#8B0000] sm:h-9 sm:w-9">
										<Users className="h-4 w-4" />
									</div>
									<div className="min-w-0">
										<p className="text-sm font-bold text-gray-900">
											Linked Students
										</p>
										<p className="text-xs text-gray-500">
											{students.length}/{MAX_LINKED_STUDENTS} student slots
										</p>
									</div>
								</div>
								{studentData?.lrn && (
									<span className="max-w-full truncate rounded-full border border-red-100 bg-red-50 px-3 py-1 text-xs font-semibold text-[#8B0000] sm:max-w-none">
										LRN {studentData.lrn}
									</span>
								)}
							</div>

							<div className="mt-3 grid grid-cols-3 gap-2 sm:grid-cols-2 sm:gap-2.5 xl:grid-cols-3">
								{students.map((student) => {
									const isSelected = student.id === studentData?.id;
									const studentName = student.name?.trim() || "Unnamed Student";
									const photoUrl =
										typeof student.photoUrl === "string" ? student.photoUrl : "";
									const gradeLevel =
										typeof student.gradeLevel === "string"
											? student.gradeLevel
											: "";
									const lrn = typeof student.lrn === "string" ? student.lrn : "";
									const balance =
										typeof student.balance === "number" ? student.balance : 0;

									return (
										<button
											key={student.id}
											type="button"
											onClick={() => {
												setSelectedStudentId(student.id);
												setSelectedPayment(null);
												setActivityDate(null);
											}}
											className={`relative flex min-w-0 flex-col items-center gap-1.5 rounded-xl border p-2 text-center transition sm:flex-row sm:items-center sm:gap-3 sm:p-3 sm:text-left ${
												isSelected
													? "border-[#8B0000] bg-red-50 shadow-sm ring-1 ring-[#8B0000]/10"
													: "border-gray-100 bg-white hover:border-red-200 hover:bg-red-50/50"
											}`}>
											{photoUrl ? (
												<img
													src={photoUrl}
													alt={studentName}
													className="h-11 w-11 shrink-0 rounded-full object-cover sm:h-10 sm:w-10"
												/>
											) : (
												<div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gray-100 text-sm font-bold text-gray-500 sm:h-10 sm:w-10">
													{studentName.charAt(0).toUpperCase()}
												</div>
											)}
											<div className="min-w-0 flex-1">
												<div className="flex min-w-0 items-center justify-center gap-1.5 sm:justify-start sm:gap-2">
													<p className="line-clamp-2 text-[11px] font-bold leading-tight text-gray-900 sm:flex-1 sm:truncate sm:text-sm">
														{studentName}
													</p>
													{isSelected && (
														<span className="absolute right-1.5 top-1.5 rounded-full bg-[#8B0000] px-1.5 py-0.5 text-[9px] font-semibold text-white sm:static sm:px-2 sm:text-[10px]">
															Selected
														</span>
													)}
												</div>
												<p className="hidden break-words text-xs text-gray-500 sm:block sm:truncate">
													{gradeLevel || "No grade"} {lrn ? `- ${lrn}` : ""}
												</p>
												<p className="hidden mt-0.5 text-xs font-semibold text-gray-700 sm:block">
													PHP {balance.toFixed(2)}
												</p>
											</div>
										</button>
									);
								})}
							</div>
						</div>
					)}

					<div
						ref={topUpCardRef}
						className="mb-3 rounded-xl bg-[#8B0000] p-3.5 text-white sm:mb-4 sm:p-4 lg:hidden">
						<p className="mb-1 text-xs opacity-75">
							{studentData?.name || "Student"}&apos;s Wallet
						</p>
						<p className="text-3xl font-bold">
							PHP {(studentData?.balance || 0).toFixed(2)}
						</p>
						<p className="mt-1 text-xs opacity-75">Last updated just now</p>
						<button
							onClick={openTopUpModal}
							className="mt-3 w-full rounded-lg bg-white py-2 text-sm font-semibold text-[#8B0000] hover:bg-gray-100">
							Top Up Wallet
						</button>
					</div>

					<div className="grid grid-cols-1 gap-3 sm:gap-4 lg:grid-cols-2">
						<div className="space-y-3 sm:space-y-4">
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

						<div className="space-y-3 sm:space-y-4">
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
						onTopUpClick={openTopUpModal}
					/>
				</div>
			</div>

			{showFloatingTopUp && (
				<button
					onClick={openTopUpModal}
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
				studentName={studentData?.name || "Selected student"}
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
