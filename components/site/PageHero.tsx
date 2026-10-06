import Link from "next/link";
import { siteImages, SiteImageKey } from "@/lib/site-images";

export default function PageHero({
  eyebrow,
  titleLines,
  subtitle,
  image,
  ctaLabel,
  ctaHref = "/request-quote",
  secondaryLabel,
  secondaryHref,
}: {
  eyebrow: string;
  titleLines: string[];
  subtitle: string;
  image: SiteImageKey;
  ctaLabel?: string;
  ctaHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}) {
  const img = siteImages[image];
  return (
    <div className="relative text-white px-14 pt-28 pb-28 overflow-hidden max-[980px]:px-6 max-[980px]:pt-20 max-[980px]:pb-16">
      <img src={img.src} alt={img.alt} className="absolute inset-0 w-full h-full object-cover z-0" />
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-navy-deep/92 via-navy/85 to-navy-deep/95" />
      <div className="max-w-[1280px] mx-auto relative z-[2]">
        <div className="text-gold text-sm font-semibold tracking-wide mb-6">{eyebrow.toUpperCase()}</div>
        <h1 className="font-display font-semibold leading-[0.98] mb-8">
          {titleLines.map((line) => (
            <span key={line} className="block text-[64px] max-[980px]:text-[38px] max-[600px]:text-[32px]">
              {line}
            </span>
          ))}
        </h1>
        <p className="text-white/78 text-[18px] max-w-[540px] leading-relaxed mb-9">{subtitle}</p>
        {(ctaLabel || secondaryLabel) && (
          <div className="flex gap-3 flex-wrap">
            {ctaLabel && (
              <Link href={ctaHref} className="inline-flex items-center justify-center min-h-[50px] px-7 rounded-sm bg-gold text-[#241C08] text-[15.5px] font-semibold">
                {ctaLabel}
              </Link>
            )}
            {secondaryLabel && secondaryHref && (
              <Link href={secondaryHref} className="inline-flex items-center justify-center min-h-[50px] px-7 rounded-sm border-[1.5px] border-white/40 text-white text-[15.5px] font-semibold">
                {secondaryLabel}
              </Link>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
