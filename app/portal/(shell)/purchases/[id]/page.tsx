import { notFound } from "next/navigation";
import Link from "next/link";
import { Panel } from "@/components/ui/Panel";
import Button from "@/components/ui/Button";
import { PurchaseStatusBadge, PaymentStatusBadge } from "@/components/ui/StatusBadge";
import { getPurchase, getSupplier, getProduct, lineTotal } from "@/lib/demo-data";

export default function PurchaseDetailPage({ params }: { params: { id: string } }) {
  const purchase = getPurchase(params.id);
  if (!purchase) return notFound();

  const supplier = getSupplier(purchase.supplierId);
  const total = purchase.items.reduce((sum, i) => sum + lineTotal(i.quantity, i.cost), 0);

  return (
    <div>
      <div className="text-[13.5px] text-ink-muted mb-2.5">
        <Link href={`/portal/suppliers/${supplier?.id}`} className="font-bold text-navy">{supplier?.name}</Link>{" "}
        / {purchase.code}
      </div>
      <div className="flex justify-between items-start mb-6 flex-wrap gap-4">
        <div>
          <h1 className="font-display text-[26px] text-navy font-semibold mb-1.5">{purchase.code}</h1>
          <div className="text-ink-muted text-[15px]">{supplier?.name} · Ordered {purchase.orderDate}</div>
        </div>
        <div className="flex gap-2">
          <PurchaseStatusBadge status={purchase.status} />
          <PaymentStatusBadge status={purchase.paymentStatus} />
        </div>
      </div>

      <div className="grid grid-cols-[1.4fr_1fr] gap-5 max-[980px]:grid-cols-1">
        <div>
          <Panel title="Items">
            <table className="w-full border-collapse text-[14.5px]">
              <thead>
                <tr>
                  {["Product", "Qty", "Cost", "Line Total"].map((h) => (
                    <th key={h} className="text-left text-xs uppercase tracking-wide text-ink-faint font-bold border-b-[1.5px] border-border py-2.5 px-2">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {purchase.items.map((item) => {
                  const product = getProduct(item.productId);
                  return (
                    <tr key={item.productId}>
                      <td className="py-3 px-2 border-b border-border-soft">
                        <div className="font-semibold text-navy">{product?.name}</div>
                        <div className="text-xs text-ink-faint">{product?.partNumber}</div>
                      </td>
                      <td className="py-3 px-2 border-b border-border-soft">{item.quantity}</td>
                      <td className="py-3 px-2 border-b border-border-soft">₹ {item.cost.toLocaleString("en-IN")}</td>
                      <td className="py-3 px-2 border-b border-border-soft font-semibold text-navy">₹ {lineTotal(item.quantity, item.cost).toLocaleString("en-IN")}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <div className="flex justify-end pt-4 mt-1 border-t border-border-soft">
              <div className="text-right">
                <div className="text-xs text-ink-faint mb-1">Total Cost</div>
                <div className="font-bold text-navy text-[18px]">₹ {total.toLocaleString("en-IN")}</div>
              </div>
            </div>
          </Panel>
          <Panel title="Notes">
            <p className="text-[14.5px] text-ink leading-relaxed">{purchase.notes}</p>
          </Panel>
        </div>
        <div>
          <Panel title="Actions">
            <div className="flex flex-col gap-2.5">
              <Button fullWidth>Record Payment</Button>
              <Button fullWidth variant="secondary">Mark as Received</Button>
              <Button fullWidth variant="ghost">Download Purchase Order</Button>
            </div>
          </Panel>
        </div>
      </div>
    </div>
  );
}
