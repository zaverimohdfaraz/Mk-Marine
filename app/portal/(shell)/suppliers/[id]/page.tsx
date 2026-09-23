import { notFound } from "next/navigation";
import Link from "next/link";
import { Panel } from "@/components/ui/Panel";
import { PurchaseStatusBadge, PaymentStatusBadge } from "@/components/ui/StatusBadge";
import { getSupplier, getProduct, purchases, lineTotal } from "@/lib/demo-data";

export default function SupplierDetailPage({ params }: { params: { id: string } }) {
  const supplier = getSupplier(params.id);
  if (!supplier) return notFound();

  const supplierPurchases = purchases.filter((p) => p.supplierId === supplier.id);

  return (
    <div>
      <h1 className="font-display text-2xl text-navy font-semibold mb-1">{supplier.name}</h1>
      <p className="text-ink-muted text-[15px] mb-6">{supplier.contact} · {supplier.email} · {supplier.phone}</p>

      <Panel title="Products Supplied">
        <div className="flex flex-wrap gap-2">
          {supplier.productIds.map((pid) => {
            const product = getProduct(pid);
            return (
              <span key={pid} className="bg-border-soft text-ink-muted text-[12.5px] font-semibold px-2.5 py-1.5 rounded">
                {product?.name}
              </span>
            );
          })}
        </div>
      </Panel>

      <Panel title="Purchase History">
        {supplierPurchases.length === 0 && (
          <p className="text-[14px] text-ink-muted py-2">No purchases from this supplier yet.</p>
        )}
        {supplierPurchases.map((p) => {
          const total = p.items.reduce((sum, i) => sum + lineTotal(i.quantity, i.cost), 0);
          return (
            <div key={p.id} className="flex justify-between items-center py-3 border-b border-border-soft last:border-b-0">
              <div>
                <Link href={`/portal/purchases/${p.id}`} className="font-semibold text-navy text-[14.5px] block">{p.code}</Link>
                <div className="text-xs text-ink-faint">{p.orderDate} · ₹ {total.toLocaleString("en-IN")}</div>
              </div>
              <div className="flex gap-2">
                <PurchaseStatusBadge status={p.status} />
                <PaymentStatusBadge status={p.paymentStatus} />
              </div>
            </div>
          );
        })}
      </Panel>

      <Panel title="Notes">
        <p className="text-[14.5px] text-ink leading-relaxed">{supplier.notes}</p>
      </Panel>
    </div>
  );
}
