"use client";

import { useState } from "react";
import { Panel } from "@/components/ui/Panel";
import Button from "@/components/ui/Button";
import { payments } from "@/lib/demo-data";

export default function PaymentsTabs() {
  const [tab, setTab] = useState<"Client" | "Supplier">("Client");

  const filtered = payments.filter((p) => p.direction === tab);
  const total = filtered.reduce((sum, p) => sum + p.amount, 0);

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="font-display text-2xl text-navy font-semibold">Payments</h1>
        <Button>Record Payment</Button>
      </div>

      <div className="flex gap-2 mb-6">
        {(["Client", "Supplier"] as const).map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`px-5 py-2.5 rounded-full text-[14px] font-semibold border-[1.5px] ${
              tab === t ? "bg-navy text-white border-navy" : "bg-white text-ink-muted border-border"
            }`}
          >
            {t} Payments
          </button>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-4 mb-6 max-[700px]:grid-cols-1">
        <div className="bg-white border border-border rounded-md p-5 shadow-card">
          <span className="block text-xs text-ink-muted mb-1.5">
            {tab === "Client" ? "Total Received" : "Total Paid"}
          </span>
          <b className="text-[26px] text-navy font-bold">₹ {total.toLocaleString("en-IN")}</b>
        </div>
        <div className="bg-white border border-border rounded-md p-5 shadow-card">
          <span className="block text-xs text-ink-muted mb-1.5">Outstanding</span>
          <b className="text-[26px] text-navy font-bold">
            {tab === "Client" ? "₹ 42,000" : "₹ 15,600"}
          </b>
        </div>
        <div className="bg-white border border-border rounded-md p-5 shadow-card">
          <span className="block text-xs text-ink-muted mb-1.5">Transactions</span>
          <b className="text-[26px] text-navy font-bold">{filtered.length}</b>
        </div>
      </div>

      <Panel title={`${tab} Payments`}>
        <table className="w-full border-collapse text-[14.5px]">
          <thead>
            <tr>
              {["Related", "Amount", "Date", "Method", "Reference"].map((h) => (
                <th key={h} className="text-left text-xs uppercase tracking-wide text-ink-faint font-bold border-b-[1.5px] border-border py-2.5 px-2">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filtered.map((p) => (
              <tr key={p.id}>
                <td className="py-3 px-2 border-b border-border-soft font-semibold text-navy">{p.relatedLabel}</td>
                <td className="py-3 px-2 border-b border-border-soft">₹ {p.amount.toLocaleString("en-IN")}</td>
                <td className="py-3 px-2 border-b border-border-soft text-ink-muted">{p.date}</td>
                <td className="py-3 px-2 border-b border-border-soft">{p.method}</td>
                <td className="py-3 px-2 border-b border-border-soft text-ink-muted">{p.reference}</td>
              </tr>
            ))}
            {filtered.length === 0 && (
              <tr><td colSpan={5} className="py-6 text-center text-ink-muted">No {tab.toLowerCase()} payments recorded yet.</td></tr>
            )}
          </tbody>
        </table>
      </Panel>
    </div>
  );
}
