import Link from "next/link";
import { Panel } from "@/components/ui/Panel";
import Button from "@/components/ui/Button";
import { PurchaseStatusBadge, PaymentStatusBadge } from "@/components/ui/StatusBadge";
import { purchases, getSupplier, lineTotal } from "@/lib/demo-data";

export default function PurchasesPage() {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="font-display text-2xl text-navy font-semibold">Purchases</h1>
        <Button>New Purchase Order</Button>
      </div>
      <Panel title={`All Purchases (${purchases.length})`}>
        <table className="w-full border-collapse text-[14.5px]">
          <thead>
            <tr>
              {["Purchase Order", "Supplier", "Amount", "Status", "Payment"].map((h) => (
                <th key={h} className="text-left text-xs uppercase tracking-wide text-ink-faint font-bold border-b-[1.5px] border-border py-2.5 px-2">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {purchases.map((p) => {
              const supplier = getSupplier(p.supplierId);
              const total = p.items.reduce((sum, i) => sum + lineTotal(i.quantity, i.cost), 0);
              return (
                <tr key={p.id}>
                  <td className="py-3.5 px-2 border-b border-border-soft">
                    <Link href={`/portal/purchases/${p.id}`} className="font-semibold text-navy">{p.code}</Link>
                    <div className="text-xs text-ink-faint">{p.orderDate}</div>
                  </td>
                  <td className="py-3.5 px-2 border-b border-border-soft">{supplier?.name}</td>
                  <td className="py-3.5 px-2 border-b border-border-soft">₹ {total.toLocaleString("en-IN")}</td>
                  <td className="py-3.5 px-2 border-b border-border-soft"><PurchaseStatusBadge status={p.status} /></td>
                  <td className="py-3.5 px-2 border-b border-border-soft"><PaymentStatusBadge status={p.paymentStatus} /></td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </Panel>
    </div>
  );
}
