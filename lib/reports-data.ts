// Dummy monthly financial data for the Reports / Calculations screen.
// 12 months, Oct 2025 through Sep 2026 (current month), so every filter
// preset (monthly / quarterly / 6 months / yearly / custom range) has
// real numbers to aggregate.

export interface MonthlyFinancials {
  key: string; // "2025-10"
  label: string; // "Oct 2025"
  sales: number;
  purchases: number;
  expenses: number;
  receivables: number; // outstanding balance as of month end
  payables: number; // outstanding balance as of month end
}

export const monthlyFinancials: MonthlyFinancials[] = [
  { key: "2025-10", label: "Oct 2025", sales: 186000, purchases: 128000, expenses: 21000, receivables: 38000, payables: 22000 },
  { key: "2025-11", label: "Nov 2025", sales: 142000, purchases: 96000, expenses: 19500, receivables: 41000, payables: 18000 },
  { key: "2025-12", label: "Dec 2025", sales: 205000, purchases: 141000, expenses: 24000, receivables: 52000, payables: 31000 },
  { key: "2026-01", label: "Jan 2026", sales: 168000, purchases: 112000, expenses: 20500, receivables: 47000, payables: 26000 },
  { key: "2026-02", label: "Feb 2026", sales: 154000, purchases: 101000, expenses: 18800, receivables: 39500, payables: 21000 },
  { key: "2026-03", label: "Mar 2026", sales: 231000, purchases: 159000, expenses: 26500, receivables: 61000, payables: 34500 },
  { key: "2026-04", label: "Apr 2026", sales: 176000, purchases: 118000, expenses: 21200, receivables: 43000, payables: 24000 },
  { key: "2026-05", label: "May 2026", sales: 198000, purchases: 134000, expenses: 23000, receivables: 55000, payables: 28500 },
  { key: "2026-06", label: "Jun 2026", sales: 163000, purchases: 108000, expenses: 19800, receivables: 44500, payables: 19500 },
  { key: "2026-07", label: "Jul 2026", sales: 219000, purchases: 148000, expenses: 25200, receivables: 58000, payables: 32000 },
  { key: "2026-08", label: "Aug 2026", sales: 172000, purchases: 115000, expenses: 20200, receivables: 42000, payables: 23500 },
  { key: "2026-09", label: "Sep 2026", sales: 190000, purchases: 126000, expenses: 22400, receivables: 57500, payables: 34500 },
];

export interface PeriodTotals {
  months: MonthlyFinancials[];
  totalSales: number;
  totalPurchases: number;
  totalExpenses: number;
  estimatedProfit: number;
  closingReceivables: number;
  closingPayables: number;
}

export function summarizePeriod(months: MonthlyFinancials[]): PeriodTotals {
  const totalSales = months.reduce((s, m) => s + m.sales, 0);
  const totalPurchases = months.reduce((s, m) => s + m.purchases, 0);
  const totalExpenses = months.reduce((s, m) => s + m.expenses, 0);
  const last = months[months.length - 1];
  return {
    months,
    totalSales,
    totalPurchases,
    totalExpenses,
    estimatedProfit: totalSales - totalPurchases - totalExpenses,
    closingReceivables: last ? last.receivables : 0,
    closingPayables: last ? last.payables : 0,
  };
}

export function monthIndex(key: string): number {
  return monthlyFinancials.findIndex((m) => m.key === key);
}

export function monthsInRange(fromKey: string, toKey: string): MonthlyFinancials[] {
  const from = monthIndex(fromKey);
  const to = monthIndex(toKey);
  if (from === -1 || to === -1 || from > to) return [];
  return monthlyFinancials.slice(from, to + 1);
}

// Quarters grouped chronologically from the 12-month window above.
export const quarters = [
  { key: "q1", label: "Q1 — Oct–Dec 2025", from: "2025-10", to: "2025-12" },
  { key: "q2", label: "Q2 — Jan–Mar 2026", from: "2026-01", to: "2026-03" },
  { key: "q3", label: "Q3 — Apr–Jun 2026", from: "2026-04", to: "2026-06" },
  { key: "q4", label: "Q4 — Jul–Sep 2026", from: "2026-07", to: "2026-09" },
];

export const halves = [
  { key: "h1", label: "First Half — Oct 2025 to Mar 2026", from: "2025-10", to: "2026-03" },
  { key: "h2", label: "Second Half — Apr 2026 to Sep 2026", from: "2026-04", to: "2026-09" },
];
