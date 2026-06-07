import { CtaButton } from "@/components/cta-button";
import { appSignupUrl } from "@/lib/app-url";

export function TrialCta() {
  return (
    <section id="trial" className="border-t border-border bg-muted px-6 py-16 md:py-24">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground">
          Start with a 14-day trial.
        </h2>
        <p className="mt-4 text-base leading-7 text-muted-foreground">
          Plans from $29/mo for solo reps to teams up to 25 seats. Billing setup
          comes later.
        </p>
        <div className="mt-8">
          <CtaButton href={appSignupUrl("team")}>Start 14-day trial</CtaButton>
        </div>
      </div>
    </section>
  );
}
