export type MarketingEventParams = {
  plan?: string;
  location?: string;
  section_id?: string;
  question_id?: string;
  percent?: number;
  destination?: string;
};

const FORBIDDEN_PARAM_KEYS = new Set([
  "email",
  "name",
  "phone",
  "address",
  "query",
  "message",
  "body",
  "subject",
]);

export function sanitizeEventParams(
  params?: MarketingEventParams,
): Record<string, string | number | boolean> | undefined {
  if (!params) {
    return undefined;
  }

  const sanitized: Record<string, string | number | boolean> = {};
  for (const [key, value] of Object.entries(params)) {
    if (value === undefined || FORBIDDEN_PARAM_KEYS.has(key)) {
      continue;
    }
    if (
      typeof value === "string" ||
      typeof value === "number" ||
      typeof value === "boolean"
    ) {
      sanitized[key] = value;
    }
  }

  return Object.keys(sanitized).length > 0 ? sanitized : undefined;
}
