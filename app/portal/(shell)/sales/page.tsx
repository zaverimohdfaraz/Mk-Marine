import Link from "next/link";
import { Panel } from "@/components/ui/Panel";
import { SaleStatusBadge, PaymentStatusBadge } from "@/components/ui/StatusBadge";
import { sales, getClient, getVessel, lineTotal } from "@/lib/demo-data";

export default function SalesPage() {
  return (
    <div>
      <h1 className="font-display text-2xl text-navy font-semibold mb-6">Sales</h1>
      <Panel title={`All Sales (${sales.length})`}>
        <table className="w-full border-collapse text-[14.5px]">
          <thead>
            <tr>
              {["Sale", "Client / Vessel", "Amount", "Sale Status", "Payment"].map((h) => (
                <th key={h} className="text-left text-xs uppercase tracking-wide text-ink-faint font-bold border-b-[1.5px] border-border py-2.5 px-2">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {sales.map((s) => {
              const client = getClient(s.clientId);
              const vessel = getVessel(s.vesselId);
              const total = s.items.reduce((sum, i) => sum + lineTotal(i.quantity, i.sellingPrice), 0);
              return (
                <tr key={s.id}>
                  <td className="py-3.5 px-2 border-b border-border-soft">
                    <Link href={`/portal/sales/${s.id}`} className="font-semibold text-navy">{s.code}</Link>
                  </td>
                  <td className="py-3.5 px-2 border-b border-border-soft">
                    <div className="font-medium text-navy">{client?.name}</div>
                    <div className="text-xs text-ink-faint">{vessel?.name}</div>
                  </td>
                  <td className="py-3.5 px-2 border-b border-border-soft">₹ {total.toLocaleString("en-IN")}</td>
                  <td className="py-3.5 px-2 border-b border-border-soft"><SaleStatusBadge status={s.saleStatus} /></td>
                  <td className="py-3.5 px-2 border-b border-border-soft"><PaymentStatusBadge status={s.paymentStatus} /></td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </Panel>
    </div>
  );
}
