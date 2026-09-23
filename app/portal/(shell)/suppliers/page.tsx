import Link from "next/link";
import { Panel } from "@/components/ui/Panel";
import Button from "@/components/ui/Button";
import { suppliers, purchases } from "@/lib/demo-data";

export default function SuppliersPage() {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="font-display text-2xl text-navy font-semibold">Suppliers</h1>
        <Button>Add Supplier</Button>
      </div>
      <Panel title={`All Suppliers (${suppliers.length})`}>
        <table className="w-full border-collapse text-[14.5px]">
          <thead>
            <tr>
              {["Supplier", "Contact", "Products Supplied", "Purchase Orders"].map((h) => (
                <th key={h} className="text-left text-xs uppercase tracking-wide text-ink-faint font-bold border-b-[1.5px] border-border py-2.5 px-2">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {suppliers.map((s) => {
              const poCount = purchases.filter((p) => p.supplierId === s.id).length;
              return (
                <tr key={s.id}>
                  <td className="py-3.5 px-2 border-b border-border-soft">
                    <Link href={`/portal/suppliers/${s.id}`} className="font-semibold text-navy">{s.name}</Link>
                  </td>
                  <td className="py-3.5 px-2 border-b border-border-soft">
                    <div>{s.contact}</div>
                    <div className="text-xs text-ink-faint">{s.email}</div>
                  </td>
                  <td className="py-3.5 px-2 border-b border-border-soft">{s.productIds.length}</td>
                  <td className="py-3.5 px-2 border-b border-border-soft">{poCount}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </Panel>
    </div>
  );
}
