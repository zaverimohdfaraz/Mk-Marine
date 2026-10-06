"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { Menu, X } from "lucide-react";
import { NAV_GROUPS } from "./nav-items";

export default function MobileNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // close the drawer whenever the page changes
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // stop the page behind the drawer from scrolling
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div className="hidden max-[980px]:block">
      <div className="sticky top-0 z-30 bg-navy-deep text-white flex items-center justify-between px-4 h-14">
        <Link href="/portal/dashboard" className="flex items-center gap-2.5">
          <img src="/logo.jpg" alt="MK Marine Services" className="w-8 h-8 object-contain" />
          <span className="font-display text-[15px] font-semibold">MK Marine</span>
        </Link>
        <button
          onClick={() => setOpen(true)}
          aria-label="Open menu"
          className="w-11 h-11 -mr-2 flex items-center justify-center rounded-md hover:bg-white/10"
        >
          <Menu size={24} />
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 z-50">
          <div className="absolute inset-0 bg-black/55" onClick={() => setOpen(false)} />
          <nav className="absolute top-0 right-0 h-full w-[280px] max-w-[85vw] bg-navy-deep text-white/85 overflow-y-auto px-4 py-4 shadow-2xl">
            <div className="flex items-center justify-between mb-4">
              <span className="font-display text-[15px] text-white font-semibold px-2.5">Menu</span>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="w-11 h-11 flex items-center justify-center rounded-md hover:bg-white/10"
              >
                <X size={22} />
              </button>
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
                        "flex items-center gap-3 px-3 py-3 rounded-lg text-[15px] font-medium",
                        active ? "bg-ocean text-white" : "text-white/78 hover:bg-white/[0.06]"
                      )}
                    >
                      <Icon size={18} className="opacity-90" />
                      {item.label}
                    </Link>
                  );
                })}
              </div>
            ))}
          </nav>
        </div>
      )}
    </div>
  );
}
