import { CLEFMARK_ASSISTANT } from "@/lib/copy";

export function ProductMock() {
  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-surface-card shadow-sm">
      <div className="grid gap-px bg-border md:grid-cols-3">
        {/* Dashboard panel — hero feature */}
        <div className="bg-background p-5 md:order-2 md:ring-1 md:ring-accent/20">
          <p className="mb-3 text-xs font-medium text-accent">Dashboard</p>
          <p className="mb-3 text-sm font-semibold text-foreground">Good morning, Alex</p>
          <p className="mb-2 text-xs font-medium text-foreground">Needs your attention</p>
          <div className="space-y-2">
            <AttentionRow label="Harbor Supply Co." detail="Reply waiting — email" />
            <AttentionRow label="Metro Equipment" detail="Playbook step due today" />
          </div>
          <p className="mb-2 mt-4 text-xs font-medium text-muted-foreground">Today</p>
          <div className="space-y-1.5 text-xs text-muted-foreground">
            <div className="flex items-center gap-2">
              <span className="size-1.5 rounded-full bg-badge-emerald" />
              Walkthrough — 2:00 PM
            </div>
            <div className="flex items-center gap-2">
              <span className="size-1.5 rounded-full bg-border" />
              3 open tasks
            </div>
          </div>
        </div>

        {/* Explore panel */}
        <div className="bg-background p-5 md:order-1">
          <p className="mb-3 text-xs font-medium text-muted-foreground">Explore</p>
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-[var(--clefmark-accent-soft)]">
            <div
              className="absolute inset-0 opacity-30"
              style={{
                backgroundImage:
                  "linear-gradient(#e5e7eb 1px, transparent 1px), linear-gradient(90deg, #e5e7eb 1px, transparent 1px)",
                backgroundSize: "24px 24px",
              }}
            />
            <div className="absolute left-[30%] top-[35%] size-3 rounded-full bg-accent shadow-[0_0_0_4px_var(--clefmark-accent-soft)]" />
            <div className="absolute left-[55%] top-[50%] size-3 rounded-full bg-accent shadow-[0_0_0_4px_var(--clefmark-accent-soft)]" />
            <div className="absolute left-[42%] top-[62%] size-3 rounded-full bg-accent shadow-[0_0_0_4px_var(--clefmark-accent-soft)]" />
          </div>
        </div>

        {/* Clefmark assistant panel */}
        <div className="bg-background p-5 md:order-3">
          <p className="mb-3 text-xs font-medium text-muted-foreground">
            {CLEFMARK_ASSISTANT}
          </p>
          <div className="rounded-lg border border-border bg-muted/50 p-3">
            <p className="text-xs font-medium text-foreground">Suggested draft</p>
            <p className="mt-2 text-xs leading-5 text-muted-foreground">
              Hi Jordan — does Tuesday at 2 work for a quick walkthrough? Happy to
              bring samples.
            </p>
            <p className="mt-2 text-[10px] text-muted-foreground">
              From your library · Harbor Supply Co.
            </p>
          </div>
          <div className="mt-2 rounded-lg border border-dashed border-border px-3 py-2 text-xs text-muted-foreground">
            Scheduled outreach · intro sequence · step 2 tomorrow
          </div>
        </div>
      </div>
    </div>
  );
}

function AttentionRow({ label, detail }: { label: string; detail: string }) {
  return (
    <div className="rounded-lg border border-accent/20 bg-[var(--clefmark-accent-soft)]/40 px-3 py-2">
      <p className="text-xs font-medium text-foreground">{label}</p>
      <p className="text-[10px] text-muted-foreground">{detail}</p>
    </div>
  );
}
