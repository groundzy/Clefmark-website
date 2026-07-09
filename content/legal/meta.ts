/** Flip to false after legal review and before publish. */
export const LEGAL_DRAFT_MODE = true;

export const LEGAL_ENTITY = "Clefmark, Inc.";
export const LEGAL_CONTACT_EMAIL = "hello@clefmark.com";
export const LEGAL_EFFECTIVE_DATE = "June 6, 2026";
export const LEGAL_GOVERNING_LAW = "State of Delaware, United States";

/** REVIEW: Add registered mailing address before publish. */
export const LEGAL_MAILING_ADDRESS: string | null = null;

export const LEGAL_ROUTES = {
  privacy: "/legal/privacy",
  terms: "/legal/terms",
  cookies: "/legal/cookies",
} as const;
