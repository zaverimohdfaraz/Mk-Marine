import SiteHeader from "@/components/site/SiteHeader";
import SiteFooter from "@/components/site/SiteFooter";
import Link from "next/link";

const COVERAGE = [
  "Scheduled maintenance component requirements",
  "Urgent / breakdown sourcing support",
  "Technical identification of parts and alternatives",
  "Coordination with your appointed suppliers where needed",
  "Delivery scheduling around port calls",
  "Documentation for customs and onboard records",
];

export default function VesselSupportPage() {
  return (
    <div>
      <SiteHeader />

      <div className="bg-navy-deep text-white px-14 pt-20 pb-24 max-[860px]:px-6 max-[860px]:pt-14 max-[860px]:pb-16">
        <div className="max-w-[1280px] mx-auto">
          <div className="text-gold text-[15px] font-semibold mb-3.5">VESSEL SUPPORT</div>
          <h1 className="font-display text-[44px] leading-[1.15] font-semibold mb-5 max-w-2xl max-[860px]:text-[30px]">
            Support for vessel operators, coordinated around your schedule
          </h1>
          <p className="text-white/75 text-[17px] max-w-xl leading-relaxed">
            We work around scheduled maintenance and port calls to make sure the
            right components and technical support are in place when your
            vessel needs them.
          </p>
        </div>
      </div>

      <div className="max-w-[1000px] mx-auto px-14 py-20 max-[860px]:px-6 max-[860px]:py-14">
        <div className="grid grid-cols-2 gap-14 max-[860px]:grid-cols-1 max-[860px]:gap-10">
          <div>
            <h2 className="font-display text-[24px] text-navy font-semibold mb-4">What's covered</h2>
            <ul className="space-y-3">
              {COVERAGE.map((c) => (
                <li key={c} className="flex items-start gap-3 text-[15.5px] text-ink">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2.5 flex-shrink-0" />
                  {c}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-display text-[24px] text-navy font-semibold mb-4">How to get started</h2>
            <p className="text-ink-muted text-[15.5px] leading-relaxed mb-4">
              Get in touch with the requirement, the vessel and the timeline, and
              our team will coordinate sourcing, quotation and delivery.
            </p>
            <p className="text-ink-muted text-[15.5px] leading-relaxed">
              For an urgent requirement, mention it in your message so we can
              prioritise accordingly.
            </p>
          </div>
        </div>

        <div className="mt-16 bg-ocean-light rounded-lg p-14 flex items-center justify-between gap-8 flex-wrap max-[700px]:p-8">
          <div>
            <h3 className="font-display text-[24px] text-navy font-semibold mb-1.5">
              Have a vessel requirement right now?
            </h3>
            <p className="text-ink-muted text-[15.5px] m-0">
              Send it over — we'll come back with a quotation.
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
