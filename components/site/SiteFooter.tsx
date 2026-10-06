import Link from "next/link";
import { siteContact } from "@/lib/site-contact";

export default function SiteFooter() {
  return (
    <footer className="bg-navy-deep text-white/70 px-12 pt-16 pb-8 mt-20 max-[980px]:px-6">
      <div className="grid grid-cols-[1.4fr_1fr_1fr_1fr] gap-10 max-w-[1280px] mx-auto mb-12 max-[980px]:grid-cols-2 max-[600px]:grid-cols-1">
        <div className="pr-8 max-[980px]:col-span-2 max-[600px]:col-span-1">
          <div className="flex items-center gap-2.5 mb-4">
            <img src="/logo.jpg" alt="MK Marine Services logo" className="w-9 h-9 object-contain" />
            <span className="text-white font-display text-[16px] font-semibold">MK Marine Services</span>
          </div>
          <p className="text-[14px] text-white/55 leading-relaxed">
            Marine consulting, vessel support and spare-parts trading for vessel
            owners, operators and marine businesses coordinating requirements
            across suppliers and ports.
          </p>
        </div>
        <div>
          <h4 className="text-white text-[13px] uppercase tracking-wide mb-4">Company</h4>
          <Link href="/about" className="block text-[14px] text-white/65 mb-2.5 hover:text-white">About</Link>
          <Link href="/services" className="block text-[14px] text-white/65 mb-2.5 hover:text-white">Services</Link>
          <Link href="/marine-spare-parts" className="block text-[14px] text-white/65 mb-2.5 hover:text-white">Marine Parts</Link>
          <Link href="/vessel-support" className="block text-[14px] text-white/65 mb-2.5 hover:text-white">Vessel Support</Link>
          <Link href="/how-we-work" className="block text-[14px] text-white/65 mb-2.5 hover:text-white">How We Work</Link>
        </div>
        <div>
          <h4 className="text-white text-[13px] uppercase tracking-wide mb-4">Support</h4>
          <Link href="/request-quote" className="block text-[14px] text-white/65 mb-2.5 hover:text-white">Request a Quote</Link>
          <Link href="/contact" className="block text-[14px] text-white/65 mb-2.5 hover:text-white">Contact</Link>
          <Link href="/portal/login" className="block text-[14px] text-white/65 mb-2.5 hover:text-white">Client / Staff Login</Link>
        </div>
        <div>
          <h4 className="text-white text-[13px] uppercase tracking-wide mb-4">Contact</h4>
          <p className="text-[14px] text-white/65 mb-2.5">{siteContact.email}</p>
          <p className="text-[14px] text-white/65 mb-2.5">{siteContact.phone}</p>
          <p className="text-[14px] text-white/65 mb-2.5">WhatsApp: {siteContact.whatsappNumber}</p>
          <p className="text-[14px] text-white/65 mb-2.5">{siteContact.address}</p>
        </div>
      </div>
      <div className="max-w-[1280px] mx-auto pt-6 border-t border-white/10 text-[12.5px] text-white/45 flex justify-between flex-wrap gap-2.5">
        <span>© {new Date().getFullYear()} MK Marine Services India LLP</span>
        <div className="flex gap-5">
          <Link href="/privacy" className="hover:text-white/70">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-white/70">Terms</Link>
          <Link href="/cookies" className="hover:text-white/70">Cookies</Link>
        </div>
      </div>
    </footer>
  );
}
