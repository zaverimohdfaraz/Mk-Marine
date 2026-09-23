"use client";

import { useState } from "react";
import SiteHeader from "@/components/site/SiteHeader";
import SiteFooter from "@/components/site/SiteFooter";
import Button from "@/components/ui/Button";

const STEPS = [
  { title: "We review your requirement", copy: "Vessel, part and timeline get checked against our supplier network." },
  { title: "You receive a quotation", copy: "Clear pricing, delivery terms and payment terms, usually within 1-2 business days." },
  { title: "We coordinate delivery", copy: "Once confirmed, we handle sourcing, documentation and delivery scheduling." },
];

export default function RequestQuotePage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div>
      <SiteHeader />

      <div className="bg-navy-deep text-white px-14 pt-20 pb-24 max-[860px]:px-6 max-[860px]:pt-14 max-[860px]:pb-16">
        <div className="max-w-[1280px] mx-auto">
          <div className="text-gold text-[15px] font-semibold mb-3.5">REQUEST A QUOTE</div>
          <h1 className="font-display text-[44px] leading-[1.15] font-semibold mb-5 max-w-2xl max-[860px]:text-[30px]">
            Tell us what you need
          </h1>
          <p className="text-white/75 text-[17px] max-w-xl leading-relaxed">
            Share the vessel, the requirement and your timeline. We'll come back
            with a quotation.
          </p>
        </div>
      </div>

      <div className="max-w-[1100px] mx-auto px-14 py-20 max-[860px]:px-6 max-[860px]:py-14">
        <div className="grid grid-cols-[1.5fr_1fr] gap-16 max-[860px]:grid-cols-1 max-[860px]:gap-10">
          <div>
            {submitted ? (
              <div className="bg-ocean-light border border-[#CFE0EF] rounded-md p-10 text-center">
                <h3 className="font-display text-2xl text-navy font-semibold mb-3">
                  Thank you — your request has been received.
                </h3>
                <p className="text-ink-muted text-[15px]">
                  Our team will review your requirement and follow up shortly. Once
                  a database is connected (Phase 3+), this submission will also
                  appear automatically as a New Enquiry in the Operations Portal.
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
                className="space-y-6"
              >
                <Field label="Name" required />
                <Field label="Company" required />
                <div className="grid grid-cols-2 gap-5">
                  <Field label="Email" type="email" required />
                  <Field label="Phone" type="tel" />
                </div>
                <div className="grid grid-cols-2 gap-5">
                  <Field label="Vessel Name" />
                  <Field label="IMO / Vessel Reference" />
                </div>
                <Field label="Requirement" required />
                <div className="grid grid-cols-2 gap-5">
                  <Field label="Marine Product / Part Number" />
                  <Field label="Quantity" />
                </div>
                <div className="grid grid-cols-2 gap-5">
                  <Field label="Preferred Delivery Location" />
                  <Field label="Required Date" />
                </div>
                <div>
                  <label className="block font-semibold text-[14px] mb-1.5">Message</label>
                  <textarea rows={4} className="w-full px-3.5 py-3 border-[1.5px] border-border rounded-sm text-[15px]" />
                </div>
                <Button type="submit" fullWidth>Request a Quote</Button>
              </form>
            )}
          </div>

          <div>
            <h2 className="font-display text-[20px] text-navy font-semibold mb-6">What happens next</h2>
            <div className="space-y-7">
              {STEPS.map((s, i) => (
                <div key={s.title} className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-ocean-light text-ocean-hover flex items-center justify-center font-bold text-[14px] flex-shrink-0">
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="text-navy text-[15.5px] font-semibold mb-1">{s.title}</h3>
                    <p className="text-ink-muted text-[14px] leading-relaxed">{s.copy}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <SiteFooter />
    </div>
  );
}

function Field({
  label,
  type = "text",
  required,
}: {
  label: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block font-semibold text-[14px] mb-1.5">
        {label} {required && <span className="text-danger">*</span>}
      </label>
      <input
        type={type}
        required={required}
        className="w-full px-3.5 py-3 border-[1.5px] border-border rounded-sm text-[15px]"
      />
    </div>
  );
}
