import Link from "next/link";

import { PILLARS } from "@/content/marketing/features";
import { MARKETING_ROUTES } from "@/content/marketing/routes";

export function PillarGrid() {
  return (
    <section id="pillars" className="border-t border-border bg-muted px-6 py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-display text-center text-3xl font-semibold tracking-tight text-foreground">
          Seven pillars for territory sales
        </h2>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PILLARS.map((pillar) => (
            <Link
              key={pillar.id}
              href={`${MARKETING_ROUTES.features}#${pillar.id}`}
              className="group rounded-xl bg-background p-6 transition-shadow hover:shadow-sm"
            >
              <h3 className="text-base font-semibold text-foreground group-hover:text-accent">
                {pillar.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                {pillar.summary}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
