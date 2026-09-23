import { Panel } from "@/components/ui/Panel";
import { products } from "@/lib/demo-data";

export default function ProductsPage() {
  return (
    <div>
      <h1 className="font-display text-2xl text-navy font-semibold mb-6">Marine Products</h1>
      <Panel title={`All Products (${products.length})`}>
        <table className="w-full border-collapse text-[14.5px]">
          <thead>
            <tr>
              {["Product", "Part Number", "Category", "Manufacturer", "Suppliers"].map((h) => (
                <th key={h} className="text-left text-xs uppercase tracking-wide text-ink-faint font-bold border-b-[1.5px] border-border py-2.5 px-2">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {products.map((p) => (
              <tr key={p.id}>
                <td className="py-3 px-2 border-b border-border-soft font-semibold text-navy">{p.name}</td>
                <td className="py-3 px-2 border-b border-border-soft text-ink-muted">{p.partNumber}</td>
                <td className="py-3 px-2 border-b border-border-soft">{p.category}</td>
                <td className="py-3 px-2 border-b border-border-soft">{p.manufacturer}</td>
                <td className="py-3 px-2 border-b border-border-soft text-ink-muted">{p.suppliers.join(", ")}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Panel>
    </div>
  );
}
