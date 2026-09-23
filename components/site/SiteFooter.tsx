import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="bg-navy-deep text-white/70 px-12 pt-14 pb-8 mt-20 max-[860px]:px-6">
      <div className="flex justify-between gap-10 max-w-[1200px] mx-auto mb-10 flex-wrap">
        <div>
          <h4 className="text-white text-[13px] uppercase tracking-wide mb-3.5">MK Marine Services</h4>
          <Link href="/about" className="block text-[14px] text-white/65 mb-2.5 hover:text-white">About</Link>
          <Link href="/services" className="block text-[14px] text-white/65 mb-2.5 hover:text-white">Services</Link>
          <Link href="/contact" className="block text-[14px] text-white/65 mb-2.5 hover:text-white">Contact</Link>
        </div>
        <div>
          <h4 className="text-white text-[13px] uppercase tracking-wide mb-3.5">Solutions</h4>
          <Link href="/marine-spare-parts" className="block text-[14px] text-white/65 mb-2.5 hover:text-white">Marine Spare Parts</Link>
          <Link href="/vessel-support" className="block text-[14px] text-white/65 mb-2.5 hover:text-white">Vessel Support</Link>
          <Link href="/request-quote" className="block text-[14px] text-white/65 mb-2.5 hover:text-white">Request a Quote</Link>
        </div>
        <div>
          <h4 className="text-white text-[13px] uppercase tracking-wide mb-3.5">Legal</h4>
          <Link href="/privacy" className="block text-[14px] text-white/65 mb-2.5 hover:text-white">Privacy</Link>
          <Link href="/terms" className="block text-[14px] text-white/65 mb-2.5 hover:text-white">Terms</Link>
          <Link href="/cookies" className="block text-[14px] text-white/65 mb-2.5 hover:text-white">Cookies</Link>
        </div>
        <div>
          <h4 className="text-white text-[13px] uppercase tracking-wide mb-3.5">Company</h4>
          <Link href="/portal/login" className="block text-[14px] text-white/65 mb-2.5 hover:text-white">Portal</Link>
        </div>
      </div>
      <div className="max-w-[1200px] mx-auto pt-6 border-t border-white/10 text-[12.5px] text-white/45 flex justify-between flex-wrap gap-2.5">
        <span>© {new Date().getFullYear()} MK Marine Services India LLP</span>
        <span>Mumbai, India</span>
      </div>
    </footer>
  );
}
