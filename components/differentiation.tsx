import { CLEFMARK_ASSISTANT } from "@/lib/copy";

const POINTS = [
  {
    title: "Custom dashboard",
    body: "Every rep sees what matters today — tasks, follow-ups, and territory work in one tailored view.",
  },
  {
    title: CLEFMARK_ASSISTANT,
    body: "A smart, customized companion for conversations and automation — grounded in your business, not generic templates.",
  },
  {
    title: "Map-first",
    body: "Territory is where work starts, not an add-on.",
  },
  {
    title: "One inbox",
    body: "Email and SMS tied to the client, not a separate tool.",
  },
] as const;

export function Differentiation() {
  return (
    <section id="why" className="border-t border-border bg-muted px-6 py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-display text-center text-3xl font-semibold tracking-tight text-foreground">
          Why Clefmark
        </h2>
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {POINTS.map((point) => (
            <div key={point.title} className="rounded-xl bg-background p-6">
              <h3 className="text-base font-semibold text-foreground">
                {point.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                {point.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
