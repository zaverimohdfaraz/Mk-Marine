import Link from "next/link";
import { Panel } from "@/components/ui/Panel";
import Button from "@/components/ui/Button";
import { clients, enquiries, getVesselsForClient } from "@/lib/demo-data";

export default function ClientsPage() {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="font-display text-2xl text-navy font-semibold">Clients</h1>
        <Button>Add New Client</Button>
      </div>

      <Panel title={`All Clients (${clients.length})`}>
        <table className="w-full border-collapse text-[14.5px]">
          <thead>
            <tr>
              {["Client", "Primary Contact", "Vessels", "Active Enquiries", "Outstanding"].map((h) => (
                <th key={h} className="text-left text-xs uppercase tracking-wide text-ink-faint font-bold border-b-[1.5px] border-border py-2.5 px-2">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {clients.map((c) => {
              const vessels = getVesselsForClient(c.id);
              const activeCount = enquiries.filter(
                (e) => e.clientId === c.id && e.status !== "Completed" && e.status !== "Lost"
              ).length;
              return (
                <tr key={c.id}>
                  <td className="py-3.5 px-2 border-b border-border-soft">
                    <Link href={`/portal/clients/${c.id}`} className="font-semibold text-navy">
                      {c.name}
                    </Link>
                  </td>
                  <td className="py-3.5 px-2 border-b border-border-soft">{c.primaryContact}</td>
                  <td className="py-3.5 px-2 border-b border-border-soft">{vessels.length}</td>
                  <td className="py-3.5 px-2 border-b border-border-soft">{activeCount}</td>
                  <td className="py-3.5 px-2 border-b border-border-soft">
                    {c.outstandingAmount > 0 ? `₹ ${c.outstandingAmount.toLocaleString("en-IN")}` : "—"}
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
