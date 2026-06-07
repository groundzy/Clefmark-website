const INDUSTRIES = [
  "Commercial services",
  "Distribution",
  "Equipment",
  "Franchise development",
  "Vertical SaaS",
] as const;

export function TrustSection() {
  return (
    <section id="built-for" className="px-6 py-16 md:py-24">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground">
          Built for teams selling to local businesses.
        </h2>
        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {INDUSTRIES.map((industry) => (
            <span
              key={industry}
              className="rounded-full border border-border bg-muted px-4 py-2 text-sm text-foreground"
            >
              {industry}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
