import { Panel } from "@/components/ui/Panel";
import Button from "@/components/ui/Button";
import { vessels, getClient } from "@/lib/demo-data";

export default function VesselsPage() {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="font-display text-2xl text-navy font-semibold">Vessels</h1>
        <Button>Add Vessel</Button>
      </div>
      <Panel title={`All Vessels (${vessels.length})`}>
        <table className="w-full border-collapse text-[14.5px]">
          <thead>
            <tr>
              {["Vessel", "IMO", "Type", "Operator"].map((h) => (
                <th key={h} className="text-left text-xs uppercase tracking-wide text-ink-faint font-bold border-b-[1.5px] border-border py-2.5 px-2">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {vessels.map((v) => (
              <tr key={v.id}>
                <td className="py-3.5 px-2 border-b border-border-soft font-semibold text-navy">{v.name}</td>
                <td className="py-3.5 px-2 border-b border-border-soft">{v.imo}</td>
                <td className="py-3.5 px-2 border-b border-border-soft">{v.type}</td>
                <td className="py-3.5 px-2 border-b border-border-soft">{getClient(v.clientId)?.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Panel>
    </div>
  );
}
