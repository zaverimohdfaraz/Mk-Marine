import Link from "next/link";
import SiteHeader from "@/components/site/SiteHeader";
import SiteFooter from "@/components/site/SiteFooter";
import PublicPageExtras from "@/components/site/PublicPageExtras";
import ProcessSteps from "@/components/site/ProcessSteps";
import ImageMoment from "@/components/site/ImageMoment";
import { siteImages } from "@/lib/site-images";

const SUPPORT_FLOW = [
  "Requirement", "Review", "Supplier Coordination", "Availability",
  "Quotation", "Procurement", "Delivery", "Follow-up",
];

const WORK_STEPS = [
  { n: "01", title: "Understand", copy: "Understand the vessel, equipment and requirement." },
  { n: "02", title: "Source", copy: "Identify appropriate sourcing options and suppliers." },
  { n: "03", title: "Evaluate", copy: "Review availability, pricing, specifications and delivery requirements." },
  { n: "04", title: "Coordinate", copy: "Keep communication between relevant parties organized." },
  { n: "05", title: "Deliver", copy: "Support the process through confirmation, procurement and follow-up." },
];

const VESSEL_TYPES = [
  "Cargo Vessels", "Tankers", "Bulk Carriers", "Offshore Vessels",
  "Tug & Workboats", "Passenger Vessels", "Commercial Marine Operations",
];

const MOVING_PARTS = ["Vessel", "Client", "Technical Information", "Supplier", "Price", "Availability", "Delivery", "Communication"];

const PART_CATEGORIES = [
  "Main Engine Components", "Auxiliary Engine Parts", "Pumps", "Valves",
  "Filters", "Electrical Components", "Deck Equipment", "Safety Equipment",
];

