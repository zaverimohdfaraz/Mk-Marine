import Link from "next/link";
import SiteHeader from "@/components/site/SiteHeader";
import SiteFooter from "@/components/site/SiteFooter";

const SERVICES = [
  {
    n: "01",
    title: "Marine Spare Parts",
    copy: "Main engine components, pumps, valves, bearings, gaskets, filters, seals, electrical and hydraulic parts for a wide range of vessel requirements.",
    icon: (
      <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M19.4 13a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V19a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 17.6a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 13 1.65 1.65 0 0 0 3.17 12H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 7a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 2.68 1.65 1.65 0 0 0 10 1.17V1a2 2 0 0 1 4 0v.09A1.65 1.65 0 0 0 15 2.68a1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.32 7a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>
    ),
  },
  {
    n: "02",
    title: "Vessel Support",
    copy: "Technical and commercial support for vessel operators, coordinated around your maintenance schedule and port calls.",
    icon: (
      <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="2.5"/><path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M5.6 18.4l2.8-2.8M15.6 8.4l2.8-2.8"/></svg>
    ),
  },
  {
    n: "03",
    title: "Procurement & Sourcing",
    copy: "Sourcing marine equipment and components through an established supplier network, with transparent quotations.",
    icon: (
      <svg viewBox="0 0 24 24"><path d="M21 8l-9-5-9 5 9 5 9-5z"/><path d="M3 8v8l9 5 9-5V8"/><path d="M12 13v8"/></svg>
    ),
  },
  {
    n: "04",
    title: "Marine Equipment",
    copy: "Equipment and components to support vessel operations and scheduled maintenance.",
    icon: (
      <svg viewBox="0 0 24 24"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>
    ),
  },
  {
    n: "05",
    title: "Technical Enquiries",
    copy: "Help identifying the correct component, part number and compatible alternatives for your requirement.",
    icon: (
      <svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></svg>
    ),
  },
  {
    n: "06",
    title: "Commercial Support",
    copy: "Quotation, procurement coordination, delivery scheduling and documentation, handled end to end.",
    icon: (
      <svg viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><path d="M9 15l2 2 4-4"/></svg>
    ),
  },
];

const PROCESS = [
  { step: "01", title: "You send the requirement", copy: "Vessel, part or requirement, and your timeline — through Request a Quote or directly to our team." },
  { step: "02", title: "We source it", copy: "We check availability and pricing across our supplier network for the right component." },
  { step: "03", title: "You get a quotation", copy: "Clear pricing, delivery terms and payment terms — no surprises later." },
  { step: "04", title: "We coordinate delivery", copy: "From confirmation through to delivery at port, with documentation handled." },
];

const VALUES = [
  { title: "Wide Supplier Network", copy: "Access to multiple suppliers per component means better availability and competitive pricing, not a single point of failure." },
  { title: "Transparent Quotations", copy: "Clear line-item pricing, delivery terms and payment terms — communicated up front, not buried in fine print." },
  { title: "Responsive Coordination", copy: "One point of contact for enquiry, sourcing, quotation and delivery — so you're not chasing multiple parties." },
];

// Photography credit: free-to-use photos under the Unsplash License
// (https://unsplash.com/license) — free for commercial use, no permission
// needed. Swap these for your own vessel/port/equipment photography
// whenever you have it; the sizing/crop params (w=.../q=...) are just
// Unsplash's on-the-fly resize API and are safe to keep or adjust.
const HERO_IMAGE =
  "https://images.unsplash.com/photo-1634638021403-70f46d19fc02?w=1800&q=80&auto=format&fit=crop";

const GALLERY = [
  {
    src: "https://images.unsplash.com/photo-1573014089159-8ee711dc5a8e?w=900&q=80&auto=format&fit=crop",
    alt: "View from a cargo vessel's bridge crossing open ocean",
    caption: "Vessel Operations",
  },
  {
    src: "https://images.unsplash.com/photo-1560964828-7f4d3a91697a?w=900&q=80&auto=format&fit=crop",
    alt: "Shipping containers and cranes at a port terminal",
    caption: "Port & Logistics",
  },
  {
    src: "https://images.unsplash.com/photo-1744113627248-8c9ba859be91?w=900&q=80&auto=format&fit=crop",
    alt: "Industrial pipework and valves",
    caption: "Marine Equipment & Spares",
  },
];

