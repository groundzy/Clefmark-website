import { subprocessors } from "@/content/legal/subprocessors";

export function SubprocessorTable() {
  return (
    <div className="mt-4 overflow-x-auto rounded-lg border border-border">
      <table className="w-full min-w-[640px] text-left text-sm">
        <thead>
          <tr className="border-b border-border bg-muted/50">
            <th scope="col" className="px-4 py-3 font-semibold text-foreground">
              Provider
            </th>
            <th scope="col" className="px-4 py-3 font-semibold text-foreground">
              Purpose
            </th>
            <th scope="col" className="px-4 py-3 font-semibold text-foreground">
              Location
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-border">
          {subprocessors.map((row) => (
            <tr key={row.provider} className="text-muted-foreground">
              <td className="px-4 py-3 align-top font-medium text-foreground">
                {row.provider}
              </td>
              <td className="px-4 py-3 align-top">{row.purpose}</td>
              <td className="px-4 py-3 align-top">{row.location}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