export default function HomePage() {
  return (
    <div>
      <SiteHeader />

      {/* HERO — large stacked typography over full-bleed photo */}
      <div className="relative text-white px-14 pt-32 pb-32 overflow-hidden max-[980px]:px-6 max-[980px]:pt-20 max-[980px]:pb-20">
        <img src={siteImages.heroContainerShip.src} alt={siteImages.heroContainerShip.alt} className="absolute inset-0 w-full h-full object-cover z-0" />
        <div className="absolute inset-0 z-[1] bg-gradient-to-b from-navy-deep/95 via-navy/88 to-navy-deep/95" />
        <div className="max-w-[1280px] mx-auto relative z-[2]">
          <div className="text-gold text-sm font-semibold tracking-wide mb-6">
            MARINE CONSULTING &middot; VESSEL SUPPORT &middot; SPARE-PARTS TRADING
          </div>
          <h1 className="font-display font-semibold leading-[0.96] mb-8">
            <span className="block text-[72px] max-[980px]:text-[44px] max-[600px]:text-[36px]">Marine expertise.</span>
            <span className="block text-[72px] max-[980px]:text-[44px] max-[600px]:text-[36px]">Vessel support.</span>
          </h1>
          <p className="text-[19px] text-white/80 max-w-[540px] mb-10 leading-relaxed">
            Marine consulting, vessel support and spare-parts trading focused
            on practical requirements, professional coordination and
            reliable supply.
          </p>
          <div className="flex gap-3 flex-wrap">
            <Link href="/request-quote" className="inline-flex items-center justify-center min-h-[50px] px-7 rounded-sm bg-gold text-[#241C08] text-[15.5px] font-semibold">
              Request a Quote
            </Link>
            <Link href="/services" className="inline-flex items-center justify-center min-h-[50px] px-7 rounded-sm border-[1.5px] border-white/40 text-white text-[15.5px] font-semibold">
              Explore Services
            </Link>
          </div>
        </div>
      </div>

      {/* INTRODUCTION — asymmetric type + edge-bleed image */}
      <div className="bg-white py-28 max-[980px]:py-16 overflow-hidden">
        <div className="max-w-[1280px] mx-auto grid grid-cols-[0.95fr_1.05fr] items-center max-[980px]:grid-cols-1">
          <div className="pl-14 pr-10 max-[980px]:px-6">
            <h2 className="font-display text-navy font-semibold leading-[1.03] mb-7">
              <span className="block text-[42px] max-[700px]:text-[28px]">Marine business</span>
              <span className="block text-[42px] max-[700px]:text-[28px]">requires more</span>
              <span className="block text-[42px] max-[700px]:text-[28px] text-gold">than supply.</span>
            </h2>
            <p className="text-ink-muted text-[16px] leading-relaxed max-w-[420px]">
              Marine requirements often involve vessel information, technical
              specifications, supplier communication, availability, pricing,
              delivery expectations and continuous follow-up. MK Marine
              Services brings these requirements together through marine
              consulting, vessel support and spare-parts trading.
            </p>
          </div>
          <div className="h-[420px] max-[980px]:h-[280px] max-[980px]:mt-10">
            <img src={siteImages.aerialCargoShip.src} alt={siteImages.aerialCargoShip.alt} className="w-full h-full object-cover" />
          </div>
        </div>
      </div>

      {/* SERVICE 01 — typography-led, no image */}
      <div className="bg-offwhite py-28 max-[980px]:py-16">
        <div className="max-w-[900px] mx-auto px-14 max-[980px]:px-6">
          <div className="font-display text-[100px] leading-none text-gold/25 font-bold mb-[-30px] max-[700px]:text-[64px] max-[700px]:mb-[-16px]">01</div>
          <h2 className="font-display text-[36px] text-navy font-semibold mb-5 max-[700px]:text-[26px]">Marine Consulting</h2>
          <p className="text-ink-muted text-[16.5px] leading-relaxed max-w-[560px]">
            Support for marine businesses requiring practical coordination,
            technical communication, procurement assistance, and operational
            support — a single point of contact for a requirement that would
            otherwise pass between several departments.
          </p>
        </div>
      </div>

      {/* SERVICE 02 — image-led with typography overlay */}
      <ImageMoment image="cargoShipBow" lines={["Vessel", "Support"]} height="h-[520px] max-[700px]:h-[380px]" />
      <div className="bg-white py-14 border-b border-border-soft">
        <div className="max-w-[900px] mx-auto px-14 max-[980px]:px-6">
          <p className="text-ink-muted text-[16px] leading-relaxed max-w-[560px]">
            Assistance with vessel-related requirements, spare parts,
            supplier coordination, documentation and follow-up — coordinated
            around your maintenance schedule and port calls.
          </p>
          <Link href="/vessel-support" className="inline-block mt-5 text-ocean text-[14.5px] font-semibold">
            More on Vessel Support &rarr;
          </Link>
        </div>
      </div>

      {/* MARINE SPARE PARTS — major feature */}
      <div className="bg-ocean-light py-28 max-[980px]:py-16 overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-14 max-[980px]:px-6">
          <h2 className="font-display text-navy font-semibold leading-[1.05] mb-8">
            <span className="block text-[46px] max-[700px]:text-[28px]">The right part.</span>
            <span className="block text-[46px] max-[700px]:text-[28px] text-ocean">The right requirement.</span>
          </h2>
          <div className="grid grid-cols-[1.1fr_0.9fr] gap-14 items-start max-[980px]:grid-cols-1 max-[980px]:gap-10">
            <div className="rounded-lg overflow-hidden shadow-card">
              <img src={siteImages.industrialValves.src} alt={siteImages.industrialValves.alt} className="w-full h-[440px] object-cover" />
            </div>
            <div>
              <p className="text-ink-muted text-[16px] leading-relaxed mb-8">
                Requirements are matched against supplier availability and
                vessel specification — coordinated as a trading and
                consulting operation, not a retail parts counter.
              </p>
              <div className="grid grid-cols-2 gap-x-6 gap-y-3 mb-8">
                {PART_CATEGORIES.map((c) => (
                  <div key={c} className="flex items-center gap-2.5 text-[14px] text-navy font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                    {c}
                  </div>
                ))}
              </div>
              <Link href="/marine-spare-parts" className="text-ocean text-[14.5px] font-semibold">
                View Marine Spare Parts &rarr;
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* FULL-SCREEN IMAGE MOMENT */}
      <ImageMoment image="portCrane" lines={["When the vessel", "needs it,", "timing matters."]} />

      {/* VESSEL SUPPORT PROCESS */}
      <div className="bg-white py-28 max-[980px]:py-16">
        <div className="max-w-[1280px] mx-auto px-14 max-[980px]:px-6">
          <div className="text-ocean text-sm font-semibold mb-3 tracking-wide">SUPPORTING THE VESSEL BEYOND THE REQUEST</div>
          <h2 className="font-display text-[32px] text-navy font-semibold mb-12 max-[700px]:text-[24px]">From requirement to delivery and follow-up</h2>
          <div className="flex items-stretch gap-2 flex-wrap justify-center max-[700px]:flex-col">
            {SUPPORT_FLOW.map((step, i) => (
              <div key={step} className="flex items-center gap-2 max-[700px]:flex-col max-[700px]:items-stretch">
                <div className="bg-offwhite border border-border rounded-md px-5 py-4 min-w-[140px] text-center">
                  <span className="text-navy text-[13.5px] font-semibold">{`0${i + 1} — ${step}`}</span>
                </div>
                {i < SUPPORT_FLOW.length - 1 && (
                  <span className="text-ocean text-lg max-[700px]:rotate-90 max-[700px]:self-center">&rarr;</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* HOW WE WORK — short version */}
      <div className="bg-offwhite py-28 max-[980px]:py-16">
        <div className="max-w-[1280px] mx-auto px-14 max-[980px]:px-6">
          <div className="text-ocean text-sm font-semibold mb-3 tracking-wide">HOW WE WORK</div>
          <h2 className="font-display text-[32px] text-navy font-semibold mb-12 max-[700px]:text-[24px]">Our working process</h2>
          <ProcessSteps steps={WORK_STEPS} />
          <Link href="/how-we-work" className="inline-block mt-10 text-ocean text-[14.5px] font-semibold">
            See the full process &rarr;
          </Link>
        </div>
      </div>

      {/* VESSEL TYPES — image-backed band */}
      <div className="relative py-24 overflow-hidden max-[980px]:py-16">
        <img src={siteImages.largeCargoShip.src} alt={siteImages.largeCargoShip.alt} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-navy-deep/80" />
        <div className="relative z-[1] max-w-[1000px] mx-auto px-14 text-center max-[980px]:px-6">
          <div className="text-gold text-sm font-semibold mb-3 tracking-wide">MARINE ENVIRONMENTS</div>
          <h2 className="font-display text-white text-[30px] font-semibold mb-10 max-[700px]:text-[22px]">
            Supporting different vessel requirements
          </h2>
          <div className="flex flex-wrap gap-3 justify-center">
            {VESSEL_TYPES.map((v) => (
              <span key={v} className="px-6 py-3.5 rounded-full border-[1.5px] border-white/35 text-white text-[14px] font-semibold">
                {v}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* WHY MK MARINE — editorial statement */}
      <div className="bg-navy-deep py-28 max-[980px]:py-16">
        <div className="max-w-[900px] mx-auto px-14 max-[980px]:px-6">
          <h2 className="font-display text-white font-semibold leading-[1.05] mb-8">
            <span className="block text-[42px] max-[700px]:text-[26px]">Marine requirements</span>
            <span className="block text-[42px] max-[700px]:text-[26px]">are never just</span>
            <span className="block text-[42px] max-[700px]:text-[26px] text-gold">a product.</span>
          </h2>
          <p className="text-white/70 text-[16px] leading-relaxed max-w-[540px] mb-8">
            A requirement can involve all of the following, at once — MK
            Marine's role is to help coordinate these moving parts.
          </p>
          <div className="flex flex-wrap gap-x-3 gap-y-3">
            {MOVING_PARTS.map((p, i) => (
              <span key={p} className="text-white/90 text-[16px] font-medium">
                {p}{i < MOVING_PARTS.length - 1 && <span className="text-gold ml-3">&bull;</span>}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ABOUT PREVIEW */}
      <div className="bg-white py-28 max-[980px]:py-16 overflow-hidden">
        <div className="max-w-[1280px] mx-auto grid grid-cols-[1fr_1fr] items-center max-[980px]:grid-cols-1">
          <div className="h-[420px] max-[980px]:h-[280px]">
            <img src={siteImages.cargoShipBow.src} alt={siteImages.cargoShipBow.alt} className="w-full h-full object-cover" />
          </div>
          <div className="pl-14 pr-14 max-[980px]:px-6 max-[980px]:mt-10">
            <div className="text-ocean text-sm font-semibold mb-3 tracking-wide">ABOUT MK MARINE SERVICES</div>
            <h2 className="font-display text-[30px] text-navy font-semibold mb-4 leading-[1.2] max-[700px]:text-[24px]">
              A marine business built around coordination
            </h2>
            <p className="text-ink-muted text-[15.5px] leading-relaxed mb-6 max-w-[480px]">
              MK Marine Services India LLP operates in marine consulting,
              vessel support and spare-parts trading — helping vessel owners
              and operators move a requirement from first enquiry through to
              delivery, with one point of contact throughout.
            </p>
            <Link href="/about" className="text-ocean text-[14.5px] font-semibold">
              Read Our Story &rarr;
            </Link>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="relative bg-navy-deep text-white overflow-hidden">
        <img src={siteImages.aerialCargoShip.src} alt={siteImages.aerialCargoShip.alt} className="absolute inset-0 w-full h-full object-cover opacity-[0.14]" />
        <div className="relative z-[1] max-w-[1280px] mx-auto px-14 py-28 text-center max-[980px]:px-6 max-[980px]:py-16">
          <h2 className="font-display font-semibold mb-5 leading-[1.05]">
            <span className="block text-[40px] max-[700px]:text-[26px]">Have a requirement?</span>
            <span className="block text-[40px] max-[700px]:text-[26px] text-gold">Let's start there.</span>
          </h2>
          <p className="text-white/70 text-[17px] max-w-[560px] mx-auto mb-9 leading-relaxed">
            Whether you need a spare part, supplier coordination, vessel
            support, or assistance with a marine requirement, speak with our
            team.
          </p>
          <div className="flex gap-3 justify-center flex-wrap">
            <Link href="/request-quote" className="inline-flex items-center justify-center min-h-[50px] px-7 rounded-sm bg-gold text-[#241C08] text-[15.5px] font-semibold">
              Request a Quote
            </Link>
            <Link href="/contact" className="inline-flex items-center justify-center min-h-[50px] px-7 rounded-sm border-[1.5px] border-white/40 text-white text-[15.5px] font-semibold">
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      <SiteFooter />
      <PublicPageExtras />
    </div>
  );
}
