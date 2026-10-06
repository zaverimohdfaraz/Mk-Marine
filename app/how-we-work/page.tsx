import Link from "next/link";
import SiteHeader from "@/components/site/SiteHeader";
import SiteFooter from "@/components/site/SiteFooter";
import PublicPageExtras from "@/components/site/PublicPageExtras";
import SectionHeading from "@/components/site/SectionHeading";
import ProcessSteps from "@/components/site/ProcessSteps";
import { siteImages } from "@/lib/site-images";

const STEPS = [
  { n: "01", title: "Requirement", copy: "The vessel, equipment, requirement and urgency are logged and reviewed." },
  { n: "02", title: "Review", copy: "Specifications and quantities are clarified before sourcing begins." },
  { n: "03", title: "Supplier Search", copy: "Relevant suppliers are identified and contacted for the requirement." },
  { n: "04", title: "Availability & Pricing", copy: "Availability, pricing and delivery timelines are confirmed." },
  { n: "05", title: "Quotation", copy: "A clear quotation is issued, with delivery and payment terms set out." },
  { n: "06", title: "Confirmation", copy: "The requirement is confirmed and moves into procurement." },
  { n: "07", title: "Procurement", copy: "The order is placed and tracked through to dispatch." },
  { n: "08", title: "Delivery & Follow-up", copy: "Delivery is coordinated, with documentation and continued follow-up." },
];

export default function HowWeWorkPage() {
  return (
    <div>
      <SiteHeader />

      <div className="bg-navy-deep text-white px-14 pt-24 pb-28 max-[980px]:px-6 max-[980px]:pt-16 max-[980px]:pb-16">
        <div className="max-w-[1280px] mx-auto">
          <div className="text-gold text-[15px] font-semibold mb-3.5">HOW WE WORK</div>
          <h1 className="font-display text-[46px] leading-[1.15] font-semibold mb-5 max-w-2xl max-[860px]:text-[32px]">
            A structured path from enquiry to delivery
          </h1>
          <p className="text-white/75 text-[18px] max-w-xl leading-relaxed">
            Every marine requirement moves through the same clear process —
            here's the full journey, step by step.
          </p>
        </div>
      </div>

      <div className="max-w-[1160px] mx-auto px-14 py-20 max-[980px]:px-6 max-[980px]:py-14">
        <SectionHeading
          eyebrow="Our process"
          title="From first enquiry to delivery and follow-up"
          align="left"
        />
        <ProcessSteps steps={STEPS} />
      </div>

      <div className="relative h-[340px] overflow-hidden max-[700px]:h-[220px]">
        <img src={siteImages.largeCargoShip.src} alt={siteImages.largeCargoShip.alt} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-navy-deep/55" />
        <div className="relative z-[1] h-full flex items-center justify-center px-6">
          <h2 className="font-display text-white text-[28px] font-semibold text-center max-w-[600px] max-[700px]:text-[22px]">
            One clear process, from enquiry to delivery.
          </h2>
        </div>
      </div>

      <div className="max-w-[1100px] mx-auto px-14 py-20 max-[980px]:px-6 max-[980px]:py-14">
        <div className="bg-ocean-light rounded-lg p-14 flex items-center justify-between gap-8 flex-wrap max-[700px]:p-8">
          <div>
            <h3 className="font-display text-[24px] text-navy font-semibold mb-1.5">
              Ready to start a requirement?
            </h3>
            <p className="text-ink-muted text-[15.5px] m-0">
              Send us the details and we'll take it from there.
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
