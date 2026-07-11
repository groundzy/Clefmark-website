import { COMPARISON_ROWS } from "@/content/marketing/home";

export function ComparisonTable() {
  return (
    <section id="why" className="px-6 py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-display text-center text-3xl font-semibold tracking-tight text-foreground">
          Why Clefmark
        </h2>
        <div className="mt-12 overflow-x-auto">
          <table className="w-full min-w-[540px] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="pb-3 pr-4 font-semibold text-foreground">Category</th>
                <th className="pb-3 pr-4 font-semibold text-muted-foreground">Typical gap</th>
                <th className="pb-3 font-semibold text-foreground">Clefmark</th>
              </tr>
            </thead>
            <tbody>
              {COMPARISON_ROWS.map((row) => (
                <tr key={row.category} className="border-b border-border">
                  <td className="py-4 pr-4 font-medium text-foreground">
                    {row.category}
                  </td>
                  <td className="py-4 pr-4 text-muted-foreground">{row.gap}</td>
                  <td className="py-4 text-foreground">{row.clefmark}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
