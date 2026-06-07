import { cn } from "@/lib/utils";

type CtaButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "outline";
  className?: string;
};

export function CtaButton({
  href,
  children,
  variant = "primary",
  className,
}: CtaButtonProps) {
  return (
    <a
      href={href}
      className={cn(
        "inline-flex min-h-11 items-center justify-center rounded-lg px-6 text-sm font-medium transition-colors",
        variant === "primary" &&
          "bg-primary text-primary-foreground hover:bg-[#242424]",
        variant === "outline" &&
          "border border-border bg-background text-foreground hover:bg-muted",
        className,
      )}
    >
      {children}
    </a>
  );
}
