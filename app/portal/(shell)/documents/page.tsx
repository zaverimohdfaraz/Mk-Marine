import { Panel } from "@/components/ui/Panel";
import { FileText } from "lucide-react";
import { documents } from "@/lib/demo-data";

const RECORD_ROUTE: Record<string, string> = {
  Enquiry: "/portal/enquiries/",
  Quotation: "/portal/quotations/",
  Sale: "/portal/sales/",
  Purchase: "/portal/purchases/",
  Client: "/portal/clients/",
};

export default function DocumentsPage() {
  return (
    <div>
      <h1 className="font-display text-2xl text-navy font-semibold mb-6">Documents</h1>
      <Panel title={`All Documents (${documents.length})`}>
        <table className="w-full border-collapse text-[14.5px]">
          <thead>
            <tr>
              {["File", "Category", "Related Record", "Uploaded By", "Uploaded"].map((h) => (
                <th key={h} className="text-left text-xs uppercase tracking-wide text-ink-faint font-bold border-b-[1.5px] border-border py-2.5 px-2">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {documents.map((d) => (
              <tr key={d.id}>
                <td className="py-3 px-2 border-b border-border-soft">
                  <div className="flex items-center gap-2.5">
                    <FileText size={16} className="text-ocean flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-navy">{d.name}</div>
                      <div className="text-xs text-ink-faint">{d.sizeLabel}</div>
                    </div>
                  </div>
                </td>
                <td className="py-3 px-2 border-b border-border-soft">
                  <span className="bg-border-soft text-ink-muted text-[12px] font-semibold px-2.5 py-1 rounded">{d.category}</span>
                </td>
                <td className="py-3 px-2 border-b border-border-soft">
                  <a href={`${RECORD_ROUTE[d.relatedType]}${d.relatedId}`} className="text-ocean font-semibold">
                    {d.relatedLabel}
                  </a>
                </td>
                <td className="py-3 px-2 border-b border-border-soft text-ink-muted">{d.uploadedBy}</td>
                <td className="py-3 px-2 border-b border-border-soft text-ink-muted">{d.uploadedAt}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="text-[12.5px] text-ink-faint mt-3">
          Documents are also attached directly to the relevant Enquiry, Quotation,
          Sale or Purchase — this view is the central index across all of them.
        </p>
      </Panel>
    </div>
  );
}
