export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  light = false,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  light?: boolean;
}) {
  return (
    <div
      className={
        align === "center"
          ? "max-w-[620px] mx-auto text-center mb-14"
          : "max-w-[620px] mb-14"
      }
    >
      {eyebrow && (
        <div className={`text-sm font-semibold mb-3 tracking-wide ${light ? "text-gold" : "text-ocean"}`}>
          {eyebrow.toUpperCase()}
        </div>
      )}
      <h2
        className={`font-display text-[34px] leading-[1.2] font-semibold mb-4 max-[700px]:text-[26px] ${
          light ? "text-white" : "text-navy"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`text-[16.5px] leading-relaxed ${light ? "text-white/70" : "text-ink-muted"}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
