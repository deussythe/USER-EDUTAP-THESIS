"use client";

import { ResetPasswordForm } from "@/components/ui/reset-password-form";

export async function clientLoader() {
	return null;
}

export default function ResetPasswordPage() {
	return (
		<div>
			<ResetPasswordForm />
		</div>
	);
}
