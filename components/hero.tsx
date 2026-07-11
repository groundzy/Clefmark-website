import { CtaButton } from "@/components/cta-button";
import { ProductMock } from "@/components/product-mock";
import { HERO } from "@/content/marketing/home";
import { MARKETING_ROUTES } from "@/content/marketing/routes";
import { appLoginUrl, appSignupUrl } from "@/lib/app-url";

export function Hero() {
  return (
    <section id="top" className="px-6 pb-16 pt-12 md:pb-24 md:pt-20">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="font-display text-5xl font-semibold tracking-tight text-foreground md:text-6xl md:leading-[1.05]">
            {HERO.headline}
          </h1>
          <p className="mt-6 text-lg leading-7 text-muted-foreground md:text-xl">
            {HERO.subhead}
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <CtaButton
              href={appSignupUrl("starter", { campaign: "hero" })}
              trackEventName="cta_signup_click"
              trackParams={{ plan: "starter", location: "hero" }}
            >
              Start 14-day trial
            </CtaButton>
            <CtaButton
              href={MARKETING_ROUTES.features}
              variant="outline"
              trackEventName="nav_click"
              trackParams={{ location: "hero_features" }}
            >
              See features
            </CtaButton>
            <CtaButton
              href={appLoginUrl()}
              variant="outline"
              trackEventName="cta_signin_click"
              trackParams={{ location: "hero" }}
            >
              Sign in
            </CtaButton>
          </div>
        </div>
        <div className="mt-12 md:mt-16">
          <ProductMock />
        </div>
      </div>
    </section>
  );
}
