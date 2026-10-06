import { siteImages, SiteImageKey } from "@/lib/site-images";

export default function ImageMoment({
  image,
  lines,
  height = "h-[480px] max-[700px]:h-[340px]",
}: {
  image: SiteImageKey;
  lines: string[];
  height?: string;
}) {
  const img = siteImages[image];
  return (
    <div className={`relative overflow-hidden ${height}`}>
      <img src={img.src} alt={img.alt} className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-navy-deep/50" />
      <div className="relative z-[1] h-full flex items-center px-14 max-[860px]:px-6">
        <h2 className="font-display text-white font-semibold leading-[1.05]">
          {lines.map((line) => (
            <span key={line} className="block text-[46px] max-[860px]:text-[28px]">
              {line}
            </span>
          ))}
        </h2>
      </div>
    </div>
  );
}
