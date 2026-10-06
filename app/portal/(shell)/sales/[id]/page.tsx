import { notFound } from "next/navigation";
import Link from "next/link";
import { Panel } from "@/components/ui/Panel";
import { SaleStatusBadge, PaymentStatusBadge } from "@/components/ui/StatusBadge";
import Button from "@/components/ui/Button";
import ActivityTimeline from "@/components/ui/ActivityTimeline";
import { getSale, getClient, getVessel, getProduct, lineTotal, activity, getDocumentsFor } from "@/lib/demo-data";
import { getCurrentUser } from "@/lib/current-user";
import RecordDocuments from "@/components/portal/RecordDocuments";

export default function SaleDetailPage({ params }: { params: { id: string } }) {
  const sale = getSale(params.id);
  if (!sale) return notFound();

  const currentUser = getCurrentUser();
  const client = getClient(sale.clientId);
  const vessel = getVessel(sale.vesselId);
  const totalSelling = sale.items.reduce((sum, i) => sum + lineTotal(i.quantity, i.sellingPrice), 0);
  const totalCost = sale.items.reduce((sum, i) => sum + lineTotal(i.quantity, i.purchaseCost), 0);
  const margin = totalSelling - totalCost;

  return (
    <div>
      <div className="text-[13.5px] text-ink-muted mb-2.5">
        <Link href={`/portal/clients/${client?.id}`} className="font-bold text-navy">{client?.name}</Link>{" "}
        / {vessel?.name} / {sale.code}
      </div>
      <div className="flex justify-between items-start mb-6 flex-wrap gap-4">
        <div>
          <h1 className="font-display text-[26px] text-navy font-semibold mb-1.5">{sale.code}</h1>
          <div className="text-ink-muted text-[15px]">{client?.name} · {vessel?.name} · {sale.createdAt}</div>
        </div>
        <div className="flex gap-2">
          <SaleStatusBadge status={sale.saleStatus} />
          <PaymentStatusBadge status={sale.paymentStatus} />
        </div>
      </div>

      <div className="grid grid-cols-[1.4fr_1fr] gap-5 max-[980px]:grid-cols-1">
        <div>
          <Panel title="Products">
            <table className="w-full border-collapse text-[14.5px]">
              <thead>
                <tr>
                  {["Product", "Qty", "Purchase Cost", "Selling Price", "Line Total"].map((h) => (
                    <th key={h} className="text-left text-xs uppercase tracking-wide text-ink-faint font-bold border-b-[1.5px] border-border py-2.5 px-2">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {sale.items.map((item) => {
                  const product = getProduct(item.productId);
                  return (
                    <tr key={item.productId}>
                      <td className="py-3 px-2 border-b border-border-soft">
                        <div className="font-semibold text-navy">{product?.name}</div>
                        <div className="text-xs text-ink-faint">{product?.partNumber}</div>
                      </td>
                      <td className="py-3 px-2 border-b border-border-soft">{item.quantity}</td>
                      <td className="py-3 px-2 border-b border-border-soft text-ink-muted">₹ {item.purchaseCost.toLocaleString("en-IN")}</td>
                      <td className="py-3 px-2 border-b border-border-soft">₹ {item.sellingPrice.toLocaleString("en-IN")}</td>
                      <td className="py-3 px-2 border-b border-border-soft font-semibold text-navy">₹ {lineTotal(item.quantity, item.sellingPrice).toLocaleString("en-IN")}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <div className="flex justify-end gap-8 pt-4 mt-1 border-t border-border-soft">
              <div className="text-right">
                <div className="text-xs text-ink-faint mb-1">Total Selling</div>
                <div className="font-bold text-navy text-[18px]">₹ {totalSelling.toLocaleString("en-IN")}</div>
              </div>
              <div className="text-right">
                <div className="text-xs text-ink-faint mb-1">Est. Margin</div>
                <div className="font-bold text-success text-[18px]">₹ {margin.toLocaleString("en-IN")}</div>
              </div>
            </div>
          </Panel>
        </div>
        <div>
          <Panel title="Activity">
            <ActivityTimeline events={activity} />
          </Panel>
          <Panel title="Actions">
            <div className="flex flex-col gap-2.5">
              <Button fullWidth>Record Payment</Button>
              <Button fullWidth variant="secondary">Mark as Completed</Button>
              <Button fullWidth variant="ghost">Download Invoice</Button>
            </div>
          </Panel>
          <RecordDocuments
            relatedType="Sale"
            relatedId={sale.id}
            relatedLabel={sale.code}
            initialDocuments={getDocumentsFor("Sale", sale.id)}
            currentUser={currentUser}
          />
        </div>
      </div>
    </div>
  );
}
