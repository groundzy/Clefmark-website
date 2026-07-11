import { EMPATHY } from "@/content/marketing/home";

export function EmpathySection() {
  return (
    <section id="story" className="border-t border-border bg-muted px-6 py-16 md:py-24">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground">
          {EMPATHY.headline}
        </h2>
        <p className="mt-6 text-base leading-7 text-muted-foreground md:text-lg">
          {EMPATHY.body}
        </p>
      </div>
    </section>
  );
}
