import Link from "next/link";
import SiteHeader from "@/components/site/SiteHeader";
import SiteFooter from "@/components/site/SiteFooter";
import PublicPageExtras from "@/components/site/PublicPageExtras";
import Button from "@/components/ui/Button";
import { siteContact } from "@/lib/site-contact";

const ENQUIRY_TYPES = [
  { title: "General Enquiries", copy: "Questions about MK Marine Services, our capabilities, or anything not covered below." },
  { title: "Spare Parts", copy: "Looking for a specific part number, component, or category of marine equipment." },
  { title: "Vessel Support", copy: "Technical or commercial support tied to a specific vessel or port call." },
  { title: "Request a Quote", copy: "Ready with a requirement, vessel and timeline — get a formal quotation." },
];

export default function ContactPage() {
  return (
    <div>
      <SiteHeader />

      <div className="bg-navy-deep text-white px-14 pt-24 pb-28 max-[980px]:px-6 max-[980px]:pt-16 max-[980px]:pb-16">
        <div className="max-w-[1280px] mx-auto">
          <div className="text-gold text-[15px] font-semibold mb-3.5">CONTACT</div>
          <h1 className="font-display text-[46px] leading-[1.15] font-semibold mb-5 max-w-2xl max-[860px]:text-[32px]">
            Contact our team
          </h1>
          <p className="text-white/75 text-[18px] max-w-xl leading-relaxed">
            Have a requirement, a question, or want to talk through what we
            can support? Reach us any of these ways.
          </p>
        </div>
      </div>

      <div className="max-w-[1100px] mx-auto px-14 py-20 max-[980px]:px-6 max-[980px]:py-14">
        {/* CONTACT DETAILS */}
        <div className="grid grid-cols-5 gap-6 mb-16 max-[980px]:grid-cols-2 max-[560px]:grid-cols-1">
          <div className="border border-border rounded-md p-7">
            <span className="block text-xs text-ink-faint uppercase tracking-wide mb-2">Email</span>
            <b className="text-navy text-[15.5px] block leading-snug">{siteContact.email}</b>
          </div>
          <div className="border border-border rounded-md p-7">
            <span className="block text-xs text-ink-faint uppercase tracking-wide mb-2">Phone</span>
            <b className="text-navy text-[15.5px] block">{siteContact.phone}</b>
          </div>
          <div className="border border-border rounded-md p-7">
            <a href={siteContact.whatsappHref} target="_blank" rel="noopener noreferrer" className="block">
              <span className="block text-xs text-ink-faint uppercase tracking-wide mb-2">WhatsApp</span>
              <b className="text-navy text-[15.5px] block">{siteContact.whatsappNumber}</b>
            </a>
          </div>
          <div className="border border-border rounded-md p-7">
            <span className="block text-xs text-ink-faint uppercase tracking-wide mb-2">Location</span>
            <b className="text-navy text-[15.5px] block leading-snug">{siteContact.address}</b>
          </div>
          <div className="border border-border rounded-md p-7">
            <span className="block text-xs text-ink-faint uppercase tracking-wide mb-2">Business Hours</span>
            <b className="text-navy text-[15.5px] block">{siteContact.hours}</b>
          </div>
        </div>

        {/* ENQUIRY TYPES */}
        <h2 className="font-display text-[22px] text-navy font-semibold mb-6">What's your enquiry about?</h2>
        <div className="grid grid-cols-4 gap-5 mb-16 max-[980px]:grid-cols-2 max-[560px]:grid-cols-1">
          {ENQUIRY_TYPES.map((e) => (
            <div key={e.title} className="border border-border rounded-md p-6">
              <h3 className="text-navy text-[15px] font-semibold mb-2">{e.title}</h3>
              <p className="text-ink-muted text-[13.5px] leading-relaxed">{e.copy}</p>
            </div>
          ))}
        </div>

        {/* FORM */}
        <div className="grid grid-cols-[1.3fr_1fr] gap-16 max-[860px]:grid-cols-1 max-[860px]:gap-10">
          <div>
            <h2 className="font-display text-[22px] text-navy font-semibold mb-5">Send us a message</h2>
            <form className="space-y-5">
              <div className="grid grid-cols-2 gap-5">
                <Field label="Name" required />
                <Field label="Company" />
              </div>
              <div className="grid grid-cols-2 gap-5">
                <Field label="Email" type="email" required />
                <Field label="Phone" type="tel" />
              </div>
              <div>
                <label className="block font-semibold text-[14px] mb-1.5">Enquiry Type</label>
                <select className="w-full px-3.5 py-3 border-[1.5px] border-border rounded-sm text-[15px]">
                  <option>General Enquiries</option>
                  <option>Spare Parts</option>
                  <option>Vessel Support</option>
                  <option>Request a Quote</option>
                </select>
              </div>
              <div>
                <label className="block font-semibold text-[14px] mb-1.5">Message</label>
                <textarea rows={5} className="w-full px-3.5 py-3 border-[1.5px] border-border rounded-sm text-[15px]" />
              </div>
              <Button type="submit" fullWidth>Send Message</Button>
            </form>
          </div>
          <div>
            <h2 className="font-display text-[20px] text-navy font-semibold mb-4">Prefer to send a requirement directly?</h2>
            <p className="text-ink-muted text-[15px] leading-relaxed mb-5">
              If you already know the vessel, the part and the timeline, the
              Request a Quote form gets it to the right place faster than a
              general message.
            </p>
            <Link href="/request-quote" className="inline-flex items-center justify-center min-h-[48px] px-7 rounded-sm bg-ocean text-white text-[15.5px] font-semibold">
              Request a Quote
            </Link>
          </div>
        </div>

        <p className="text-[13px] text-ink-faint mt-16">
          Placeholder contact details — replace with your real information.
        </p>
      </div>

      <SiteFooter />
      <PublicPageExtras />
    </div>
  );
}

function Field({ label, type = "text", required }: { label: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="block font-semibold text-[14px] mb-1.5">
        {label} {required && <span className="text-danger">*</span>}
      </label>
      <input type={type} required={required} className="w-full px-3.5 py-3 border-[1.5px] border-border rounded-sm text-[15px]" />
    </div>
  );
}
