import { CtaButton } from "@/components/cta-button";
import { TRIAL_CTA } from "@/content/marketing/home";
import { appSignupUrl } from "@/lib/app-url";

export function TrialCta() {
  return (
    <section id="trial" className="border-t border-border bg-muted px-6 py-16 md:py-24">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground">
          {TRIAL_CTA.headline}
        </h2>
        <p className="mt-4 text-base leading-7 text-muted-foreground">
          {TRIAL_CTA.body}
        </p>
        <div className="mt-8">
          <CtaButton
            href={appSignupUrl("starter", { campaign: "trial" })}
            trackEventName="cta_signup_click"
            trackParams={{ plan: "starter", location: "trial" }}
          >
            Start 14-day trial
          </CtaButton>
        </div>
      </div>
    </section>
  );
}
