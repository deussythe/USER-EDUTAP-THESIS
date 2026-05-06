"use client";

import {
	type CSSProperties,
	type FormEvent,
	type KeyboardEvent,
	useEffect,
	useState,
} from "react";
import { ShoppingCart, AlertCircle, CheckCircle, ArrowLeft, Eye, EyeOff } from "lucide-react";
import { signInWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "@/configs/firebase";
import {
	applyFavicon,
	type BrandingSettings,
	fetchBrandingSettingsForTab,
	readBrandingCache,
	subscribeToBrandingSettings,
} from "@/configs/branding";

interface LoginFormProps {
	onLogin: (username: string) => void;
}

type View = "login" | "forgot-password";

export function LoginForm({ onLogin }: LoginFormProps) {
	const [view, setView] = useState<View>("login");

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [showPassword, setShowPassword] = useState(false);
	const [error, setError] = useState("");
	const [isLoading, setIsLoading] = useState(false);

	const [resetEmail, setResetEmail] = useState("");
	const [resetError, setResetError] = useState("");
	const [resetSuccess, setResetSuccess] = useState(false);
	const [isResetting, setIsResetting] = useState(false);
	const [schoolName, setSchoolName] = useState("St. Clare College of Caloocan");
	const [canteenName, setCanteenName] = useState("EDUTAP");
	const [logoUrl, setLogoUrl] = useState<string | null>(null);

	// Background state
	const [bgStyle, setBgStyle] = useState<CSSProperties>({
		background: "linear-gradient(to bottom right, #450a0a, #7f1d1d, #7f1d1d)",
	});

	useEffect(() => {
		// Apply cached branding immediately (no flash)
		const cached = readBrandingCache("student");
		if (cached) {
			applyBranding(cached);
		}

		// Then fetch fresh from Firestore
		fetchBrandingSettingsForTab("student")
			.then((settings) => {
				applyBranding(settings);
			})
			.catch((brandingError) => {
				console.error("Failed to load branding settings:", brandingError);
			});

		const unsubscribe = subscribeToBrandingSettings(
			"student",
			(settings) => {
				applyBranding(settings);
			},
			(subscriptionError) => {
				console.error("Failed to subscribe to branding settings:", subscriptionError);
			},
		);

		return unsubscribe;
	}, []);

	function applyBranding(settings: BrandingSettings) {
		setSchoolName(settings.schoolName);
		setCanteenName(settings.canteenName);
		setLogoUrl(settings.logoUrl);
		applyFavicon(settings.faviconUrl);
		applyBg(settings.loginBgType, settings.loginBgColor, settings.loginBgUrl);
	}

	function applyBg(type: "color" | "image", color: string, url: string | null) {
		if (type === "image" && url) {
			setBgStyle({
				backgroundImage: `url(${url})`,
				backgroundSize: "cover",
				backgroundPosition: "center",
			});
		} else {
			setBgStyle({ backgroundColor: color });
		}
	}

	const handleSubmit = async (e: FormEvent | KeyboardEvent) => {
		e.preventDefault();
		setError("");
		setIsLoading(true);

		if (!email || !password) {
			setError("Please enter both email and password");
			setIsLoading(false);
			return;
		}

		try {
			const userCredential = await signInWithEmailAndPassword(auth, email, password);
			const uid = userCredential.user.uid;

			const userDoc = await getDoc(doc(db, "users", uid));

			if (!userDoc.exists()) {
				setError("Account not found. Please contact admin.");
				setIsLoading(false);
				return;
			}

			const role = userDoc.data().role;

			localStorage.setItem("username", userDoc.data().name || email);
			localStorage.setItem("role", role);

			onLogin(role);

			setTimeout(() => {
				if (role === "admin") window.location.href = "/admin-panel";
				else if (role === "staff") window.location.href = "/pos";
				else if (role === "parent") window.location.href = "/parent-dashboard";
				else setError("Unknown role. Please contact admin.");
			}, 500);
		} catch (err: any) {
			console.error(err);
			if (
				err.code === "auth/user-not-found" ||
				err.code === "auth/wrong-password" ||
				err.code === "auth/invalid-credential"
			) {
				setError("Invalid email or password.");
			} else {
				setError("Login failed. Please try again.");
			}
			setIsLoading(false);
		}
	};

	const handleForgotPassword = async (e: FormEvent | KeyboardEvent) => {
		e.preventDefault();
		setResetError("");
		setResetSuccess(false);

		if (!resetEmail) {
			setResetError("Please enter your email address.");
			return;
		}

		setIsResetting(true);

		try {
			await sendPasswordResetEmail(auth, resetEmail);
			setResetSuccess(true);
		} catch (err: any) {
			console.error(err);
			if (err.code === "auth/user-not-found" || err.code === "auth/invalid-email") {
				setResetError("No account found with that email address.");
			} else {
				setResetError("Failed to send reset email. Please try again.");
			}
		} finally {
			setIsResetting(false);
		}
	};

	const goBackToLogin = () => {
		setView("login");
		setResetEmail("");
		setResetError("");
		setResetSuccess(false);
	};

	return (
		// 👇 Replace the hardcoded gradient with dynamic bgStyle
		<div className="auth-shell flex min-h-screen items-center justify-center p-4" style={bgStyle}>
			<div className="w-full max-w-md rounded-xl border border-red-700 bg-white shadow-2xl">
				{/* Header */}
				<div className="space-y-3 p-6 text-center bg-gradient-to-r from-red-900 to-red-800 rounded-t-xl">
					<div className="mx-auto flex h-24 w-24 items-center justify-center overflow-hidden rounded-full border-4 border-white bg-white shadow-lg">
						{logoUrl ? (
							<img
								src={logoUrl}
								alt={`${canteenName} logo`}
								className="h-full w-full scale-110 rounded-full object-cover"
							/>
						) : (
							<ShoppingCart className="h-8 w-8 text-red-900" />
						)}
					</div>
					<h2 className="text-2xl font-bold text-white">{canteenName}</h2>
					<p className="text-sm text-red-100">{schoolName}</p>
				</div>

				{/* Login View */}
				{view === "login" && (
					<div className="p-6">
						<p className="text-center text-sm text-gray-600 mb-6">
							Sign in to access your dashboard
						</p>
						<div className="space-y-4">
							<div className="space-y-2">
								<label
									htmlFor="email"
									className="text-sm font-medium text-gray-700">
									Email
								</label>
								<input
									id="email"
									type="email"
									placeholder="Enter your email"
									value={email}
									onChange={(e) => setEmail(e.target.value)}
									onKeyDown={(e) => e.key === "Enter" && handleSubmit(e)}
									autoComplete="email"
									autoFocus
									disabled={isLoading}
									className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-red-800 focus:outline-none focus:ring-2 focus:ring-red-200 disabled:bg-gray-100 disabled:cursor-not-allowed"
								/>
							</div>
							<div className="space-y-2">
								<label
									htmlFor="password"
									className="text-sm font-medium text-gray-700">
									Password
								</label>
								<div className="relative">
									<input
										id="password"
										type={showPassword ? "text" : "password"}
										placeholder="Enter your password"
										value={password}
										onChange={(e) => setPassword(e.target.value)}
										onKeyDown={(e) => e.key === "Enter" && handleSubmit(e)}
										autoComplete="current-password"
										disabled={isLoading}
										className="w-full rounded-lg border border-gray-300 px-3 py-2 pr-32 text-sm focus:border-red-800 focus:outline-none focus:ring-2 focus:ring-red-200 disabled:bg-gray-100 disabled:cursor-not-allowed"
									/>
									<button
										type="button"
										onClick={() => setShowPassword(!showPassword)}
										aria-label={
											showPassword ? "Hide password" : "Show password"
										}
										className="absolute right-3 top-1/2 inline-flex -translate-y-1/2 items-center gap-1 rounded-md px-2 py-1 text-xs font-medium text-red-800 transition hover:bg-red-50 hover:text-red-900">
										{showPassword ? (
											<>
												<EyeOff className="h-4 w-4" />
												<span>Hide</span>
											</>
										) : (
											<>
												<Eye className="h-4 w-4" />
												<span>Show</span>
											</>
										)}
									</button>
								</div>
							</div>

							<div className="flex justify-end">
								<button
									type="button"
									onClick={() => setView("forgot-password")}
									className="text-xs text-red-800 hover:text-red-600 hover:underline transition-colors">
									Forgot password?
								</button>
							</div>

							{error && (
								<div className="flex items-center gap-2 rounded-md bg-red-50 p-3 text-sm text-red-600 border border-red-200">
									<AlertCircle className="h-4 w-4 shrink-0" />
									<span>{error}</span>
								</div>
							)}

							<button
								type="button"
								onClick={handleSubmit}
								disabled={isLoading}
								className="w-full rounded-lg bg-gradient-to-r from-red-900 to-red-800 px-4 py-2.5 text-sm font-semibold text-white transition hover:from-red-800 hover:to-red-700 disabled:bg-gray-400 disabled:cursor-not-allowed shadow-md">
								{isLoading ? "Signing in..." : "Sign In"}
							</button>
						</div>
					</div>
				)}

				{/* Forgot Password View */}
				{view === "forgot-password" && (
					<div className="p-6">
						<button
							type="button"
							onClick={goBackToLogin}
							className="flex items-center gap-1.5 text-xs text-gray-500 hover:text-red-800 transition-colors mb-5">
							<ArrowLeft className="h-3.5 w-3.5" />
							Back to Sign In
						</button>

						<h3 className="text-lg font-semibold text-gray-800 mb-1">
							Reset your password
						</h3>
						<p className="text-sm text-gray-500 mb-6">
							Enter your email address and we'll send you a link to reset your
							password.
						</p>

						<div className="space-y-4">
							<div className="space-y-2">
								<label
									htmlFor="reset-email"
									className="text-sm font-medium text-gray-700">
									Email
								</label>
								<input
									id="reset-email"
									type="email"
									placeholder="Enter your email"
									value={resetEmail}
									onChange={(e) => setResetEmail(e.target.value)}
									onKeyDown={(e) => e.key === "Enter" && handleForgotPassword(e)}
									autoComplete="email"
									autoFocus
									disabled={isResetting || resetSuccess}
									className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-red-800 focus:outline-none focus:ring-2 focus:ring-red-200 disabled:bg-gray-100 disabled:cursor-not-allowed"
								/>
							</div>

							{resetError && (
								<div className="flex items-center gap-2 rounded-md bg-red-50 p-3 text-sm text-red-600 border border-red-200">
									<AlertCircle className="h-4 w-4 shrink-0" />
									<span>{resetError}</span>
								</div>
							)}

							{resetSuccess && (
								<div className="flex items-center gap-2 rounded-md bg-green-50 p-3 text-sm text-green-700 border border-green-200">
									<CheckCircle className="h-4 w-4 shrink-0" />
									<span>Password reset email sent! Check your inbox.</span>
								</div>
							)}

							<button
								type="button"
								onClick={handleForgotPassword}
								disabled={isResetting || resetSuccess}
								className="w-full rounded-lg bg-gradient-to-r from-red-900 to-red-800 px-4 py-2.5 text-sm font-semibold text-white transition hover:from-red-800 hover:to-red-700 disabled:opacity-60 disabled:cursor-not-allowed shadow-md">
								{isResetting
									? "Sending..."
									: resetSuccess
										? "Email Sent!"
										: "Send Reset Link"}
							</button>
						</div>
					</div>
				)}
			</div>
		</div>
	);
}
