import { CtaButton } from "@/components/cta-button";
import { ProductMock } from "@/components/product-mock";
import { appLoginUrl, appSignupUrl } from "@/lib/app-url";

export function Hero() {
  return (
    <section id="top" className="px-6 pb-16 pt-12 md:pb-24 md:pt-20">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="font-display text-5xl font-semibold tracking-tight text-foreground md:text-6xl md:leading-[1.05]">
            Territory sales, tied together.
          </h1>
          <p className="mt-6 text-lg leading-7 text-muted-foreground md:text-xl">
            Map, clients, inbox, and playbooks in one place for field B2B teams.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <CtaButton href={appSignupUrl("team")}>Start 14-day trial</CtaButton>
            <CtaButton href={appLoginUrl()} variant="outline">
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
