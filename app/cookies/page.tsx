import SiteHeader from "@/components/site/SiteHeader";
import SiteFooter from "@/components/site/SiteFooter";

export default function CookiesPage() {
  return (
    <div>
      <SiteHeader />
      <div className="max-w-[720px] mx-auto px-12 py-16 max-[860px]:px-6">
        <h1 className="font-display text-[32px] text-navy font-semibold mb-5">Cookie Policy</h1>
        <p className="text-ink-muted text-[15px] leading-relaxed">
          Placeholder page. Replace this with details of any cookies the
          public site or portal set (currently: a single demo login cookie
          on the portal, described in the project README).
        </p>
      </div>
      <SiteFooter />
    </div>
  );
}
