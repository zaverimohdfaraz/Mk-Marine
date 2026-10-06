import Link from "next/link";
import SiteHeader from "@/components/site/SiteHeader";
import SiteFooter from "@/components/site/SiteFooter";
import PublicPageExtras from "@/components/site/PublicPageExtras";
import SectionHeading from "@/components/site/SectionHeading";
import { siteImages } from "@/lib/site-images";

const APPROACH = [
  { title: "One Point of Contact", copy: "A single point of contact coordinates the requirement from first enquiry through to delivery, rather than passing it between departments." },
  { title: "Requirement First", copy: "Sourcing starts from the actual vessel and equipment requirement, not from a fixed catalogue." },
  { title: "Transparent Commercial Terms", copy: "Pricing, delivery terms and payment terms are set out clearly before anything is confirmed." },
];

export default function AboutPage() {
  return (
    <div>
      <SiteHeader />

      <div className="bg-navy-deep text-white px-14 pt-24 pb-28 max-[980px]:px-6 max-[980px]:pt-16 max-[980px]:pb-16">
        <div className="max-w-[1280px] mx-auto">
          <div className="text-gold text-[15px] font-semibold mb-3.5">ABOUT</div>
          <h1 className="font-display text-[46px] leading-[1.15] font-semibold mb-5 max-w-2xl max-[860px]:text-[32px]">
            MK Marine Services India LLP
          </h1>
          <p className="text-white/75 text-[18px] max-w-xl leading-relaxed">
            A marine business operating in consulting, vessel support and
            spare-parts trading — built around coordination between vessel
            operators and suppliers.
          </p>
        </div>
      </div>

      {/* INTRODUCTION */}
      <div className="max-w-[1100px] mx-auto px-14 py-20 max-[980px]:px-6 max-[980px]:py-14">
        <div className="grid grid-cols-2 gap-16 items-center max-[860px]:grid-cols-1 max-[860px]:gap-10">
          <div>
            <div className="text-ocean text-sm font-semibold mb-3 tracking-wide">INTRODUCTION</div>
            <h2 className="font-display text-[28px] text-navy font-semibold mb-4">What we do</h2>
            <p className="text-ink-muted text-[15.5px] leading-relaxed mb-4">
              MK Marine Services India LLP supports vessel owners and operators
              with marine spare parts, procurement and technical enquiries —
              helping identify the right component and coordinate it through
              to delivery.
            </p>
            <p className="text-ink-muted text-[15.5px] leading-relaxed">
              Replace this placeholder copy with your company's real history,
              focus areas and leadership whenever you're ready to share it.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden shadow-card border border-border-soft">
            <img src={siteImages.aerialCargoShip.src} alt={siteImages.aerialCargoShip.alt} className="w-full h-[360px] object-cover" />
          </div>
        </div>
      </div>

      {/* OUR MARINE FOCUS */}
      <div className="bg-white border-y border-border-soft py-20 max-[980px]:py-14">
        <div className="max-w-[1100px] mx-auto px-14 max-[980px]:px-6">
          <SectionHeading eyebrow="Our marine focus" title="Consulting, vessel support and spare-parts trading" align="left" />
          <div className="grid grid-cols-3 gap-8 max-[860px]:grid-cols-1">
            <div>
              <h3 className="text-navy text-[16.5px] font-semibold mb-2">Marine Consulting</h3>
              <p className="text-ink-muted text-[14.5px] leading-relaxed">
                Practical coordination and technical communication for marine
                businesses managing vessel requirements.
              </p>
            </div>
            <div>
              <h3 className="text-navy text-[16.5px] font-semibold mb-2">Vessel Support</h3>
              <p className="text-ink-muted text-[14.5px] leading-relaxed">
                Assistance with vessel requirements, spare parts, supplier
                coordination, documentation and follow-up.
              </p>
            </div>
            <div>
              <h3 className="text-navy text-[16.5px] font-semibold mb-2">Spare-Parts Trading</h3>
              <p className="text-ink-muted text-[14.5px] leading-relaxed">
                Sourcing and trading of marine spare parts according to vessel
                and equipment requirements.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* OUR APPROACH */}
      <div className="max-w-[1100px] mx-auto px-14 py-20 max-[980px]:px-6 max-[980px]:py-14">
        <SectionHeading eyebrow="Our approach" title="How we work with clients" align="left" />
        <div className="space-y-8">
          {APPROACH.map((a, i) => (
            <div key={a.title} className="flex gap-6 items-start border-b border-border-soft pb-8 last:border-b-0">
              <div className="font-display text-[28px] text-gold font-semibold w-12 flex-shrink-0">{`0${i + 1}`}</div>
              <div>
                <h3 className="text-navy text-[18px] font-semibold mb-2">{a.title}</h3>
                <p className="text-ink-muted text-[15px] leading-relaxed max-w-xl">{a.copy}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* SUPPLIER & PROCUREMENT COORDINATION + VESSEL SUPPORT */}
      <div className="bg-ocean-light py-20 max-[980px]:py-14">
        <div className="max-w-[1100px] mx-auto px-14 max-[980px]:px-6">
          <div className="grid grid-cols-2 gap-14 max-[860px]:grid-cols-1 max-[860px]:gap-10">
            <div>
              <h3 className="font-display text-[22px] text-navy font-semibold mb-3">Supplier &amp; Procurement Coordination</h3>
              <p className="text-ink-muted text-[15px] leading-relaxed">
                Requirements are matched against supplier availability, pricing
                and delivery timelines, with commercial terms confirmed before
                an order is placed.
              </p>
            </div>
            <div>
              <h3 className="font-display text-[22px] text-navy font-semibold mb-3">Vessel Support</h3>
              <p className="text-ink-muted text-[15px] leading-relaxed">
                Support is coordinated around your vessel's schedule and port
                calls, so the right component and documentation are in place
                when needed.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* LONG-TERM RELATIONSHIPS */}
      <div className="max-w-[1100px] mx-auto px-14 py-20 max-[980px]:px-6 max-[980px]:py-14 text-center">
        <h2 className="font-display text-[26px] text-navy font-semibold mb-4">
          Long-Term Business Relationships
        </h2>
        <p className="text-ink-muted text-[15.5px] leading-relaxed max-w-xl mx-auto mb-9">
          The company is positioned around professional business relationships
          rather than one-off transactions — the same point of contact you
          work with today is who you'll work with on your next requirement.
        </p>
        <Link href="/contact" className="inline-flex items-center justify-center min-h-[48px] px-7 rounded-sm bg-ocean text-white text-[15.5px] font-semibold">
          Get in Touch
        </Link>
      </div>

      <SiteFooter />
      <PublicPageExtras />
    </div>
  );
}
