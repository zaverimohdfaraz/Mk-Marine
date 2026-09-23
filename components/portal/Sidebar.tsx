"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
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
} from "lucide-react";

const NAV_GROUPS = [
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
      { href: "/portal/tasks", label: "Tasks", icon: ListChecks },
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

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="bg-navy-deep text-white/85 px-4 py-5 flex flex-col gap-1.5">
      <div className="flex items-center gap-2.5 px-2.5 pb-5">
        <img src="/logo.jpg" alt="MK Marine Services" className="w-8 h-8 object-contain" />
        <span className="font-display text-[15px] text-white font-semibold">MK Marine</span>
      </div>

      {NAV_GROUPS.map((group) => (
        <div className="mb-4" key={group.label}>
          <h5 className="text-[10.5px] uppercase tracking-widest text-white/35 px-2.5 mb-1.5">
            {group.label}
          </h5>
          {group.items.map((item) => {
            const Icon = item.icon;
            const active = pathname?.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={clsx(
                  "flex items-center gap-3 px-3 py-2.5 rounded-lg text-[14.5px] font-medium",
                  active ? "bg-ocean text-white" : "text-white/78 hover:bg-white/[0.06] hover:text-white"
                )}
              >
                <Icon size={18} className="opacity-90" />
                {item.label}
              </Link>
            );
          })}
        </div>
      ))}
    </aside>
  );
}
