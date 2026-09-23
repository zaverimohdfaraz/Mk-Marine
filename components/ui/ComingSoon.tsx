export default function ComingSoon({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div>
      <h1 className="font-display text-2xl text-navy font-semibold mb-6">{title}</h1>
      <div className="bg-white border border-border rounded-md p-12 text-center">
        <div className="text-[17px] font-semibold text-navy mb-2">
          This module is scheduled for a later phase.
        </div>
        <p className="text-[14.5px] text-ink-muted max-w-md mx-auto">{description}</p>
      </div>
    </div>
  );
}
