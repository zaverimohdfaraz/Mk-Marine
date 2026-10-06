import Link from "next/link";
import SiteHeader from "@/components/site/SiteHeader";
import SiteFooter from "@/components/site/SiteFooter";
import PublicPageExtras from "@/components/site/PublicPageExtras";
import SectionHeading from "@/components/site/SectionHeading";
import { siteImages, SiteImageKey } from "@/lib/site-images";

interface ServiceDetail {
  title: string;
  summary: string;
  includes: string[];
  image: SiteImageKey;
}

const SERVICES: ServiceDetail[] = [
  {
    title: "Marine Consulting",
    summary: "Practical coordination, technical communication and procurement assistance for marine businesses managing vessel requirements.",
    includes: [
      "Reviewing the requirement and clarifying technical details",
      "Advising on realistic timelines and sourcing options",
      "Coordinating communication between the parties involved",
    ],
    image: "cargoShipBow",
  },
  {
    title: "Vessel Support",
    summary: "Assistance with vessel-related requirements, spare parts, supplier coordination, documentation, and follow-up.",
    includes: [
      "Support around scheduled maintenance and port calls",
      "Coordination with your appointed suppliers where needed",
      "Documentation for customs and onboard records",
    ],
    image: "aerialCargoShip",
  },
  {
    title: "Marine Spare Parts Trading",
    summary: "Sourcing and trading of marine spare parts according to vessel and equipment requirements.",
    includes: [
      "Main engine, auxiliary, electrical and deck components",
      "Identification of compatible alternatives where needed",
      "Quotations with clear delivery and payment terms",
    ],
    image: "industrialValves",
  },
  {
    title: "Procurement & Sourcing",
    summary: "Supplier coordination, quotation comparison, availability checks, pricing discussions, and purchase coordination.",
    includes: [
      "Checking availability across our supplier network",
      "Comparing pricing and delivery timelines",
      "Managing the purchase order through to fulfilment",
    ],
    image: "portCrane",
  },
  {
    title: "Supplier Coordination",
    summary: "Ongoing communication with suppliers to keep a requirement moving — confirmations, revised timelines and delivery updates.",
    includes: [
      "Following up on order confirmations and dispatch",
      "Flagging delays or availability changes early",
      "Keeping documentation aligned between supplier and client",
    ],
    image: "largeCargoShip",
  },
  {
    title: "Technical Requirement Coordination",
    summary: "Helping translate vessel requirements into clear procurement and supplier requests.",
    includes: [
      "Clarifying part numbers, specifications and quantities",
      "Identifying suitable alternatives when needed",
      "Translating technical detail into a sourceable requirement",
    ],
    image: "heroContainerShip",
  },
  {
    title: "Commercial Coordination",
    summary: "Managing enquiries, quotations, orders, supplier communication, and commercial follow-up.",
    includes: [
      "Quotation preparation with transparent terms",
      "Order and delivery scheduling coordination",
      "Payment and documentation follow-up",
    ],
    image: "cargoShipBow",
  },
];

export default function ServicesPage() {
  return (
    <div>
      <SiteHeader />

      <div className="bg-navy-deep text-white px-14 pt-24 pb-28 max-[980px]:px-6 max-[980px]:pt-16 max-[980px]:pb-16">
        <div className="max-w-[1280px] mx-auto">
          <div className="text-gold text-[15px] font-semibold mb-3.5">SERVICES</div>
          <h1 className="font-display text-[46px] leading-[1.15] font-semibold mb-5 max-w-2xl max-[860px]:text-[32px]">
            Commercial and technical support, built for vessel operators
          </h1>
          <p className="text-white/75 text-[18px] max-w-xl leading-relaxed">
            From sourcing a single component to coordinating delivery at port,
            MK Marine Services supports the full requirement — start to finish.
          </p>
        </div>
      </div>

      <div className="max-w-[1160px] mx-auto px-14 py-20 max-[980px]:px-6 max-[980px]:py-14">
        <div className="space-y-24">
          {SERVICES.map((s, i) => {
            const img = siteImages[s.image];
            const reversed = i % 2 === 1;
            return (
              <div
                key={s.title}
                className="grid grid-cols-2 gap-14 items-center max-[860px]:grid-cols-1 max-[860px]:gap-8"
              >
                <div className={reversed ? "order-2 max-[860px]:order-1" : "order-1"}>
                  <div className="font-display text-sm text-gold font-semibold mb-3">{`0${i + 1}`}</div>
                  <h2 className="text-[26px] text-navy font-semibold mb-3">{s.title}</h2>
                  <p className="text-[15.5px] text-ink-muted leading-relaxed mb-5">{s.summary}</p>
                  <div className="mb-6">
                    <div className="text-xs text-ink-faint uppercase tracking-wide font-semibold mb-2.5">What it includes</div>
                    <ul className="space-y-2">
                      {s.includes.map((item) => (
                        <li key={item} className="flex items-start gap-2.5 text-[14.5px] text-ink">
                          <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link href="/request-quote" className="text-ocean text-[14.5px] font-semibold">
                    Request a Quote &rarr;
                  </Link>
                </div>
                <div className={`rounded-lg overflow-hidden shadow-card border border-border-soft ${reversed ? "order-1 max-[860px]:order-2" : "order-2"}`}>
                  <img src={img.src} alt={img.alt} className="w-full h-[320px] object-cover" />
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-20 bg-ocean-light rounded-lg p-14 flex items-center justify-between gap-8 flex-wrap max-[700px]:p-8">
          <div>
            <h3 className="font-display text-[24px] text-navy font-semibold mb-2">
              Not sure which service you need?
            </h3>
            <p className="text-ink-muted text-[15.5px] m-0">
              Tell us the requirement — we'll point you to the right one.
            </p>
          </div>
          <Link href="/contact" className="inline-flex items-center justify-center min-h-[48px] px-7 rounded-sm bg-ocean text-white text-[15.5px] font-semibold">
            Contact Us
          </Link>
        </div>
      </div>

      <SiteFooter />
      <PublicPageExtras />
    </div>
  );
}
