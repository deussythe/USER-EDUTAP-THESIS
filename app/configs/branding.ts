import { doc, getDoc, onSnapshot } from "firebase/firestore";
import { db } from "@/configs/firebase";

export interface BrandingSettings {
	schoolName: string;
	canteenName: string;
	themeColor: string;
	logoUrl: string | null;
	faviconUrl: string | null;
	loginBgType: "color" | "image";
	loginBgColor: string;
	loginBgUrl: string | null;
}

const BRANDING_CACHE_KEY = "edutap_branding_cache_v1";
const BRANDING_STAFF_CACHE_KEY = "edutap_branding_staff_cache_v1";
const BRANDING_STUDENT_CACHE_KEY = "edutap_branding_student_cache_v1";
const BRANDING_ADMIN_CACHE_KEY = "edutap_branding_admin_cache_v1";

export const defaultBrandingSettings: BrandingSettings = {
	schoolName: "St. Clare College of Caloocan",
	canteenName: "EDUTAP",
	themeColor: "#7f1d1d",
	logoUrl: null,
	faviconUrl: null,
	loginBgType: "color",
	loginBgColor: "#7f1d1d",
	loginBgUrl: null,
};

function getCacheKey(tab?: "staff" | "student" | "admin"): string {
	if (tab === "staff") return BRANDING_STAFF_CACHE_KEY;
	if (tab === "student") return BRANDING_STUDENT_CACHE_KEY;
	if (tab === "admin") return BRANDING_ADMIN_CACHE_KEY;
	return BRANDING_CACHE_KEY;
}

export function readBrandingCache(tab?: "staff" | "student" | "admin"): BrandingSettings | null {
	if (typeof window === "undefined") return null;
	try {
		const rawValue = window.localStorage.getItem(getCacheKey(tab));
		if (!rawValue) return null;
		const parsed = JSON.parse(rawValue) as Partial<BrandingSettings>;
		return { ...defaultBrandingSettings, ...parsed };
	} catch (error) {
		console.error("Failed to read branding cache:", error);
		return null;
	}
}

export function writeBrandingCache(settings: BrandingSettings, tab?: "staff" | "student" | "admin") {
	if (typeof window === "undefined") return;
	try {
		window.localStorage.setItem(getCacheKey(tab), JSON.stringify(settings));
	} catch (error) {
		console.error("Failed to write branding cache:", error);
	}
}

export function applyFavicon(faviconUrl: string | null) {
	if (typeof document === "undefined" || !faviconUrl) return;
	let favicon = document.querySelector("link[rel='icon']") as HTMLLinkElement | null;
	if (!favicon) {
		favicon = document.createElement("link");
		favicon.rel = "icon";
		document.head.appendChild(favicon);
	}
	favicon.href = faviconUrl;
}

function mergeBrandingSettings(
	info: Partial<BrandingSettings> | Record<string, unknown>,
	branding: Partial<BrandingSettings> | Record<string, unknown>,
): BrandingSettings {
	return {
		schoolName: (info as Partial<BrandingSettings>).schoolName ?? defaultBrandingSettings.schoolName,
		canteenName: (info as Partial<BrandingSettings>).canteenName ?? defaultBrandingSettings.canteenName,
		themeColor:
			(branding as Partial<BrandingSettings>).themeColor ?? defaultBrandingSettings.themeColor,
		logoUrl: (branding as Partial<BrandingSettings>).logoUrl ?? defaultBrandingSettings.logoUrl,
		faviconUrl:
			(branding as Partial<BrandingSettings>).faviconUrl ?? defaultBrandingSettings.faviconUrl,
		loginBgType:
			(branding as Partial<BrandingSettings>).loginBgType ?? defaultBrandingSettings.loginBgType,
		loginBgColor:
			(branding as Partial<BrandingSettings>).loginBgColor ?? defaultBrandingSettings.loginBgColor,
		loginBgUrl:
			(branding as Partial<BrandingSettings>).loginBgUrl ?? defaultBrandingSettings.loginBgUrl,
	};
}

// Original shared fetch — still used as fallback
export async function fetchBrandingSettings(): Promise<BrandingSettings> {
	const [infoSnap, brandingSnap] = await Promise.all([
		getDoc(doc(db, "settings", "canteen_info")),
		getDoc(doc(db, "settings", "branding")),
	]);

	const info = infoSnap.exists() ? infoSnap.data() : {};
	const branding = brandingSnap.exists() ? brandingSnap.data() : {};

	const mergedSettings = mergeBrandingSettings(info, branding);

	writeBrandingCache(mergedSettings);
	return mergedSettings;
}

// Per-tab fetch — reads from settings/branding_staff, branding_student, branding_admin
// Falls back to the shared branding doc if the tab doc doesn't exist yet
export async function fetchBrandingSettingsForTab(
	tab: "staff" | "student" | "admin",
): Promise<BrandingSettings> {
	const tabSnap = await getDoc(doc(db, "settings", `branding_${tab}`));

	if (tabSnap.exists()) {
		const data = tabSnap.data();
		const settings = mergeBrandingSettings(data, data);
		writeBrandingCache(settings, tab);
		return settings;
	}

	// Fallback to shared branding
	const shared = await fetchBrandingSettings();
	writeBrandingCache(shared, tab);
	return shared;
}

export function subscribeToBrandingSettings(
	tab: "staff" | "student" | "admin",
	onChange: (settings: BrandingSettings) => void,
	onError?: (error: Error) => void,
) {
	let canteenInfo: Partial<BrandingSettings> = {};
	let tabBranding: Partial<BrandingSettings> | null = null;
	let sharedBranding: Partial<BrandingSettings> = {};

	const emitSettings = () => {
		const mergedSettings = mergeBrandingSettings(
			canteenInfo,
			tabBranding && Object.keys(tabBranding).length > 0 ? tabBranding : sharedBranding,
		);
		writeBrandingCache(mergedSettings, tab);
		onChange(mergedSettings);
	};

	const unsubscribeInfo = onSnapshot(
		doc(db, "settings", "canteen_info"),
		(snapshot) => {
			canteenInfo = snapshot.exists() ? (snapshot.data() as Partial<BrandingSettings>) : {};
			emitSettings();
		},
		(error) => {
			onError?.(error);
		},
	);

	const unsubscribeShared = onSnapshot(
		doc(db, "settings", "branding"),
		(snapshot) => {
			sharedBranding = snapshot.exists() ? (snapshot.data() as Partial<BrandingSettings>) : {};
			emitSettings();
		},
		(error) => {
			onError?.(error);
		},
	);

	const unsubscribeTab = onSnapshot(
		doc(db, "settings", `branding_${tab}`),
		(snapshot) => {
			tabBranding = snapshot.exists() ? (snapshot.data() as Partial<BrandingSettings>) : null;
			emitSettings();
		},
		(error) => {
			onError?.(error);
		},
	);

	return () => {
		unsubscribeInfo();
		unsubscribeShared();
		unsubscribeTab();
	};
}
