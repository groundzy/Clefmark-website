export function getAppUrl(): string {
  return (process.env.NEXT_PUBLIC_APP_URL ?? "https://app.clefmark.com").replace(
    /\/$/,
    "",
  );
}

export function appSignupUrl(plan = "team"): string {
  return `${getAppUrl()}/signup?plan=${plan}`;
}

export function appLoginUrl(): string {
  return `${getAppUrl()}/login`;
}
