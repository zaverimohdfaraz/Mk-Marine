import {
  LayoutGrid,
  Building2,
  Ship,
  Mail,
  FileText,
  CheckSquare,
  Package,
  Wallet,
  ListChecks,
  StickyNote,
  Boxes,
  Factory,
  BarChart3,
  Settings,
  FolderOpen,
  Receipt,
  BellRing,
} from "lucide-react";

export const NAV_GROUPS = [
  {
    label: "Main",
    items: [{ href: "/portal/dashboard", label: "Dashboard", icon: LayoutGrid }],
  },
  {
    label: "Business",
    items: [
      { href: "/portal/clients", label: "Clients", icon: Building2 },
      { href: "/portal/vessels", label: "Vessels", icon: Ship },
      { href: "/portal/enquiries", label: "Enquiries", icon: Mail },
      { href: "/portal/quotations", label: "Quotations", icon: FileText },
      { href: "/portal/sales", label: "Sales", icon: CheckSquare },
    ],
  },
  {
    label: "Operations",
    items: [
      { href: "/portal/purchases", label: "Purchases", icon: Package },
      { href: "/portal/payments", label: "Payments", icon: Wallet },
      { href: "/portal/expenses", label: "Expenses", icon: Receipt },
      { href: "/portal/documents", label: "Documents", icon: FolderOpen },
      { href: "/portal/tasks", label: "Tasks", icon: ListChecks },
      { href: "/portal/reminders", label: "Reminders", icon: BellRing },
      { href: "/portal/important-notes", label: "Important Notes", icon: StickyNote },
    ],
  },
  {
    label: "Data",
    items: [
      { href: "/portal/products", label: "Marine Products", icon: Boxes },
      { href: "/portal/suppliers", label: "Suppliers", icon: Factory },
    ],
  },
  {
    label: "Reports",
    items: [{ href: "/portal/reports", label: "Reports", icon: BarChart3 }],
  },
  {
    label: "System",
    items: [{ href: "/portal/settings", label: "Settings", icon: Settings }],
  },
];
