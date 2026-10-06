"use client";

import { useState } from "react";
import { Panel } from "@/components/ui/Panel";
import Button from "@/components/ui/Button";
import { Expense, UserName } from "@/lib/types";

export default function ExpensesClient({
  initialExpenses,
  currentUser,
}: {
  initialExpenses: Expense[];
  currentUser: UserName;
}) {
  const [expenses, setExpenses] = useState(initialExpenses);
  const [adding, setAdding] = useState(false);
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");

  const total = expenses.reduce((sum, e) => sum + e.amount, 0);

  function handleAdd() {
    if (!category.trim() || !amount) return;
    const expense: Expense = {
      id: `exp-${Date.now()}`,
      category: category.trim(),
      description: description.trim() || category.trim(),
      amount: Number(amount),
      date: "Today",
      paidBy: currentUser,
    };
    setExpenses([expense, ...expenses]);
    setCategory("");
    setDescription("");
    setAmount("");
    setAdding(false);
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="font-display text-2xl text-navy font-semibold">Expenses</h1>
        <Button onClick={() => setAdding(true)}>Add Expense</Button>
      </div>

      <div className="bg-white border border-border rounded-md p-5 mb-6 shadow-card max-w-xs">
        <span className="block text-xs text-ink-muted mb-1.5">Total Expenses</span>
        <b className="text-[26px] text-navy font-bold">₹ {total.toLocaleString("en-IN")}</b>
      </div>

      {adding && (
        <Panel title="New Expense">
          <div className="grid grid-cols-3 gap-4 mb-4">
            <div>
              <label className="block font-semibold text-[13px] mb-1.5">Category</label>
              <input value={category} onChange={(e) => setCategory(e.target.value)} className="w-full px-3 py-2.5 border-[1.5px] border-border rounded-sm text-[14px]" placeholder="e.g. Fuel" />
            </div>
            <div>
              <label className="block font-semibold text-[13px] mb-1.5">Description</label>
              <input value={description} onChange={(e) => setDescription(e.target.value)} className="w-full px-3 py-2.5 border-[1.5px] border-border rounded-sm text-[14px]" />
            </div>
            <div>
              <label className="block font-semibold text-[13px] mb-1.5">Amount (₹)</label>
              <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} className="w-full px-3 py-2.5 border-[1.5px] border-border rounded-sm text-[14px]" />
            </div>
          </div>
          <div className="flex gap-2.5">
            <Button onClick={handleAdd}>Save Expense</Button>
            <Button variant="ghost" onClick={() => setAdding(false)}>Cancel</Button>
          </div>
        </Panel>
      )}

      <Panel title={`All Expenses (${expenses.length})`}>
        <table className="w-full border-collapse text-[14.5px]">
          <thead>
            <tr>
              {["Category", "Description", "Amount", "Date", "Paid By"].map((h) => (
                <th key={h} className="text-left text-xs uppercase tracking-wide text-ink-faint font-bold border-b-[1.5px] border-border py-2.5 px-2">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {expenses.map((e) => (
              <tr key={e.id}>
                <td className="py-3 px-2 border-b border-border-soft font-semibold text-navy">{e.category}</td>
                <td className="py-3 px-2 border-b border-border-soft text-ink-muted">{e.description}</td>
                <td className="py-3 px-2 border-b border-border-soft">₹ {e.amount.toLocaleString("en-IN")}</td>
                <td className="py-3 px-2 border-b border-border-soft text-ink-muted">{e.date}</td>
                <td className="py-3 px-2 border-b border-border-soft text-ink-muted">{e.paidBy}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Panel>
    </div>
  );
}
