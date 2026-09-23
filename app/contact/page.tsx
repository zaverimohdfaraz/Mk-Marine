import SiteHeader from "@/components/site/SiteHeader";
import SiteFooter from "@/components/site/SiteFooter";
import Link from "next/link";

export default function ContactPage() {
  return (
    <div>
      <SiteHeader />

      <div className="bg-navy-deep text-white px-14 pt-20 pb-24 max-[860px]:px-6 max-[860px]:pt-14 max-[860px]:pb-16">
        <div className="max-w-[1280px] mx-auto">
          <div className="text-gold text-[15px] font-semibold mb-3.5">CONTACT</div>
          <h1 className="font-display text-[44px] leading-[1.15] font-semibold mb-5 max-w-2xl max-[860px]:text-[30px]">
            Get in touch
          </h1>
          <p className="text-white/75 text-[17px] max-w-xl leading-relaxed">
            Have a requirement, a question, or want to talk through what we
            can support? Reach us any of these ways.
          </p>
        </div>
      </div>

      <div className="max-w-[1000px] mx-auto px-14 py-20 max-[860px]:px-6 max-[860px]:py-14">
        <div className="grid grid-cols-3 gap-8 mb-16 max-[860px]:grid-cols-1">
          <div className="border border-border rounded-md p-8">
            <span className="block text-xs text-ink-faint uppercase tracking-wide mb-2">Email</span>
            <b className="text-navy text-[17px] block">enquiries@mk.com</b>
          </div>
          <div className="border border-border rounded-md p-8">
            <span className="block text-xs text-ink-faint uppercase tracking-wide mb-2">Phone</span>
            <b className="text-navy text-[17px] block">+91 00000</b>
          </div>
          <div className="border border-border rounded-md p-8">
            <span className="block text-xs text-ink-faint uppercase tracking-wide mb-2">Office</span>
            <b className="text-navy text-[17px] block">Mumbai, India</b>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-14 items-start max-[860px]:grid-cols-1 max-[860px]:gap-10">
          <div>
            <h2 className="font-display text-[22px] text-navy font-semibold mb-3">Prefer to send a requirement directly?</h2>
            <p className="text-ink-muted text-[15.5px] leading-relaxed mb-5">
              If you already know the vessel, the part and the timeline, the
              Request a Quote form gets it to the right place faster than email.
            </p>
            <Link href="/request-quote" className="inline-flex items-center justify-center min-h-[48px] px-7 rounded-sm bg-ocean text-white text-[15.5px] font-semibold">
              Request a Quote
            </Link>
          </div>
          <div>
            <h2 className="font-display text-[22px] text-navy font-semibold mb-3">Business hours</h2>
            <p className="text-ink-muted text-[15.5px] leading-relaxed">
              Placeholder — replace with your real working hours and any
              after-hours contact arrangement for urgent vessel requirements.
            </p>
          </div>
        </div>

        <p className="text-[13px] text-ink-faint mt-16">
          Placeholder contact details — replace with your real information.
        </p>
      </div>

      <SiteFooter />
    </div>
  );
}
