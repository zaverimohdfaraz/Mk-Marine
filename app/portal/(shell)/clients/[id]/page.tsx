import { notFound } from "next/navigation";
import Link from "next/link";
import { Panel } from "@/components/ui/Panel";
import { StatusBadge, QuotationStatusBadge, SaleStatusBadge } from "@/components/ui/StatusBadge";
import { getClient, getVesselsForClient, enquiries, quotations, sales } from "@/lib/demo-data";

export default function ClientDetailPage({ params }: { params: { id: string } }) {
  const client = getClient(params.id);
  if (!client) return notFound();

  const vessels = getVesselsForClient(client.id);
  const clientEnquiries = enquiries.filter((e) => e.clientId === client.id);
  const clientQuotations = quotations.filter((q) => q.clientId === client.id);
  const clientSales = sales.filter((s) => s.clientId === client.id);

  return (
    <div>
      <h1 className="font-display text-2xl text-navy font-semibold mb-1">{client.name}</h1>
      <p className="text-ink-muted text-[15px] mb-6">Primary contact: {client.primaryContact}</p>

      <Panel title="Vessels">
        {vessels.map((v) => (
          <div key={v.id} className="flex justify-between items-center py-2.5 border-b border-border-soft last:border-b-0">
            <div>
              <div className="font-semibold text-navy text-[14.5px]">{v.name}</div>
              <div className="text-xs text-ink-faint">{v.imo} · {v.type}</div>
            </div>
          </div>
        ))}
      </Panel>

      <Panel title="Enquiries" action="New Enquiry" actionHref="/portal/enquiries/new">
        {clientEnquiries.length === 0 && (
          <p className="text-[14px] text-ink-muted py-2">No enquiries for this client yet.</p>
        )}
        {clientEnquiries.map((e) => (
          <div key={e.id} className="flex justify-between items-center py-3 border-b border-border-soft last:border-b-0">
            <div>
              <Link href={`/portal/enquiries/${e.id}`} className="font-semibold text-navy text-[14.5px] block">
                {e.requirementTitle}
              </Link>
              <div className="text-xs text-ink-faint">{e.code}</div>
            </div>
            <StatusBadge status={e.status} />
          </div>
        ))}
      </Panel>

      <Panel title="Quotations">
        {clientQuotations.length === 0 && (
          <p className="text-[14px] text-ink-muted py-2">No quotations for this client yet.</p>
        )}
        {clientQuotations.map((q) => (
          <div key={q.id} className="flex justify-between items-center py-3 border-b border-border-soft last:border-b-0">
            <Link href={`/portal/quotations/${q.id}`} className="font-semibold text-navy text-[14.5px]">{q.code}</Link>
            <QuotationStatusBadge status={q.status} />
          </div>
        ))}
      </Panel>

      <Panel title="Sales">
        {clientSales.length === 0 && (
          <p className="text-[14px] text-ink-muted py-2">No sales for this client yet.</p>
        )}
        {clientSales.map((s) => (
          <div key={s.id} className="flex justify-between items-center py-3 border-b border-border-soft last:border-b-0">
            <Link href={`/portal/sales/${s.id}`} className="font-semibold text-navy text-[14.5px]">{s.code}</Link>
            <SaleStatusBadge status={s.saleStatus} />
          </div>
        ))}
      </Panel>

      <Panel title="Payments">
        <div className="py-2">
          <span className="block text-xs text-ink-muted mb-1.5">Outstanding</span>
          <b className="text-2xl text-navy font-bold">
            {client.outstandingAmount > 0
              ? `₹ ${client.outstandingAmount.toLocaleString("en-IN")}`
              : "₹ 0 — fully settled"}
          </b>
        </div>
      </Panel>
    </div>
  );
}
