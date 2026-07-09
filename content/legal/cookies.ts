import type { LegalSection } from "@/content/legal/types";

export const cookiesSections: LegalSection[] = [
  {
    id: "overview",
    title: "Overview",
    paragraphs: [
      "This Cookie Policy explains how Clefmark uses cookies and similar technologies on clefmark.com and app.clefmark.com.",
      "Essential cookies keep the product working (for example, your sign-in session on app.clefmark.com). Optional analytics cookies help us understand aggregate usage when you accept them.",
    ],
  },
  {
    id: "essential",
    title: "Essential cookies",
    paragraphs: [
      "On app.clefmark.com, Clefmark sets a session cookie when you sign in so you stay authenticated. These cookies are required for the Service and are not used for advertising.",
      "Your cookie preference for analytics is stored locally in your browser when you accept or reject optional analytics on either site.",
    ],
  },
  {
    id: "analytics",
    title: "Analytics cookies",
    paragraphs: [
      "When you accept analytics cookies, Clefmark uses Google Analytics 4 to collect aggregate information such as pages viewed, button clicks, and signup step progress.",
      "Google Analytics may set cookies including _ga and _ga_* to distinguish sessions. We configure analytics not to send personal information such as email addresses or client names.",
      "Analytics cookies are optional. If you reject them, we do not load Google Analytics on that site.",
    ],
  },
  {
    id: "retention",
    title: "Retention",
    paragraphs: [
      "Session cookies expire when you sign out or after a limited period of inactivity.",
      "Google Analytics cookies typically expire after up to two years, per Google's policies. See Google's documentation for current retention details.",
    ],
  },
  {
    id: "choices",
    title: "Your choices",
    paragraphs: [
      "Use the cookie banner on your first visit to accept or reject optional analytics cookies.",
      "You can reopen cookie preferences from the footer on clefmark.com at any time.",
      "On app.clefmark.com, use the cookie banner when shown, or clear site data in your browser to reset your choice.",
      "You can also block cookies through your browser settings, though some product features may not work if essential cookies are blocked.",
    ],
  },
];
