import SiteHeader from "@/components/site/SiteHeader";
import SiteFooter from "@/components/site/SiteFooter";
import Link from "next/link";

const SERVICES = [
  { title: "Marine Spare Parts", copy: "Main engine components, pumps, valves, bearings, gaskets, filters, seals, electrical components, hydraulic parts and other marine requirements — sourced against your part number or requirement." },
  { title: "Vessel Support", copy: "Support for vessel operators and technical requirements, coordinated around your maintenance schedule and port calls, so components are ready when the vessel needs them." },
  { title: "Procurement & Sourcing", copy: "Sourcing marine equipment and components through supplier networks, with transparent quotations and realistic lead times communicated up front." },
  { title: "Marine Equipment", copy: "Equipment and components for vessel operations and scheduled maintenance, across main engine, deck machinery, electrical and general supplies." },
  { title: "Technical Enquiries", copy: "Helping clients identify and source required components, including compatible alternatives when the original part number isn't readily available." },
  { title: "Commercial Support", copy: "Quotation, procurement coordination, delivery scheduling and documentation, handled end to end so you have one point of contact." },
];

export default function ServicesPage() {
  return (
    <div>
      <SiteHeader />

      <div className="bg-navy-deep text-white px-14 pt-20 pb-24 max-[860px]:px-6 max-[860px]:pt-14 max-[860px]:pb-16">
        <div className="max-w-[1280px] mx-auto">
          <div className="text-gold text-[15px] font-semibold mb-3.5">SERVICES</div>
          <h1 className="font-display text-[44px] leading-[1.15] font-semibold mb-5 max-w-2xl max-[860px]:text-[30px]">
            Commercial and technical support, built for vessel operators
          </h1>
          <p className="text-white/75 text-[17px] max-w-xl leading-relaxed">
            From sourcing a single component to coordinating delivery at port,
            MK Marine Services supports the full requirement — start to finish.
          </p>
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto px-14 py-20 max-[860px]:px-6 max-[860px]:py-14">
        <div className="grid grid-cols-2 gap-7 max-[860px]:grid-cols-1">
          {SERVICES.map((s) => (
            <div key={s.title} className="border border-border rounded-md p-9 hover:border-ocean transition-colors">
              <h3 className="text-[21px] text-navy font-semibold mb-3">{s.title}</h3>
              <p className="text-[15.5px] text-ink-muted leading-relaxed mb-5">{s.copy}</p>
              <Link href="/request-quote" className="text-ocean text-[14.5px] font-semibold">
                Request a Quote →
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-ocean-light rounded-lg p-14 flex items-center justify-between gap-8 flex-wrap max-[700px]:p-8">
          <div>
            <h3 className="font-display text-[26px] text-navy font-semibold mb-2">
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
    </div>
  );
}
