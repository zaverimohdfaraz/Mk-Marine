import Link from "next/link";
import { Panel } from "@/components/ui/Panel";
import { QuotationStatusBadge } from "@/components/ui/StatusBadge";
import { quotations, getClient, getVessel, lineTotal } from "@/lib/demo-data";

export default function QuotationsPage() {
  return (
    <div>
      <h1 className="font-display text-2xl text-navy font-semibold mb-6">Quotations</h1>

      <Panel title={`All Quotations (${quotations.length})`}>
        <table className="w-full border-collapse text-[14.5px]">
          <thead>
            <tr>
              {["Quotation", "Client / Vessel", "Amount", "Status"].map((h) => (
                <th key={h} className="text-left text-xs uppercase tracking-wide text-ink-faint font-bold border-b-[1.5px] border-border py-2.5 px-2">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {quotations.map((q) => {
              const client = getClient(q.clientId);
              const vessel = getVessel(q.vesselId);
              const total = q.items.reduce((sum, i) => sum + lineTotal(i.quantity, i.sellingPrice), 0);
              return (
                <tr key={q.id}>
                  <td className="py-3.5 px-2 border-b border-border-soft">
                    <Link href={`/portal/quotations/${q.id}`} className="font-semibold text-navy">
                      {q.code}
                    </Link>
                  </td>
                  <td className="py-3.5 px-2 border-b border-border-soft">
                    <div className="font-medium text-navy">{client?.name}</div>
                    <div className="text-xs text-ink-faint">{vessel?.name}</div>
                  </td>
                  <td className="py-3.5 px-2 border-b border-border-soft">₹ {total.toLocaleString("en-IN")}</td>
                  <td className="py-3.5 px-2 border-b border-border-soft">
                    <QuotationStatusBadge status={q.status} />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </Panel>
    </div>
  );
}
