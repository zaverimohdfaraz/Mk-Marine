"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { NAV_GROUPS } from "./nav-items";


export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="bg-navy-deep text-white/85 px-4 py-5 flex flex-col gap-1.5 max-[980px]:hidden">
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