export default function HomePage() {
  return (
    <div>
      <SiteHeader />

      <div className="relative text-white px-14 pt-36 pb-40 overflow-hidden max-[860px]:px-6 max-[860px]:pt-20 max-[860px]:pb-20">
        <img
          src={HERO_IMAGE}
          alt="Container ship at sea"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        <div className="absolute inset-0 z-[1] bg-gradient-to-b from-navy-deep/95 via-navy/90 to-[#0F2A47]/85" />

        <div className="max-w-[700px] relative z-[2]">
          <div className="text-gold text-[15px] font-semibold tracking-wide mb-5">
            MARINE SPARE PARTS &amp; VESSEL SUPPORT
          </div>
          <h1 className="font-display text-[60px] leading-[1.08] font-semibold mb-6 max-[860px]:text-[38px]">
            Marine expertise. Reliable vessel support.
          </h1>
          <p className="text-xl text-white/80 max-w-[560px] mb-10 leading-relaxed">
            Marine spare parts, procurement and technical support for shipowners and
            operators who need dependable turnaround on genuine and compatible components.
          </p>
          <div className="flex gap-3.5 flex-wrap">
            <Link href="/request-quote" className="inline-flex items-center justify-center min-h-[50px] px-7 rounded-sm bg-gold text-[#241C08] text-[16px] font-semibold">
              Request a Quote
            </Link>
            <Link href="/services" className="inline-flex items-center justify-center min-h-[50px] px-7 rounded-sm border-[1.5px] border-white/40 text-white text-[16px] font-semibold">
              Explore Our Services
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto px-14 py-[104px] max-[860px]:px-6 max-[860px]:py-16">
        <div className="max-w-[620px] mx-auto text-center mb-16">
          <div className="text-ocean text-[15px] font-semibold mb-3">WHAT WE DO</div>
          <h2 className="font-display text-[38px] text-navy font-semibold mb-4">
            Commercial and technical support, built for vessel operators
          </h2>
          <p className="text-ink-muted text-[17px] leading-relaxed">
            From sourcing a single component to coordinating delivery at port, we support
            the full requirement.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-px bg-border border border-border max-[860px]:grid-cols-1">
          {SERVICES.map((s) => (
            <div key={s.n} className="bg-white px-9 py-11">
              <div className="w-12 h-12 rounded-full bg-ocean-light flex items-center justify-center mb-5">
                <span className="w-[22px] h-[22px] text-ocean-hover [&_svg]:w-full [&_svg]:h-full [&_svg]:fill-none [&_svg]:stroke-current [&_svg]:stroke-[1.8]">
                  {s.icon}
                </span>
              </div>
              <div className="font-display text-sm text-gold font-semibold mb-3">{s.n}</div>
              <h3 className="text-[21px] text-navy font-semibold mb-3">{s.title}</h3>
              <p className="text-[15.5px] text-ink-muted leading-relaxed">{s.copy}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-navy-deep py-24 px-14 max-[860px]:px-6 max-[860px]:py-16">
        <div className="max-w-[1280px] mx-auto">
          <div className="max-w-[620px] mx-auto text-center mb-16">
            <div className="text-gold text-[15px] font-semibold mb-3">HOW IT WORKS</div>
            <h2 className="font-display text-[34px] text-white font-semibold">
              From requirement to delivery, in four steps
            </h2>
          </div>
          <div className="grid grid-cols-4 gap-8 max-[860px]:grid-cols-1 max-[860px]:gap-10">
            {PROCESS.map((p) => (
              <div key={p.step}>
                <div className="font-display text-3xl text-gold font-semibold mb-4">{p.step}</div>
                <h3 className="text-white text-[18px] font-semibold mb-2.5">{p.title}</h3>
                <p className="text-white/65 text-[14.5px] leading-relaxed">{p.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto px-14 py-[104px] max-[860px]:px-6 max-[860px]:py-16">
        <div className="max-w-[620px] mx-auto text-center mb-16">
          <div className="text-ocean text-[15px] font-semibold mb-3">IN THE FIELD</div>
          <h2 className="font-display text-[34px] text-navy font-semibold mb-3">
            Vessels, ports and the equipment in between
          </h2>
        </div>
        <div className="grid grid-cols-3 gap-6 max-[860px]:grid-cols-1">
          {GALLERY.map((g) => (
            <div key={g.caption} className="rounded-lg overflow-hidden shadow-card border border-border-soft">
              <img src={g.src} alt={g.alt} className="w-full h-[280px] object-cover" loading="lazy" />
              <div className="px-5 py-4 bg-white">
                <span className="text-[14.5px] font-semibold text-navy">{g.caption}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto px-14 pb-[104px] max-[860px]:px-6 max-[860px]:pb-16">
        <div className="grid grid-cols-3 gap-8 max-[860px]:grid-cols-1">
          {VALUES.map((v) => (
            <div key={v.title} className="border-t-[3px] border-gold pt-6">
              <h3 className="text-navy text-[19px] font-semibold mb-2.5">{v.title}</h3>
              <p className="text-ink-muted text-[15px] leading-relaxed">{v.copy}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto px-14 max-[860px]:px-6">
        <div className="bg-ocean-light rounded-lg p-16 flex items-center justify-between gap-8 flex-wrap max-[700px]:p-9">
          <div>
            <h3 className="font-display text-[28px] text-navy font-semibold mb-2">
              Have a requirement for an upcoming port call?
            </h3>
            <p className="text-ink-muted text-[16px] m-0">
              Send us the vessel, the part and the timeline — we'll come back with a quotation.
            </p>
          </div>
          <Link href="/request-quote" className="inline-flex items-center justify-center min-h-[50px] px-7 rounded-sm bg-ocean text-white text-[16px] font-semibold">
            Request a Quote
          </Link>
        </div>
      </div>

      <div className="h-24" />
      <SiteFooter />
    </div>
  );
}
