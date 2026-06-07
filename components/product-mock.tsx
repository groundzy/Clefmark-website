export function ProductMock() {
  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-surface-card shadow-sm">
      <div className="grid gap-px bg-border md:grid-cols-3">
        {/* Explore panel */}
        <div className="bg-background p-5">
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
            <div className="absolute left-[68%] top-[28%] size-2 rounded-full bg-accent/60" />
          </div>
        </div>

        {/* Clients panel */}
        <div className="bg-background p-5">
          <p className="mb-3 text-xs font-medium text-muted-foreground">Clients</p>
          <p className="mb-3 text-sm font-medium text-foreground">Harbor Supply Co.</p>
          <div className="flex flex-wrap gap-1.5">
            <span className="rounded-full bg-badge-violet/20 px-2.5 py-1 text-xs font-medium text-foreground">
              First look
            </span>
            <span className="rounded-full bg-badge-pink/20 px-2.5 py-1 text-xs font-medium text-foreground">
              Good fit
            </span>
            <span className="rounded-full bg-badge-orange/20 px-2.5 py-1 text-xs font-medium text-foreground">
              Walkthrough
            </span>
            <span className="rounded-full bg-badge-blue/20 px-2.5 py-1 text-xs font-medium text-foreground">
              Offer out
            </span>
          </div>
          <div className="mt-4 space-y-2">
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <span className="size-1.5 rounded-full bg-badge-emerald" />
              Follow up — Tuesday
            </div>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <span className="size-1.5 rounded-full bg-border" />
              Send intro email
            </div>
          </div>
        </div>

        {/* Inbox panel */}
        <div className="bg-background p-5">
          <p className="mb-3 text-xs font-medium text-muted-foreground">Inbox</p>
          <div className="space-y-2">
            <InboxRow
              name="Harbor Supply Co."
              preview="Tuesday walkthrough?"
              channel="Email"
              unread
            />
            <InboxRow
              name="Metro Equipment"
              preview="Thanks — send the quote when ready"
              channel="SMS"
            />
            <InboxRow
              name="Westside Plumbing"
              preview="Re: service area expansion"
              channel="Email"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function InboxRow({
  name,
  preview,
  channel,
  unread,
}: {
  name: string;
  preview: string;
  channel: string;
  unread?: boolean;
}) {
  return (
    <div
      className={`rounded-lg border px-3 py-2 ${unread ? "border-accent/30 bg-[var(--clefmark-accent-soft)]/40" : "border-border bg-muted/50"}`}
    >
      <div className="flex items-center justify-between gap-2">
        <span className="truncate text-xs font-medium text-foreground">{name}</span>
        <span className="shrink-0 rounded bg-muted px-1.5 py-0.5 text-[10px] text-muted-foreground">
          {channel}
        </span>
      </div>
      <p className="mt-0.5 truncate text-xs text-muted-foreground">{preview}</p>
    </div>
  );
}
