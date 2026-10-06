import Link from "next/link";
import SiteHeader from "@/components/site/SiteHeader";
import SiteFooter from "@/components/site/SiteFooter";
import PublicPageExtras from "@/components/site/PublicPageExtras";
import SectionHeading from "@/components/site/SectionHeading";
import { siteImages } from "@/lib/site-images";

const WORKFLOW = [
  { title: "Requirement Received", copy: "The vessel requirement — spare part, technical query, or support request — is logged and reviewed." },
  { title: "Requirement Reviewed", copy: "Specifications, quantities and urgency are clarified before sourcing begins." },
  { title: "Supplier Coordination", copy: "Relevant suppliers are contacted to confirm availability and specifications." },
  { title: "Availability & Pricing", copy: "Pricing and delivery timelines are confirmed against your requirement." },
  { title: "Quotation", copy: "A clear quotation is issued, with delivery and payment terms set out." },
  { title: "Order Coordination", copy: "Once confirmed, the order is placed and tracked through to dispatch." },
  { title: "Delivery / Follow-up", copy: "Delivery is coordinated to your vessel or port, with documentation and follow-up." },
];

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

      <div className="bg-navy-deep text-white px-14 pt-24 pb-28 max-[980px]:px-6 max-[980px]:pt-16 max-[980px]:pb-16">
        <div className="max-w-[1280px] mx-auto">
          <div className="text-gold text-[15px] font-semibold mb-3.5">VESSEL SUPPORT</div>
          <h1 className="font-display text-[46px] leading-[1.15] font-semibold mb-5 max-w-2xl max-[860px]:text-[32px]">
            Support for vessel operators, coordinated around your schedule
          </h1>
          <p className="text-white/75 text-[18px] max-w-xl leading-relaxed">
            We work around scheduled maintenance and port calls to make sure
            the right components and technical support are in place when
            your vessel needs them.
          </p>
        </div>
      </div>

      {/* WHAT'S COVERED + HOW TO START */}
      <div className="max-w-[1100px] mx-auto px-14 py-20 max-[980px]:px-6 max-[980px]:py-14">
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
              Get in touch with the requirement, the vessel and the timeline,
              and our team will coordinate sourcing, quotation and delivery.
            </p>
            <p className="text-ink-muted text-[15.5px] leading-relaxed">
              For an urgent requirement, mention it in your message so we can
              prioritise accordingly.
            </p>
          </div>
        </div>
      </div>

      {/* WORKFLOW */}
      <div className="bg-ocean-light py-20 max-[980px]:py-14">
        <div className="max-w-[900px] mx-auto px-14 max-[980px]:px-6">
          <SectionHeading eyebrow="How a requirement moves" title="From requirement to delivery" />
          <div className="space-y-0">
            {WORKFLOW.map((step, i) => (
              <div key={step.title} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-9 h-9 rounded-full bg-navy text-white flex items-center justify-center font-bold text-[13.5px] flex-shrink-0">
                    {i + 1}
                  </div>
                  {i < WORKFLOW.length - 1 && <div className="w-px flex-1 bg-border my-1.5" />}
                </div>
                <div className="pb-8">
                  <h3 className="text-navy text-[16px] font-semibold mb-1.5">{step.title}</h3>
                  <p className="text-ink-muted text-[14.5px] leading-relaxed">{step.copy}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* IMAGE BREAK */}
      <div className="relative h-[320px] overflow-hidden max-[700px]:h-[220px]">
        <img src={siteImages.portCrane.src} alt={siteImages.portCrane.alt} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-navy-deep/50" />
        <div className="relative z-[1] h-full flex items-center justify-center px-6">
          <h2 className="font-display text-white text-[28px] font-semibold text-center max-w-[600px] max-[700px]:text-[22px]">
            Keeping marine requirements moving.
          </h2>
        </div>
      </div>

      {/* CTA */}
      <div className="max-w-[1100px] mx-auto px-14 py-20 max-[980px]:px-6 max-[980px]:py-14">
        <div className="bg-white border border-border rounded-lg p-14 flex items-center justify-between gap-8 flex-wrap max-[700px]:p-8">
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
      <PublicPageExtras />
    </div>
  );
}
