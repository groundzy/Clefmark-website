export function getAppUrl(): string {
  return (process.env.NEXT_PUBLIC_APP_URL ?? "https://app.clefmark.com").replace(
    /\/$/,
    "",
  );
}

export type SignupUrlOptions = {
  plan?: string;
  campaign?: string;
};

const VALID_PLANS = new Set(["starter", "team", "growth", "scale"]);

export function normalizePlanId(plan?: string): string {
  if (plan && VALID_PLANS.has(plan)) {
    return plan;
  }
  return "starter";
}

export function getStoredUtmParams(): Record<string, string> {
  if (typeof window === "undefined") {
    return {};
  }
  try {
    const raw = window.sessionStorage.getItem("clefmark_utm");
    if (!raw) {
      return {};
    }
    const parsed = JSON.parse(raw) as Record<string, string>;
    return parsed;
  } catch {
    return {};
  }
}

export function storeUtmParamsFromUrl(): void {
  if (typeof window === "undefined") {
    return;
  }
  const params = new URLSearchParams(window.location.search);
  const utm: Record<string, string> = {};
  for (const key of ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"]) {
    const value = params.get(key);
    if (value) {
      utm[key] = value.slice(0, 100);
    }
  }
  if (Object.keys(utm).length > 0) {
    try {
      window.sessionStorage.setItem("clefmark_utm", JSON.stringify(utm));
    } catch {
      // sessionStorage unavailable
    }
  }
}

export function appSignupUrl(
  plan = "starter",
  options?: SignupUrlOptions,
): string {
  const normalizedPlan = normalizePlanId(plan);
  const url = new URL(`${getAppUrl()}/signup`);
  url.searchParams.set("plan", normalizedPlan);

  const campaign = options?.campaign;
  if (campaign) {
    url.searchParams.set("utm_source", "clefmark");
    url.searchParams.set("utm_medium", "website");
    url.searchParams.set("utm_campaign", campaign);
  }

  if (typeof window !== "undefined") {
    const stored = getStoredUtmParams();
    for (const [key, value] of Object.entries(stored)) {
      if (!url.searchParams.has(key)) {
        url.searchParams.set(key, value);
      }
    }
  }

  return url.toString();
}

export function appLoginUrl(): string {
  return `${getAppUrl()}/login`;
}
