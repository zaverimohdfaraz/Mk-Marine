import SiteHeader from "@/components/site/SiteHeader";
import SiteFooter from "@/components/site/SiteFooter";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div>
      <SiteHeader />

      <div className="bg-navy-deep text-white px-14 pt-20 pb-24 max-[860px]:px-6 max-[860px]:pt-14 max-[860px]:pb-16">
        <div className="max-w-[1280px] mx-auto">
          <div className="text-gold text-[15px] font-semibold mb-3.5">ABOUT</div>
          <h1 className="font-display text-[44px] leading-[1.15] font-semibold mb-5 max-w-2xl max-[860px]:text-[30px]">
            MK Marine Services India LLP
          </h1>
          <p className="text-white/75 text-[17px] max-w-xl leading-relaxed">
            We support vessel operators with marine spare parts, procurement and
            technical enquiries — helping identify the right component and
            coordinate it through to delivery.
          </p>
        </div>
      </div>

      <div className="max-w-[1000px] mx-auto px-14 py-20 max-[860px]:px-6 max-[860px]:py-14">
        <div className="grid grid-cols-2 gap-14 mb-16 max-[860px]:grid-cols-1 max-[860px]:gap-10">
          <div>
            <h2 className="font-display text-[24px] text-navy font-semibold mb-3">What we do</h2>
            <p className="text-ink-muted text-[15.5px] leading-relaxed">
              Replace this placeholder copy with your company's real focus areas —
              the vessel types you typically support, the component categories you
              specialise in, and the regions or ports you cover most.
            </p>
          </div>
          <div>
            <h2 className="font-display text-[24px] text-navy font-semibold mb-3">How we work</h2>
            <p className="text-ink-muted text-[15.5px] leading-relaxed">
              Every requirement moves from enquiry to sourcing to a clear
              quotation, with one point of contact coordinating delivery and
              documentation — replace with details on your own process.
            </p>
          </div>
        </div>

        <div className="border-t border-border-soft pt-10">
          <h2 className="font-display text-[24px] text-navy font-semibold mb-3">A note on this page</h2>
          <p className="text-ink-muted text-[15.5px] leading-relaxed">
            This is placeholder copy — replace it with your company's real
            history, focus areas, leadership, or anything else you'd like
            prospective clients to know. Per the original brief, we've avoided
            adding unsupported claims about certifications, fleet size, years in
            business, or major clients — add those once you have real, verifiable
            details to share.
          </p>
        </div>

        <div className="mt-16 bg-ocean-light rounded-lg p-12 text-center">
          <h3 className="font-display text-[22px] text-navy font-semibold mb-2">
            Want to know more?
          </h3>
          <p className="text-ink-muted text-[15px] mb-6">Get in touch and we'll be happy to help.</p>
          <Link href="/contact" className="inline-flex items-center justify-center min-h-[48px] px-7 rounded-sm bg-ocean text-white text-[15.5px] font-semibold">
            Contact Us
          </Link>
        </div>
      </div>

      <SiteFooter />
    </div>
  );
}
