import { MarketingFooter } from "@/components/marketing-footer";
import { MarketingHeader } from "@/components/marketing-header";

type MarketingPageLayoutProps = {
  children: React.ReactNode;
};

export function MarketingPageLayout({ children }: MarketingPageLayoutProps) {
  return (
    <>
      <MarketingHeader />
      <main className="flex-1">{children}</main>
      <MarketingFooter />
    </>
  );
}
