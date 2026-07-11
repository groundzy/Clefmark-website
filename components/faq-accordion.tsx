"use client";

import { useState } from "react";

import type { FaqItem } from "@/content/marketing/faq";
import { trackEvent } from "@/lib/analytics/track";
import { cn } from "@/lib/utils";

type FaqAccordionProps = {
  items: readonly FaqItem[];
  className?: string;
};

export function FaqAccordion({ items, className }: FaqAccordionProps) {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <div className={cn("space-y-2", className)}>
      {items.map((item) => {
        const isOpen = openId === item.id;
        return (
          <div key={item.id} className="rounded-xl border border-border bg-background">
            <button
              type="button"
              onClick={() => {
                const next = isOpen ? null : item.id;
                setOpenId(next);
                if (next) {
                  trackEvent("faq_expand", { question_id: item.id });
                }
              }}
              className="flex w-full items-center justify-between px-5 py-4 text-left text-sm font-medium text-foreground"
              aria-expanded={isOpen}
            >
              {item.question}
              <span className="ml-4 text-muted-foreground">{isOpen ? "−" : "+"}</span>
            </button>
            {isOpen ? (
              <p className="border-t border-border px-5 py-4 text-sm leading-6 text-muted-foreground">
                {item.answer}
              </p>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
