import { notFound } from "next/navigation";
import Link from "next/link";
import { Panel } from "@/components/ui/Panel";
import { StatusBadge, PriorityTag, QuotationStatusBadge } from "@/components/ui/StatusBadge";
import CurrentStatus from "@/components/ui/CurrentStatus";
import ActivityTimeline from "@/components/ui/ActivityTimeline";
import Button from "@/components/ui/Button";
import {
  getEnquiry,
  getClient,
  getVessel,
  getProduct,
  internalNotes,
  activity,
  getQuotationByEnquiry,
} from "@/lib/demo-data";

export default function EnquiryDetailPage({ params }: { params: { id: string } }) {
  const enquiry = getEnquiry(params.id);
  if (!enquiry) return notFound();

  const client = getClient(enquiry.clientId);
  const vessel = getVessel(enquiry.vesselId);
  const notes = internalNotes.filter((n) => n.relatedEnquiryId === enquiry.id);
  const relatedActivity = activity; // TODO: filter by enquiry once activity carries a related-record id

  return (
    <div>
      <div className="text-[13.5px] text-ink-muted mb-2.5">
        <Link href={`/portal/clients/${client?.id}`} className="font-bold text-navy">
          {client?.name}
        </Link>{" "}
        / {vessel?.name} / {enquiry.code}
      </div>

      <div className="flex justify-between items-start mb-5 flex-wrap gap-4">
        <div>
          <h1 className="font-display text-[26px] text-navy font-semibold mb-1.5">
            {enquiry.requirementTitle}
          </h1>
          <div className="text-ink-muted text-[15px]">
            {client?.name} · {vessel?.name}
          </div>
        </div>
        <StatusBadge status={enquiry.status} />
      </div>

      <div className="mb-6">
        <CurrentStatus
          statusLine={enquiry.currentStatusLine}
          nextAction={enquiry.nextAction}
          responsible={enquiry.responsible}
          lastUpdatedBy={enquiry.lastUpdatedBy}
          lastUpdatedAt={enquiry.lastUpdatedAt}
          assignedTo={enquiry.assignedTo}
        />
      </div>

      <div className="grid grid-cols-[1.4fr_1fr] gap-5 max-[980px]:grid-cols-1">
        <div>
          <Panel title="Requirement">
            <p className="text-[14.5px] text-ink mb-3">{enquiry.description}</p>
            <div className="flex flex-wrap gap-2">
              <span className="bg-border-soft text-ink-muted text-[11.5px] font-semibold px-2 py-1 rounded">
                Port: {enquiry.port}
              </span>
              <span className="bg-border-soft text-ink-muted text-[11.5px] font-semibold px-2 py-1 rounded">
                Priority: {enquiry.priority}
              </span>
              <span className="bg-border-soft text-ink-muted text-[11.5px] font-semibold px-2 py-1 rounded">
                Required: {enquiry.requiredDate}
              </span>
            </div>
          </Panel>

          <Panel title="Marine Products">
            <table className="w-full border-collapse text-[14.5px]">
              <thead>
                <tr>
                  {["Product", "Qty", "Supplier", "Price"].map((h) => (
                    <th key={h} className="text-left text-xs uppercase tracking-wide text-ink-faint font-bold border-b-[1.5px] border-border py-2.5 px-2">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {enquiry.items.map((item) => {
                  const product = getProduct(item.productId);
                  return (
                    <tr key={item.productId}>
                      <td className="py-3 px-2 border-b border-border-soft">
                        <div className="font-semibold text-navy">{product?.name}</div>
                        <div className="text-xs text-ink-faint">{product?.partNumber}</div>
                      </td>
                      <td className="py-3 px-2 border-b border-border-soft">{item.quantity}</td>
                      <td className="py-3 px-2 border-b border-border-soft">{item.supplier || "—"}</td>
                      <td className="py-3 px-2 border-b border-border-soft">
                        {item.price ? `₹ ${item.price.toLocaleString("en-IN")}` : "₹ —"}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </Panel>

          <Panel title="Internal Notes">
            {notes.length === 0 && (
              <p className="text-[14px] text-ink-muted py-2">No internal notes on this enquiry yet.</p>
            )}
            {notes.map((note) => (
              <div key={note.id} className="border border-border rounded-md p-4 mb-3 border-l-[3px] border-l-ocean">
                <div className="flex justify-between items-center mb-2">
                  <PriorityTag priority={note.priority} />
                  <span className="text-xs text-ink-faint">
                    {note.createdBy} → {note.forUser}
                  </span>
                </div>
                <p className="text-[15px] text-ink mb-2 leading-relaxed">{note.message}</p>
                <div className="text-xs text-ink-faint">{note.createdAt}</div>
              </div>
            ))}
          </Panel>
        </div>

        <div>
          <Panel title="Activity">
            <ActivityTimeline events={relatedActivity} />
          </Panel>
          <Panel title="Quotation">
            {(() => {
              const relatedQuotation = getQuotationByEnquiry(enquiry.id);
              if (!relatedQuotation) {
                return (
                  <>
                    <p className="text-[14px] text-ink-muted mb-3">No quotation created yet.</p>
                    <Button fullWidth>Create Quotation</Button>
                  </>
                );
              }
              return (
                <Link
                  href={`/portal/quotations/${relatedQuotation.id}`}
                  className="flex items-center justify-between border border-border rounded-md p-4 hover:border-ocean"
                >
                  <div>
                    <div className="font-semibold text-navy text-[14.5px]">{relatedQuotation.code}</div>
                    <div className="text-xs text-ink-faint">View quotation</div>
                  </div>
                  <QuotationStatusBadge status={relatedQuotation.status} />
                </Link>
              );
            })()}
          </Panel>
        </div>
      </div>
    </div>
  );
}
