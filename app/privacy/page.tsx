import SiteHeader from "@/components/site/SiteHeader";
import SiteFooter from "@/components/site/SiteFooter";

export default function PrivacyPage() {
  return (
    <div>
      <SiteHeader />
      <div className="max-w-[720px] mx-auto px-12 py-16 max-[860px]:px-6">
        <h1 className="font-display text-[32px] text-navy font-semibold mb-5">Privacy Policy</h1>
        <p className="text-ink-muted text-[15px] leading-relaxed">
          Placeholder page. Replace this with MK Marine Services India LLP's
          real privacy policy — how enquiry and contact form data is
          collected, used and stored.
        </p>
      </div>
      <SiteFooter />
    </div>
  );
}
