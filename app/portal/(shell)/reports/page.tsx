import { Panel } from "@/components/ui/Panel";
import Button from "@/components/ui/Button";
import { sales, purchases, payments, quotations, lineTotal } from "@/lib/demo-data";

export default function ReportsPage() {
  const totalSales = sales.reduce(
    (sum, s) => sum + s.items.reduce((a, i) => a + lineTotal(i.quantity, i.sellingPrice), 0),
    0
  );
  const totalCost = sales.reduce(
    (sum, s) => sum + s.items.reduce((a, i) => a + lineTotal(i.quantity, i.purchaseCost), 0),
    0
  );
  const totalPurchases = purchases.reduce(
    (sum, p) => sum + p.items.reduce((a, i) => a + lineTotal(i.quantity, i.cost), 0),
    0
  );
  const receivables = payments
    .filter((p) => p.direction === "Client")
    .reduce((sum, p) => sum + p.amount, 0);
  const payables = payments
    .filter((p) => p.direction === "Supplier")
    .reduce((sum, p) => sum + p.amount, 0);
  const estimatedProfit = totalSales - totalCost;

  const stats = [
    { label: "Total Sales", value: totalSales },
    { label: "Total Purchases", value: totalPurchases },
    { label: "Receivables Collected", value: receivables },
    { label: "Payables Paid", value: payables },
    { label: "Estimated Profit", value: estimatedProfit },
  ];

  return (
    <div>
      <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
        <h1 className="font-display text-2xl text-navy font-semibold">Reports</h1>
        <div className="flex gap-2.5">
          <Button variant="secondary">Export Excel</Button>
          <Button variant="secondary">Export PDF</Button>
          <Button variant="ghost">Print</Button>
        </div>
      </div>

      <div className="bg-white border border-border rounded-md p-5 mb-6 flex flex-wrap gap-4 items-end">
        <div>
          <label className="block text-xs font-semibold text-ink-muted mb-1.5">Date Range</label>
          <select className="px-3.5 py-2.5 border-[1.5px] border-border rounded-sm text-[14px]">
            <option>Last 30 days</option>
            <option>Last quarter</option>
            <option>This year</option>
          </select>
        </div>
        <div>
          <label className="block text-xs font-semibold text-ink-muted mb-1.5">Client</label>
          <select className="px-3.5 py-2.5 border-[1.5px] border-border rounded-sm text-[14px]">
            <option>All Clients</option>
          </select>
        </div>
        <div>
          <label className="block text-xs font-semibold text-ink-muted mb-1.5">Vessel</label>
          <select className="px-3.5 py-2.5 border-[1.5px] border-border rounded-sm text-[14px]">
            <option>All Vessels</option>
          </select>
        </div>
        <div>
          <label className="block text-xs font-semibold text-ink-muted mb-1.5">User</label>
          <select className="px-3.5 py-2.5 border-[1.5px] border-border rounded-sm text-[14px]">
            <option>Both</option>
            <option>Mr. Kersi</option>
            <option>Mr. Patel</option>
          </select>
        </div>
        <Button className="min-h-[42px] px-5">Apply Filters</Button>
      </div>

      <div className="grid grid-cols-5 gap-4 mb-6 max-[980px]:grid-cols-2 max-[500px]:grid-cols-1">
        {stats.map((s) => (
          <div key={s.label} className="bg-white border border-border rounded-md p-5 shadow-card">
            <span className="block text-xs text-ink-muted mb-1.5">{s.label}</span>
            <b className="text-[20px] text-navy font-bold">₹ {s.value.toLocaleString("en-IN")}</b>
          </div>
        ))}
      </div>

      <Panel title="Quotation Pipeline">
        <table className="w-full border-collapse text-[14.5px]">
          <thead>
            <tr>
              {["Status", "Count"].map((h) => (
                <th key={h} className="text-left text-xs uppercase tracking-wide text-ink-faint font-bold border-b-[1.5px] border-border py-2.5 px-2">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {["Draft", "Sent", "Accepted", "Rejected", "Expired"].map((status) => (
              <tr key={status}>
                <td className="py-3 px-2 border-b border-border-soft">{status}</td>
                <td className="py-3 px-2 border-b border-border-soft font-semibold text-navy">
                  {quotations.filter((q) => q.status === status).length}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Panel>
    </div>
  );
}
