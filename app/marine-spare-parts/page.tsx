import SiteHeader from "@/components/site/SiteHeader";
import SiteFooter from "@/components/site/SiteFooter";
import Link from "next/link";

const CATEGORIES = [
  "Main Engine", "Pumps", "Valves", "Bearings", "Gaskets",
  "Hydraulic", "Electrical", "Deck Machinery", "Filters", "Seals",
  "General Marine Supplies",
];

export default function MarineSparePartsPage() {
  return (
    <div>
      <SiteHeader />

      <div className="bg-navy-deep text-white px-14 pt-20 pb-24 max-[860px]:px-6 max-[860px]:pt-14 max-[860px]:pb-16">
        <div className="max-w-[1280px] mx-auto">
          <div className="text-gold text-[15px] font-semibold mb-3.5">MARINE SPARE PARTS</div>
          <h1 className="font-display text-[44px] leading-[1.15] font-semibold mb-5 max-w-2xl max-[860px]:text-[30px]">
            Components across every major system on board
          </h1>
          <p className="text-white/75 text-[17px] max-w-xl leading-relaxed">
            The categories below reflect the sample catalogue used in the
            Operations Portal for design and development purposes — the public
            catalogue can be populated with your real inventory at any time.
          </p>
        </div>
      </div>

      <div className="max-w-[1100px] mx-auto px-14 py-20 max-[860px]:px-6 max-[860px]:py-14">
        <div className="rounded-lg overflow-hidden mb-12 border border-border-soft shadow-card">
          <img
            src="https://images.unsplash.com/photo-1744113627248-8c9ba859be91?w=1600&q=80&auto=format&fit=crop"
            alt="Marine pipework and valve components"
            className="w-full h-[340px] object-cover"
          />
        </div>

        <h2 className="font-display text-[22px] text-navy font-semibold mb-6">Categories</h2>
        <div className="flex flex-wrap gap-3 mb-16">
          {CATEGORIES.map((c) => (
            <span key={c} className="px-5 py-3 rounded-full border-[1.5px] border-border text-[14.5px] font-semibold text-navy">
              {c}
            </span>
          ))}
        </div>

        <div className="bg-ocean-light rounded-lg p-14 flex items-center justify-between gap-8 flex-wrap max-[700px]:p-8">
          <div>
            <h3 className="font-display text-[24px] text-navy font-semibold mb-1.5">
              Looking for a specific part number?
            </h3>
            <p className="text-ink-muted text-[15.5px] m-0">
              Send us the vessel and the requirement — we'll confirm availability.
            </p>
          </div>
          <Link href="/request-quote" className="inline-flex items-center justify-center min-h-[48px] px-7 rounded-sm bg-ocean text-white text-[15.5px] font-semibold">
            Request a Quote
          </Link>
        </div>
      </div>

      <SiteFooter />
    </div>
  );
}
