import { CLEFMARK_ASSISTANT } from "@/lib/copy";

const STEPS = [
  {
    number: "1",
    title: "Discover",
    body: "Search the map and list — Google, Apple, Yelp — and save places to clients.",
  },
  {
    number: "2",
    title: "Your dashboard",
    body: "A custom view of tasks, follow-ups, and what needs your attention — built for how your team sells.",
  },
  {
    number: "3",
    title: CLEFMARK_ASSISTANT,
    body: "Your conversation and automation companion — drafts, sequences, and outreach grounded in your library and rules.",
  },
] as const;

export function HowItWorks() {
  return (
    <section id="how" className="px-6 py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-display text-center text-3xl font-semibold tracking-tight text-foreground">
          How it works
        </h2>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {STEPS.map((step) => (
            <div
              key={step.number}
              className="rounded-xl border border-border bg-background p-6"
            >
              <span className="inline-flex size-8 items-center justify-center rounded-lg bg-[var(--clefmark-accent-soft)] text-sm font-semibold text-accent">
                {step.number}
              </span>
              <h3 className="mt-4 text-lg font-semibold text-foreground">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                {step.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
