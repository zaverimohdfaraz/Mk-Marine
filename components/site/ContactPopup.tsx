"use client";

import { useEffect, useState } from "react";
import Button from "@/components/ui/Button";
import { siteImages } from "@/lib/site-images";
import { siteContact } from "@/lib/site-contact";

const ENTERED_AT_KEY = "mk_site_entered_at";
const DISMISSED_KEY = "mk_popup_dismissed";
const DELAY_MS = 30000;

export default function ContactPopup() {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (localStorage.getItem(DISMISSED_KEY) === "1") return;

    let enteredAt = localStorage.getItem(ENTERED_AT_KEY);
    if (!enteredAt) {
      enteredAt = String(Date.now());
      localStorage.setItem(ENTERED_AT_KEY, enteredAt);
    }

    const elapsed = Date.now() - Number(enteredAt);
    const remaining = Math.max(0, DELAY_MS - elapsed);

    const timer = setTimeout(() => setOpen(true), remaining);
    return () => clearTimeout(timer);
  }, []);

  function close() {
    setOpen(false);
    localStorage.setItem(DISMISSED_KEY, "1");
  }

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[200] bg-navy-deep/75 flex items-center justify-center p-5">
      <div className="relative w-[75vw] h-[75vh] max-w-[1000px] max-h-[680px] min-h-[420px] bg-white rounded-lg overflow-hidden shadow-2xl grid grid-cols-2 max-[760px]:grid-cols-1 max-[760px]:h-auto max-[760px]:max-h-[90vh] max-[760px]:overflow-y-auto">
        <button
          onClick={close}
          aria-label="Close"
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/90 hover:bg-white text-navy flex items-center justify-center text-xl font-semibold shadow"
        >
          &times;
        </button>

        {/* Left — hero-style image + typography, matching the homepage hero */}
        <div className="relative hidden max-[760px]:block max-[760px]:h-[160px] md:block">
          <img
            src={siteImages.heroContainerShip.src}
            alt={siteImages.heroContainerShip.alt}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/90 via-navy/85 to-navy-deep/92" />
          <div className="relative z-[1] h-full flex flex-col justify-center px-9 py-10 max-[760px]:px-6 max-[760px]:py-6">
            <h2 className="font-display text-white font-semibold leading-[1.05] mb-4">
              <span className="block text-[28px] max-[760px]:text-[20px]">Have a requirement?</span>
              <span className="block text-[28px] max-[760px]:text-[20px] text-gold">Let's start there.</span>
            </h2>
            <p className="text-white/75 text-[14px] leading-relaxed max-w-[280px] max-[760px]:hidden">
              Send us the vessel, the part and the timeline — our team will
              come back with a quotation.
            </p>
          </div>
        </div>

        {/* Right — form */}
        <div className="px-10 py-10 flex flex-col justify-center max-[760px]:px-6 max-[760px]:py-8">
          {submitted ? (
            <div>
              <h3 className="font-display text-navy text-[20px] font-semibold mb-2">Thank you.</h3>
              <p className="text-ink-muted text-[14.5px] leading-relaxed">
                Your message has been received. Our team will follow up shortly.
              </p>
              <Button onClick={close} className="mt-6">Close</Button>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
              className="space-y-4"
            >
              <h3 className="font-display text-navy text-[19px] font-semibold mb-1">Get in touch</h3>
              <p className="text-ink-faint text-[13px] mb-3">
                Or reach us directly on WhatsApp at {siteContact.whatsappNumber}.
              </p>
              <div>
                <label className="block font-semibold text-[13.5px] mb-1.5">Name</label>
                <input required className="w-full px-3.5 py-2.5 border-[1.5px] border-border rounded-sm text-[14.5px]" />
              </div>
              <div>
                <label className="block font-semibold text-[13.5px] mb-1.5">Email</label>
                <input type="email" required className="w-full px-3.5 py-2.5 border-[1.5px] border-border rounded-sm text-[14.5px]" />
              </div>
              <div>
                <label className="block font-semibold text-[13.5px] mb-1.5">What do you need?</label>
                <textarea rows={3} className="w-full px-3.5 py-2.5 border-[1.5px] border-border rounded-sm text-[14.5px]" />
              </div>
              <Button type="submit" fullWidth>Send</Button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
