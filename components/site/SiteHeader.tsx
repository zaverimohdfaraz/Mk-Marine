import Link from "next/link";

const NAV = [
  { href: "/services", label: "Services" },
  { href: "/marine-spare-parts", label: "Marine Spare Parts" },
  { href: "/vessel-support", label: "Vessel Support" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function SiteHeader() {
  return (
    <header className="flex items-center justify-between px-12 py-4.5 py-[18px] bg-white border-b border-border-soft max-[860px]:px-6 max-[860px]:flex-wrap max-[860px]:gap-4">
      <Link href="/" className="flex items-center gap-3">
        <img src="/logo.jpg" alt="MK Marine Services logo" className="w-[42px] h-[42px] object-contain" />
        <div className="font-display text-[18px] font-semibold text-navy leading-tight">
          MK Marine Services
          <span className="block font-sans text-[10.5px] tracking-widest text-ink-faint font-semibold">
            INDIA LLP
          </span>
        </div>
      </Link>
      <nav className="flex gap-7 text-[14.5px] font-medium text-ink max-[860px]:hidden">
        {NAV.map((item) => (
          <Link key={item.href} href={item.href} className="hover:text-ocean">
            {item.label}
          </Link>
        ))}
      </nav>
      <div className="flex items-center gap-4.5 gap-[18px]">
        <Link href="/portal/login" className="text-[13px] text-ink-faint font-medium hover:text-ocean">
          Portal
        </Link>
        <Link
          href="/request-quote"
          className="inline-flex items-center justify-center min-h-[44px] px-5 rounded-sm bg-gold text-[#241C08] text-[14.5px] font-semibold"
        >
          Request a Quote
        </Link>
      </div>
    </header>
  );
}
