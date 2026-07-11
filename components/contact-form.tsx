"use client";

import { useState } from "react";

import { trackEvent } from "@/lib/analytics/track";

const REP_COUNTS = ["1", "2–5", "6–10", "11–25", "26+"] as const;

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          company: formData.get("company"),
          repCount: formData.get("repCount"),
          message: formData.get("message"),
          website: formData.get("website"),
        }),
      });

      if (!response.ok) {
        const data = (await response.json()) as { error?: string };
        throw new Error(data.error ?? "Something went wrong.");
      }

      trackEvent("cta_demo_click", { location: "contact_form" });
      setStatus("success");
      form.reset();
    } catch (error) {
      setStatus("error");
      setErrorMessage(error instanceof Error ? error.message : "Something went wrong.");
    }
  }

  if (status === "success") {
    return (
      <p className="rounded-xl border border-border bg-muted px-6 py-8 text-center text-foreground">
        Thanks — we&apos;ll be in touch soon.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-foreground">
          Name
        </label>
        <input
          id="name"
          name="name"
          required
          className="mt-1 w-full rounded-lg border border-border bg-background px-4 py-3 text-sm"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-foreground">
          Work email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="mt-1 w-full rounded-lg border border-border bg-background px-4 py-3 text-sm"
        />
      </div>
      <div>
        <label htmlFor="company" className="block text-sm font-medium text-foreground">
          Company
        </label>
        <input
          id="company"
          name="company"
          required
          className="mt-1 w-full rounded-lg border border-border bg-background px-4 py-3 text-sm"
        />
      </div>
      <div>
        <label htmlFor="repCount" className="block text-sm font-medium text-foreground">
          Rep count
        </label>
        <select
          id="repCount"
          name="repCount"
          required
          className="mt-1 w-full rounded-lg border border-border bg-background px-4 py-3 text-sm"
        >
          <option value="">Select</option>
          {REP_COUNTS.map((count) => (
            <option key={count} value={count}>
              {count}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-foreground">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="mt-1 w-full rounded-lg border border-border bg-background px-4 py-3 text-sm"
        />
      </div>
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden
      />
      {status === "error" ? (
        <p className="text-sm text-red-600">{errorMessage}</p>
      ) : null}
      <button
        type="submit"
        disabled={status === "loading"}
        className="inline-flex min-h-11 items-center justify-center rounded-lg bg-primary px-6 text-sm font-medium text-primary-foreground hover:bg-[#242424] disabled:opacity-50"
      >
        {status === "loading" ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}
