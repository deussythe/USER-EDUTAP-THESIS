import { ChevronDown, Clock, LogOut, Settings, Share2, ShoppingBag } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import {
	applyFavicon,
	type BrandingSettings,
	fetchBrandingSettingsForTab,
	getBrandingIconUrl,
	readBrandingCache,
	subscribeToBrandingSettings,
} from "app/configs/branding";

interface ParentHeaderProps {
	username: string;
	currentTime: string;
	photoUrl?: string;
	gradeLevel?: string;
	balance?: number;
	lrn?: string;
	onShare: () => void;
	onLogout: () => void;
	onSettingsClick: () => void;
}

export function ParentHeader({
	username,
	currentTime,
	photoUrl,
	gradeLevel,
	balance,
	lrn,
	onShare,
	onLogout,
	onSettingsClick,
}: ParentHeaderProps) {
	const [dropdownOpen, setDropdownOpen] = useState(false);
	const dropdownRef = useRef<HTMLDivElement>(null);
	const [schoolName, setSchoolName] = useState("St. Clare College of Caloocan");
	const [canteenName, setCanteenName] = useState("EDUTAP");
	const [brandingIconUrl, setBrandingIconUrl] = useState<string | null>(null);

	useEffect(() => {
		const cachedBranding = readBrandingCache("student");
		if (cachedBranding) {
			applyBranding(cachedBranding);
		}

		const loadBranding = async () => {
			try {
				const branding = await fetchBrandingSettingsForTab("student");
				applyBranding(branding);
			} catch (error) {
				console.error("Failed to load branding:", error);
			}
		};

		void loadBranding();

		const unsubscribe = subscribeToBrandingSettings(
			"student",
			(branding) => {
				applyBranding(branding);
			},
			(error) => {
				console.error("Failed to subscribe to branding:", error);
			},
		);

		return unsubscribe;
	}, []);

	const applyBranding = (branding: BrandingSettings) => {
		setSchoolName(branding.schoolName);
		setCanteenName(branding.canteenName);
		setBrandingIconUrl(getBrandingIconUrl(branding));
		applyFavicon(branding.faviconUrl);
	};

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
				setDropdownOpen(false);
			}
		};

		document.addEventListener("mousedown", handleClickOutside);
		return () => document.removeEventListener("mousedown", handleClickOutside);
	}, []);

	return (
		<header className="relative z-50 border-b border-red-900 bg-gradient-to-r from-red-950 to-red-900 px-3 py-3 sm:px-4">
			<div className="flex items-center justify-between gap-2">
				<div className="flex min-w-0 flex-1 items-center gap-2">
					<div className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full border border-white/20 bg-white/10">
						{brandingIconUrl ? (
							<img
								src={brandingIconUrl}
								alt={`${canteenName} icon`}
								className="h-full w-full rounded-full object-cover"
							/>
						) : (
							<div className="flex h-full w-full items-center justify-center text-white">
								<ShoppingBag className="h-5 w-5" />
							</div>
						)}
					</div>
					<div className="min-w-0">
						<h1 className="text-sm font-semibold leading-tight text-white">
							{canteenName}
						</h1>
						<p className="hidden truncate text-xs text-red-100 sm:block">
							{schoolName}
						</p>
					</div>
				</div>

				<div className="flex shrink-0 items-center gap-1.5 sm:gap-3">
					<div className="hidden items-center gap-1 text-xs text-red-100 sm:flex">
						<Clock className="h-3 w-3" />
						<span className="font-mono">{currentTime}</span>
					</div>

					<button
						onClick={onShare}
						className="flex h-9 items-center justify-center gap-1 rounded-lg border border-white/20 bg-white/10 px-2 py-1.5 text-xs font-semibold text-white transition hover:bg-white/20 sm:h-auto">
						<Share2 className="h-3.5 w-3.5" />
						<span className="hidden sm:inline">Share</span>
					</button>

					<div className="hidden h-6 w-px bg-white/20 sm:block" />

					<div className="relative" ref={dropdownRef}>
						<button
							onClick={() => setDropdownOpen(!dropdownOpen)}
							className="flex h-9 items-center gap-2 rounded-lg px-1.5 py-1 transition hover:bg-white/10">
							<div className="relative">
								{photoUrl ? (
									<img
										src={photoUrl}
										alt={username}
										className="h-8 w-8 rounded-full border-2 border-white/40 object-cover ring-2 ring-white/20"
									/>
								) : (
									<div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white/40 bg-white/20">
										<span className="text-xs font-bold text-white">
											{username.charAt(0).toUpperCase()}
										</span>
									</div>
								)}
								<span className="absolute bottom-0 right-0 h-2 w-2 rounded-full border border-red-900 bg-green-400" />
							</div>

							<div className="hidden flex-col text-left leading-tight md:flex">
								<span className="text-xs font-semibold text-white">{username}</span>
								<span className="text-xs text-red-200">Student</span>
							</div>

							<ChevronDown
								className={`h-3.5 w-3.5 text-white/70 transition-transform duration-200 ${
									dropdownOpen ? "rotate-180" : ""
								}`}
							/>
						</button>

						{dropdownOpen && (
							<div className="absolute right-0 mt-2 w-[min(18rem,calc(100vw-1.5rem))] overflow-hidden rounded-xl border border-gray-100 bg-white shadow-2xl">
								<div className="flex items-center gap-3 border-b border-gray-100 bg-gradient-to-br from-red-50 to-white p-4">
									<div className="relative flex-shrink-0">
										{photoUrl ? (
											<img
												src={photoUrl}
												alt={username}
												className="h-14 w-14 rounded-full border-2 border-red-200 object-cover shadow-sm"
											/>
										) : (
											<div className="flex h-14 w-14 items-center justify-center rounded-full bg-red-100">
												<span className="text-xl font-bold text-red-900">
													{username.charAt(0).toUpperCase()}
												</span>
											</div>
										)}
										<span className="absolute bottom-0.5 right-0.5 h-3 w-3 rounded-full border-2 border-white bg-green-400" />
									</div>
									<div className="min-w-0 flex-1">
										<p className="truncate text-sm font-semibold text-gray-900">
											{username}
										</p>
										{lrn && (
											<p className="font-mono text-xs text-gray-400">{lrn}</p>
										)}
										{gradeLevel && (
											<p className="text-xs text-gray-500">{gradeLevel}</p>
										)}
										{balance !== undefined && (
											<p className="mt-0.5 text-xs font-bold text-red-700">
												PHP {balance.toFixed(2)}
											</p>
										)}
									</div>
								</div>

								<div className="py-1.5">
									<button
										onClick={() => {
											onSettingsClick();
											setDropdownOpen(false);
										}}
										className="flex w-full items-center gap-3 px-4 py-2.5 transition hover:bg-gray-50">
										<div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-gray-100">
											<Settings className="h-4 w-4 text-gray-600" />
										</div>
										<div className="text-left">
											<p className="text-sm font-medium text-gray-800">
												Settings
											</p>
											<p className="text-xs text-gray-400">
												Manage your account
											</p>
										</div>
									</button>

									<div className="mx-3 my-1 border-t border-gray-100" />

									<button
										onClick={() => {
											onLogout();
											setDropdownOpen(false);
										}}
										className="flex w-full items-center gap-3 px-4 py-2.5 transition hover:bg-red-50">
										<div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-red-50">
											<LogOut className="h-4 w-4 text-red-600" />
										</div>
										<div className="text-left">
											<p className="text-sm font-medium text-red-600">
												Log Out
											</p>
											<p className="text-xs text-red-300">
												See you next time!
											</p>
										</div>
									</button>
								</div>
							</div>
						)}
					</div>
				</div>
			</div>
		</header>
	);
}
