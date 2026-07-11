"use client";

import { CtaButton } from "@/components/cta-button";
import { PRICING_TIERS } from "@/content/marketing/pricing";
import { appSignupUrl } from "@/lib/app-url";
import { cn } from "@/lib/utils";

type PricingCardsProps = {
  location?: string;
};

export function PricingCards({ location = "pricing" }: PricingCardsProps) {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      {PRICING_TIERS.map((tier) => (
        <div
          key={tier.planId}
          className={cn(
            "flex flex-col rounded-xl border border-border bg-background p-6",
            tier.highlight && "ring-2 ring-accent",
          )}
        >
          <h3 className="text-lg font-semibold text-foreground">{tier.name}</h3>
          <p className="mt-1 text-sm text-muted-foreground">{tier.seatCap}</p>
          <p className="mt-4">
            <span className="font-display text-3xl font-semibold text-foreground">
              ${tier.monthly}
            </span>
            <span className="text-sm text-muted-foreground">/mo</span>
          </p>
          <p className="mt-1 text-xs text-muted-foreground">
            ${tier.yearly}/yr (2 months free)
          </p>
          <p className="mt-4 flex-1 text-sm leading-6 text-muted-foreground">
            {tier.description}
          </p>
          <div className="mt-6">
            <CtaButton
              href={appSignupUrl(tier.planId, { campaign: `pricing_${tier.planId}` })}
              trackEventName="pricing_plan_click"
              trackParams={{ plan: tier.planId, location }}
              className="w-full"
            >
              Start trial
            </CtaButton>
          </div>
        </div>
      ))}
    </div>
  );
}
