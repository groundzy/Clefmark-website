import { MarketingFooter } from "@/components/marketing-footer";
import { MarketingHeader } from "@/components/marketing-header";

type LegalPageLayoutProps = {
  children: React.ReactNode;
};

export function LegalPageLayout({ children }: LegalPageLayoutProps) {
  return (
    <>
      <MarketingHeader />
      <main className="flex-1 px-6 py-16">{children}</main>
      <MarketingFooter />
    </>
  );
}
