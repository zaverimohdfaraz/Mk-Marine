import Link from "next/link";
import SiteHeader from "@/components/site/SiteHeader";
import SiteFooter from "@/components/site/SiteFooter";
import PublicPageExtras from "@/components/site/PublicPageExtras";
import SectionHeading from "@/components/site/SectionHeading";
import { siteImages } from "@/lib/site-images";

const CATEGORIES = [
  { title: "Main Engine Components", copy: "Components for main engine maintenance and repair requirements." },
  { title: "Auxiliary Engine Parts", copy: "Parts supporting auxiliary engine systems and onboard power generation." },
  { title: "Pumps & Valves", copy: "Pumps and valves across engine room and deck systems." },
  { title: "Electrical Components", copy: "Electrical parts for onboard systems and equipment." },
  { title: "Marine Safety Equipment", copy: "Equipment supporting onboard safety requirements." },
  { title: "Deck Equipment", copy: "Mechanical and deck machinery components." },
  { title: "Filters & Consumables", copy: "Filters and consumable items for routine maintenance." },
  { title: "Navigation & Communication Equipment", copy: "Components supporting navigation and onboard communication." },
  { title: "Engine Room Supplies", copy: "General supplies for engine room operations." },
];

export default function MarineSparePartsPage() {
  return (
    <div>
      <SiteHeader />

      <div className="bg-navy-deep text-white px-14 pt-24 pb-28 max-[980px]:px-6 max-[980px]:pt-16 max-[980px]:pb-16">
        <div className="max-w-[1280px] mx-auto">
          <div className="text-gold text-[15px] font-semibold mb-3.5">MARINE SPARE PARTS</div>
          <h1 className="font-display text-[46px] leading-[1.15] font-semibold mb-5 max-w-2xl max-[860px]:text-[32px]">
            Components across every major system on board
          </h1>
          <p className="text-white/75 text-[18px] max-w-xl leading-relaxed">
            Supporting vessel requirements through structured sourcing and
            supplier coordination — across the categories below.
          </p>
        </div>
      </div>

      {/* INTRODUCTION */}
      <div className="max-w-[1100px] mx-auto px-14 py-20 max-[980px]:px-6 max-[980px]:py-14">
        <div className="rounded-lg overflow-hidden mb-16 border border-border-soft shadow-card">
          <img src={siteImages.industrialValves.src} alt={siteImages.industrialValves.alt} className="w-full h-[360px] object-cover" />
        </div>

        <SectionHeading eyebrow="Categories" title="Marine spare parts &amp; equipment" align="left" />
        <div className="grid grid-cols-3 gap-7 max-[860px]:grid-cols-2 max-[560px]:grid-cols-1">
          {CATEGORIES.map((c) => (
            <div key={c.title} className="border border-border rounded-md p-6">
              <h3 className="text-navy text-[15.5px] font-semibold mb-2">{c.title}</h3>
              <p className="text-ink-muted text-[13.5px] leading-relaxed">{c.copy}</p>
            </div>
          ))}
        </div>
        <p className="text-[12.5px] text-ink-faint mt-6">
          The categories above reflect the sample catalogue used in the
          Operations Portal for design and development purposes — the public
          catalogue can be populated with your real inventory at any time.
        </p>
      </div>

      {/* SOURCING APPROACH */}
      <div className="bg-white border-y border-border-soft py-20 max-[980px]:py-14">
        <div className="max-w-[1100px] mx-auto px-14 max-[980px]:px-6">
          <div className="grid grid-cols-2 gap-16 max-[860px]:grid-cols-1 max-[860px]:gap-10">
            <div>
              <h2 className="font-display text-[24px] text-navy font-semibold mb-3">Sourcing Approach</h2>
              <p className="text-ink-muted text-[15px] leading-relaxed">
                Every requirement is matched against supplier availability,
                pricing and delivery timelines before a quotation is issued —
                so what you receive reflects what's actually achievable, not a
                generic list price.
              </p>
            </div>
            <div>
              <h2 className="font-display text-[24px] text-navy font-semibold mb-3">Supplier Coordination</h2>
              <p className="text-ink-muted text-[15px] leading-relaxed">
                We coordinate directly with suppliers on availability,
                specifications and lead times, and keep that communication
                moving until the part is confirmed and dispatched.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* REQUIREMENT-BASED PROCUREMENT */}
      <div className="max-w-[1100px] mx-auto px-14 py-20 max-[980px]:px-6 max-[980px]:py-14">
        <div className="grid grid-cols-2 gap-16 items-center max-[860px]:grid-cols-1 max-[860px]:gap-10">
          <div>
            <h2 className="font-display text-[24px] text-navy font-semibold mb-3">Requirement-Based Procurement</h2>
            <p className="text-ink-muted text-[15px] leading-relaxed mb-4">
              Sourcing starts from your actual vessel and equipment requirement
              — the part number, specification, or a description of the
              component — rather than a fixed catalogue.
            </p>
            <p className="text-ink-muted text-[15px] leading-relaxed">
              Where the exact part isn't readily available, we help identify
              compatible alternatives and confirm suitability before
              proceeding.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden shadow-card border border-border-soft">
            <img src={siteImages.aerialCargoShip.src} alt={siteImages.aerialCargoShip.alt} className="w-full h-[280px] object-cover" />
          </div>
        </div>
      </div>

      {/* REQUEST A PART CTA */}
      <div className="max-w-[1100px] mx-auto px-14 pb-20 max-[980px]:px-6 max-[980px]:pb-14">
        <div className="bg-ocean-light rounded-lg p-14 flex items-center justify-between gap-8 flex-wrap max-[700px]:p-8">
          <div>
            <h3 className="font-display text-[24px] text-navy font-semibold mb-1.5">
              Can't find the part you're looking for?
            </h3>
            <p className="text-ink-muted text-[15.5px] m-0 max-w-md">
              Send us the part number, description, vessel information, or
              requirement and our team can review it.
            </p>
          </div>
          <Link href="/request-quote" className="inline-flex items-center justify-center min-h-[48px] px-7 rounded-sm bg-ocean text-white text-[15.5px] font-semibold">
            Request a Quote
          </Link>
        </div>
      </div>

      <SiteFooter />
      <PublicPageExtras />
    </div>
  );
}
