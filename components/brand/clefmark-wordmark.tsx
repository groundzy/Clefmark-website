import { cn } from "@/lib/utils";

type ClefmarkWordmarkProps = {
  className?: string;
};

export function ClefmarkWordmark({ className }: ClefmarkWordmarkProps) {
  return (
    // eslint-disable-next-line @next/next/no-img-element -- brand SVG wordmark
    <img
      src="/logo.svg"
      alt="Clefmark"
      className={cn("h-[1em] w-auto", className)}
    />
  );
}
