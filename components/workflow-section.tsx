import { WORKFLOW_STEPS } from "@/content/marketing/home";

export function WorkflowSection() {
  return (
    <section id="workflow" className="px-6 py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-display text-center text-3xl font-semibold tracking-tight text-foreground">
          A rep&apos;s full day, one flow
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-base text-muted-foreground">
          From map to inbox to close — context stays with the client.
        </p>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {WORKFLOW_STEPS.map((step, index) => (
            <div
              key={step.id}
              className="rounded-xl border border-border bg-background p-5"
            >
              <span className="text-xs font-medium text-accent">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-2 text-base font-semibold text-foreground">
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
