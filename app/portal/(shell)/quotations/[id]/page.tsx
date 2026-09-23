import { notFound } from "next/navigation";
import Link from "next/link";
import { Panel } from "@/components/ui/Panel";
import { QuotationStatusBadge } from "@/components/ui/StatusBadge";
import CurrentStatus from "@/components/ui/CurrentStatus";
import ActivityTimeline from "@/components/ui/ActivityTimeline";
import Button from "@/components/ui/Button";
import {
  getQuotation,
  getClient,
  getVessel,
  getProduct,
  lineTotal,
  activity,
} from "@/lib/demo-data";

export default function QuotationDetailPage({ params }: { params: { id: string } }) {
  const quotation = getQuotation(params.id);
  if (!quotation) return notFound();

  const client = getClient(quotation.clientId);
  const vessel = getVessel(quotation.vesselId);
  const total = quotation.items.reduce((sum, i) => sum + lineTotal(i.quantity, i.sellingPrice), 0);
  const cost = quotation.items.reduce((sum, i) => sum + lineTotal(i.quantity, i.supplierCost), 0);
  const margin = total - cost;

  return (
    <div>
      <div className="text-[13.5px] text-ink-muted mb-2.5">
        <Link href={`/portal/clients/${client?.id}`} className="font-bold text-navy">
          {client?.name}
        </Link>{" "}
        / {vessel?.name} / {quotation.code}
      </div>

      <div className="flex justify-between items-start mb-5 flex-wrap gap-4">
        <div>
          <h1 className="font-display text-[26px] text-navy font-semibold mb-1.5">{quotation.code}</h1>
          <div className="text-ink-muted text-[15px]">{client?.name} · {vessel?.name}</div>
        </div>
        <QuotationStatusBadge status={quotation.status} />
      </div>

      <div className="mb-6">
        <CurrentStatus
          statusLine={quotation.currentStatusLine}
          nextAction={quotation.nextAction}
          responsible={quotation.responsible}
          lastUpdatedBy={quotation.lastUpdatedBy}
          lastUpdatedAt={quotation.lastUpdatedAt}
        />
      </div>

      <div className="grid grid-cols-[1.4fr_1fr] gap-5 max-[980px]:grid-cols-1">
        <div>
          <Panel title="Line Items">
            <table className="w-full border-collapse text-[14.5px]">
              <thead>
                <tr>
                  {["Product", "Qty", "Cost", "Selling Price", "Line Total"].map((h) => (
                    <th key={h} className="text-left text-xs uppercase tracking-wide text-ink-faint font-bold border-b-[1.5px] border-border py-2.5 px-2">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {quotation.items.map((item) => {
                  const product = getProduct(item.productId);
                  return (
                    <tr key={item.productId}>
                      <td className="py-3 px-2 border-b border-border-soft">
                        <div className="font-semibold text-navy">{product?.name}</div>
                        <div className="text-xs text-ink-faint">{product?.partNumber}</div>
                      </td>
                      <td className="py-3 px-2 border-b border-border-soft">{item.quantity}</td>
                      <td className="py-3 px-2 border-b border-border-soft text-ink-muted">₹ {item.supplierCost.toLocaleString("en-IN")}</td>
                      <td className="py-3 px-2 border-b border-border-soft">₹ {item.sellingPrice.toLocaleString("en-IN")}</td>
                      <td className="py-3 px-2 border-b border-border-soft font-semibold text-navy">
                        ₹ {lineTotal(item.quantity, item.sellingPrice).toLocaleString("en-IN")}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <div className="flex justify-end gap-8 pt-4 mt-1 border-t border-border-soft text-[14.5px]">
              <div className="text-right">
                <div className="text-xs text-ink-faint mb-1">Total Selling</div>
                <div className="font-bold text-navy text-[18px]">₹ {total.toLocaleString("en-IN")}</div>
              </div>
              <div className="text-right">
                <div className="text-xs text-ink-faint mb-1">Est. Margin</div>
                <div className="font-bold text-success text-[18px]">₹ {margin.toLocaleString("en-IN")}</div>
              </div>
            </div>
          </Panel>

          <Panel title="Client-Facing Notes">
            <p className="text-[14.5px] text-ink leading-relaxed">{quotation.clientNotes}</p>
          </Panel>

          <Panel title="Internal Notes">
            <div className="bg-gold-soft border border-[#E8D9AE] rounded-md p-4">
              <p className="text-[14.5px] text-warn leading-relaxed m-0">{quotation.internalNotes}</p>
            </div>
            <p className="text-[12px] text-ink-faint mt-2">Visible to Mr. Kersi and Mr. Patel only — never shown to the client.</p>
          </Panel>

          <Panel title="Terms">
            <div className="grid grid-cols-2 gap-6 text-[14.5px]">
              <div>
                <div className="text-xs text-ink-faint uppercase tracking-wide mb-1.5">Delivery Terms</div>
                <p className="text-ink m-0">{quotation.deliveryTerms}</p>
              </div>
              <div>
                <div className="text-xs text-ink-faint uppercase tracking-wide mb-1.5">Payment Terms</div>
                <p className="text-ink m-0">{quotation.paymentTerms}</p>
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
              <Button fullWidth>Send to Client</Button>
              <Button fullWidth variant="secondary">Mark as Accepted</Button>
              <Button fullWidth variant="secondary">Convert to Sale</Button>
              <Button fullWidth variant="ghost">Download PDF</Button>
            </div>
          </Panel>
        </div>
      </div>
    </div>
  );
}
