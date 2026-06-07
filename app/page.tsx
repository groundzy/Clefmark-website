import { Differentiation } from "@/components/differentiation";
import { EmpathySection } from "@/components/empathy-section";
import { Hero } from "@/components/hero";
import { HowItWorks } from "@/components/how-it-works";
import { MarketingFooter } from "@/components/marketing-footer";
import { MarketingHeader } from "@/components/marketing-header";
import { TrialCta } from "@/components/trial-cta";
import { TrustSection } from "@/components/trust-section";

export default function Home() {
  return (
    <>
      <MarketingHeader />
      <main className="flex-1">
        <Hero />
        <EmpathySection />
        <HowItWorks />
        <Differentiation />
        <TrustSection />
        <TrialCta />
      </main>
      <MarketingFooter />
    </>
  );
}
