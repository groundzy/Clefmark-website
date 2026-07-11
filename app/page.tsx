import { ComparisonTable } from "@/components/comparison-table";
import { EmpathySection } from "@/components/empathy-section";
import { Hero } from "@/components/hero";
import { MarketingFooter } from "@/components/marketing-footer";
import { MarketingHeader } from "@/components/marketing-header";
import { PillarGrid } from "@/components/pillar-grid";
import { PricingTeaser } from "@/components/pricing-teaser";
import { TrialCta } from "@/components/trial-cta";
import { TrustSection } from "@/components/trust-section";
import { WorkflowSection } from "@/components/workflow-section";
import { SEO_PAGES } from "@/content/marketing/seo";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata = createPageMetadata(SEO_PAGES.home);

export default function Home() {
  return (
    <>
      <MarketingHeader />
      <main className="flex-1">
        <Hero />
        <EmpathySection />
        <WorkflowSection />
        <PillarGrid />
        <ComparisonTable />
        <TrustSection />
        <PricingTeaser />
        <TrialCta />
      </main>
      <MarketingFooter />
    </>
  );
}
