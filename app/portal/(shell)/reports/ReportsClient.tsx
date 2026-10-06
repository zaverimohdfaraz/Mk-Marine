"use client";

import { useMemo, useState } from "react";
import { Panel } from "@/components/ui/Panel";
import Button from "@/components/ui/Button";
import { quotations, getUserActivityCounts } from "@/lib/demo-data";
import {
  monthlyFinancials,
  monthsInRange,
  summarizePeriod,
  quarters,
  halves,
} from "@/lib/reports-data";

type PeriodType = "monthly" | "quarterly" | "6months" | "yearly" | "custom";

const LATEST_KEY = monthlyFinancials[monthlyFinancials.length - 1].key;
const EARLIEST_KEY = monthlyFinancials[0].key;

function formatINR(n: number) {
  return `₹ ${n.toLocaleString("en-IN")}`;
}

export default function ReportsClient() {
  const [periodType, setPeriodType] = useState<PeriodType>("monthly");
  const [month, setMonth] = useState(LATEST_KEY);
  const [quarter, setQuarter] = useState(quarters[quarters.length - 1].key);
  const [half, setHalf] = useState(halves[halves.length - 1].key);
  const [customFrom, setCustomFrom] = useState(EARLIEST_KEY);
  const [customTo, setCustomTo] = useState(LATEST_KEY);

  const selectedMonths = useMemo(() => {
    if (periodType === "monthly") {
      return monthsInRange(month, month);
    }
    if (periodType === "quarterly") {
      const q = quarters.find((q) => q.key === quarter)!;
      return monthsInRange(q.from, q.to);
    }
    if (periodType === "6months") {
      const h = halves.find((h) => h.key === half)!;
      return monthsInRange(h.from, h.to);
    }
    if (periodType === "yearly") {
      return monthsInRange(EARLIEST_KEY, LATEST_KEY);
    }
    return monthsInRange(customFrom, customTo);
  }, [periodType, month, quarter, half, customFrom, customTo]);

  const totals = summarizePeriod(selectedMonths);
  const maxSales = Math.max(1, ...selectedMonths.map((m) => m.sales));

  const rangeLabel =
    periodType === "yearly"
      ? "Full Year — Oct 2025 to Sep 2026"
      : selectedMonths.length === 0
      ? "No months selected"
      : selectedMonths.length === 1
      ? selectedMonths[0].label
      : `${selectedMonths[0].label} – ${selectedMonths[selectedMonths.length - 1].label}`;

  const team = (["Mr. Kersi", "Mr. Patel"] as const).map((u) => ({
    user: u,
    ...getUserActivityCounts(u),
  }));

  return (
    <div>
      <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
        <h1 className="font-display text-2xl text-navy font-semibold">Reports &amp; Calculations</h1>
        <div className="flex gap-2.5">
          <Button variant="secondary">Export Excel</Button>
          <Button variant="secondary">Export PDF</Button>
          <Button variant="ghost">Print</Button>
        </div>
      </div>

      {/* PERIOD FILTER */}
      <div className="bg-white border border-border rounded-md p-5 mb-6 shadow-card">
        <div className="flex gap-2 mb-5 flex-wrap">
          {([
            ["monthly", "Monthly"],
            ["quarterly", "Quarterly"],
            ["6months", "6 Months"],
            ["yearly", "Yearly"],
            ["custom", "Custom Range"],
          ] as [PeriodType, string][]).map(([key, label]) => (
            <button
              key={key}
              onClick={() => setPeriodType(key)}
              className={`px-4 py-2 rounded-full text-[13.5px] font-semibold border-[1.5px] ${
                periodType === key ? "bg-navy text-white border-navy" : "bg-white text-ink-muted border-border"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        <div className="flex items-end gap-4 flex-wrap">
          {periodType === "monthly" && (
            <div>
              <label className="block text-xs font-semibold text-ink-muted mb-1.5">Month</label>
              <select
                value={month}
                onChange={(e) => setMonth(e.target.value)}
                className="px-3.5 py-2.5 border-[1.5px] border-border rounded-sm text-[14px] min-w-[180px]"
              >
                {monthlyFinancials.map((m) => (
                  <option key={m.key} value={m.key}>{m.label}</option>
                ))}
              </select>
            </div>
          )}

          {periodType === "quarterly" && (
            <div>
              <label className="block text-xs font-semibold text-ink-muted mb-1.5">Quarter</label>
              <select
                value={quarter}
                onChange={(e) => setQuarter(e.target.value)}
                className="px-3.5 py-2.5 border-[1.5px] border-border rounded-sm text-[14px] min-w-[220px]"
              >
                {quarters.map((q) => (
                  <option key={q.key} value={q.key}>{q.label}</option>
                ))}
              </select>
            </div>
          )}

          {periodType === "6months" && (
            <div>
              <label className="block text-xs font-semibold text-ink-muted mb-1.5">Half</label>
              <select
                value={half}
                onChange={(e) => setHalf(e.target.value)}
                className="px-3.5 py-2.5 border-[1.5px] border-border rounded-sm text-[14px] min-w-[260px]"
              >
                {halves.map((h) => (
                  <option key={h.key} value={h.key}>{h.label}</option>
                ))}
              </select>
            </div>
          )}

          {periodType === "yearly" && (
            <div>
              <label className="block text-xs font-semibold text-ink-muted mb-1.5">Year</label>
              <select disabled value="fy" className="px-3.5 py-2.5 border-[1.5px] border-border rounded-sm text-[14px] min-w-[220px] bg-border-soft text-ink-muted">
                <option value="fy">Oct 2025 – Sep 2026</option>
              </select>
            </div>
          )}

          {periodType === "custom" && (
            <>
              <div>
                <label className="block text-xs font-semibold text-ink-muted mb-1.5">From</label>
                <select
                  value={customFrom}
                  onChange={(e) => setCustomFrom(e.target.value)}
                  className="px-3.5 py-2.5 border-[1.5px] border-border rounded-sm text-[14px] min-w-[160px]"
                >
                  {monthlyFinancials.map((m) => (
                    <option key={m.key} value={m.key}>{m.label}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-xs font-semibold text-ink-muted mb-1.5">To</label>
                <select
                  value={customTo}
                  onChange={(e) => setCustomTo(e.target.value)}
                  className="px-3.5 py-2.5 border-[1.5px] border-border rounded-sm text-[14px] min-w-[160px]"
                >
                  {monthlyFinancials.map((m) => (
                    <option key={m.key} value={m.key}>{m.label}</option>
                  ))}
                </select>
              </div>
              {customFrom > customTo && (
                <span className="text-danger text-[13px] font-semibold pb-2.5">"From" must be before "To"</span>
              )}
            </>
          )}

          <span className="text-[13.5px] text-ink-faint pb-2.5">Showing: <b className="text-navy">{rangeLabel}</b></span>
        </div>
      </div>

      {/* SUMMARY CARDS */}
      <div className="grid grid-cols-3 gap-4 mb-6 max-[980px]:grid-cols-2 max-[500px]:grid-cols-1">
        {[
          { label: "Total Sales", value: totals.totalSales },
          { label: "Total Purchases", value: totals.totalPurchases },
          { label: "Business Expenses", value: totals.totalExpenses },
          { label: "Estimated Profit", value: totals.estimatedProfit },
          { label: `Receivables (as of ${selectedMonths[selectedMonths.length - 1]?.label ?? "—"})`, value: totals.closingReceivables },
          { label: `Payables (as of ${selectedMonths[selectedMonths.length - 1]?.label ?? "—"})`, value: totals.closingPayables },
        ].map((s) => (
          <div key={s.label} className="bg-white border border-border rounded-md p-5 shadow-card">
            <span className="block text-xs text-ink-muted mb-1.5">{s.label}</span>
            <b className="text-[20px] text-navy font-bold">{formatINR(s.value)}</b>
          </div>
        ))}
      </div>

      {/* MONTHLY BREAKDOWN */}
      <Panel title="Monthly Breakdown">
        {selectedMonths.length === 0 ? (
          <p className="text-[14px] text-ink-muted py-4">No months in this range — adjust "From" and "To".</p>
        ) : (
          <>
            <table className="w-full border-collapse text-[14.5px] mb-6">
              <thead>
                <tr>
                  {["Month", "Sales", "Purchases", "Expenses", "Profit"].map((h) => (
                    <th key={h} className="text-left text-xs uppercase tracking-wide text-ink-faint font-bold border-b-[1.5px] border-border py-2.5 px-2">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {selectedMonths.map((m) => (
                  <tr key={m.key}>
                    <td className="py-3 px-2 border-b border-border-soft font-semibold text-navy">{m.label}</td>
                    <td className="py-3 px-2 border-b border-border-soft">{formatINR(m.sales)}</td>
                    <td className="py-3 px-2 border-b border-border-soft">{formatINR(m.purchases)}</td>
                    <td className="py-3 px-2 border-b border-border-soft">{formatINR(m.expenses)}</td>
                    <td className="py-3 px-2 border-b border-border-soft font-semibold text-success">
                      {formatINR(m.sales - m.purchases - m.expenses)}
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <td className="py-3 px-2 font-bold text-navy">Total</td>
                  <td className="py-3 px-2 font-bold text-navy">{formatINR(totals.totalSales)}</td>
                  <td className="py-3 px-2 font-bold text-navy">{formatINR(totals.totalPurchases)}</td>
                  <td className="py-3 px-2 font-bold text-navy">{formatINR(totals.totalExpenses)}</td>
                  <td className="py-3 px-2 font-bold text-success">{formatINR(totals.estimatedProfit)}</td>
                </tr>
              </tfoot>
            </table>

            {/* SIMPLE BAR CHART — sales by month */}
            <div className="text-xs text-ink-faint uppercase tracking-wide font-semibold mb-3">Sales by Month</div>
            <div className="flex items-end gap-3 h-[140px] border-b border-border-soft pb-1">
              {selectedMonths.map((m) => (
                <div key={m.key} className="flex-1 flex flex-col items-center justify-end h-full">
                  <div
                    className="w-full max-w-[46px] bg-ocean rounded-t-sm"
                    style={{ height: `${Math.max(4, (m.sales / maxSales) * 100)}%` }}
                    title={formatINR(m.sales)}
                  />
                </div>
              ))}
            </div>
            <div className="flex gap-3 mt-2">
              {selectedMonths.map((m) => (
                <div key={m.key} className="flex-1 text-center text-[11px] text-ink-faint">
                  {m.label.replace(" 20", " '").slice(0, 6)}
                </div>
              ))}
            </div>
          </>
        )}
      </Panel>

      <Panel title="Team Activity">
        <p className="text-[12.5px] text-ink-faint mb-3">Overall totals — not affected by the period filter above.</p>
        <table className="w-full border-collapse text-[14.5px]">
          <thead>
            <tr>
              {["User", "Enquiries Assigned", "Quotations Created", "Tasks Completed", "Notes Added"].map((h) => (
                <th key={h} className="text-left text-xs uppercase tracking-wide text-ink-faint font-bold border-b-[1.5px] border-border py-2.5 px-2">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {team.map((t) => (
              <tr key={t.user}>
                <td className="py-3 px-2 border-b border-border-soft font-semibold text-navy">{t.user}</td>
                <td className="py-3 px-2 border-b border-border-soft">{t.enquiries}</td>
                <td className="py-3 px-2 border-b border-border-soft">{t.quotations}</td>
                <td className="py-3 px-2 border-b border-border-soft">{t.tasksCompleted}</td>
                <td className="py-3 px-2 border-b border-border-soft">{t.notesAdded}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Panel>

      <Panel title="Quotation Pipeline">
        <p className="text-[12.5px] text-ink-faint mb-3">Overall totals — not affected by the period filter above.</p>
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
