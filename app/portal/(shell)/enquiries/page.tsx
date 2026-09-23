import Link from "next/link";
import { Panel } from "@/components/ui/Panel";
import { StatusBadge } from "@/components/ui/StatusBadge";
import Button from "@/components/ui/Button";
import { enquiries, getClient, getVessel } from "@/lib/demo-data";

export default function EnquiriesPage() {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="font-display text-2xl text-navy font-semibold">Enquiries</h1>
        <Link href="/portal/enquiries/new">
          <Button>New Enquiry</Button>
        </Link>
      </div>

      <Panel title={`All Enquiries (${enquiries.length})`}>
        <table className="w-full border-collapse text-[14.5px]">
          <thead>
            <tr>
              {["Code", "Client / Vessel", "Requirement", "Priority", "Status"].map((h) => (
                <th key={h} className="text-left text-xs uppercase tracking-wide text-ink-faint font-bold border-b-[1.5px] border-border py-2.5 px-2">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {enquiries.map((e) => {
              const client = getClient(e.clientId);
              const vessel = getVessel(e.vesselId);
              return (
                <tr key={e.id}>
                  <td className="py-3.5 px-2 border-b border-border-soft text-ink-muted">{e.code}</td>
                  <td className="py-3.5 px-2 border-b border-border-soft">
                    <Link href={`/portal/enquiries/${e.id}`} className="font-semibold text-navy block">
                      {client?.name}
                    </Link>
                    <div className="text-xs text-ink-faint">{vessel?.name}</div>
                  </td>
                  <td className="py-3.5 px-2 border-b border-border-soft">{e.requirementTitle}</td>
                  <td className="py-3.5 px-2 border-b border-border-soft">{e.priority}</td>
                  <td className="py-3.5 px-2 border-b border-border-soft">
                    <StatusBadge status={e.status} />
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
