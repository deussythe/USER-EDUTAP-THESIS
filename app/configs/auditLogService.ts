import { addDoc, collection, type FirestoreError } from "firebase/firestore";
import { db } from "@/configs/firebase";

export type UserPanelActivityAction =
	| "viewed_panel"
	| "logged_out"
	| "viewed_linked_student";

interface LogUserPanelActivityInput {
	action: UserPanelActivityAction;
	targetType: string;
	targetId: string;
	targetName: string;
	details: string;
	actorId: string;
	actorLabel: string;
}

let skipClientAuditLogging = false;

function getNotificationContent({
	action,
	actorLabel,
	targetName,
}: Pick<LogUserPanelActivityInput, "action" | "actorLabel" | "targetName">) {
	switch (action) {
		case "viewed_panel":
			return {
				title: "Parent Dashboard Opened",
				message: `${actorLabel} opened the parent dashboard.`,
				type: "general",
			};
		case "logged_out":
			return {
				title: "Parent Logged Out",
				message: `${actorLabel} logged out from the parent dashboard.`,
				type: "general",
			};
		case "viewed_linked_student":
			return {
				title: "Linked Student Viewed",
				message: `${actorLabel} loaded linked student data for ${targetName}.`,
				type: "student",
			};
	}
}

function isPermissionDeniedError(error: unknown): error is FirestoreError {
	return (
		typeof error === "object" &&
		error !== null &&
		"code" in error &&
		(error as { code?: unknown }).code === "permission-denied"
	);
}

export async function logUserPanelActivity(input: LogUserPanelActivityInput) {
	if (skipClientAuditLogging) {
		return;
	}

	const timestamp = Date.now();
	const notification = getNotificationContent(input);

	const writes = await Promise.allSettled([
		addDoc(collection(db, "audit_logs"), {
			...input,
			timestamp,
		}),
		addDoc(collection(db, "notifications"), {
			...notification,
			action: input.action,
			target: "admin",
			targetType: input.targetType,
			targetId: input.targetId,
			targetName: input.targetName,
			details: input.details,
			actorId: input.actorId,
			actorLabel: input.actorLabel,
			read: false,
			timestamp,
		}),
	]);

	const failures = writes
		.filter((result): result is PromiseRejectedResult => result.status === "rejected")
		.map((result) => result.reason);

	if (failures.length > 0) {
		if (failures.every(isPermissionDeniedError)) {
			skipClientAuditLogging = true;
			return;
		}

		console.error("Failed to write user panel activity log:", failures);
	}
}
