export interface ProcessStep {
  n: string;
  title: string;
  copy: string;
}

export default function ProcessSteps({ steps }: { steps: ProcessStep[] }) {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(210px,1fr))] gap-x-6 gap-y-10">
      {steps.map((s, i) => (
        <div key={s.n} className="relative pl-0">
          <div className="flex items-center gap-3 mb-3.5">
            <span className="font-display text-[15px] font-bold text-gold">{s.n}</span>
            <span className="flex-1 h-px bg-border" />
          </div>
          <h3 className="text-navy text-[17px] font-semibold mb-2">{s.title}</h3>
          <p className="text-ink-muted text-[14.5px] leading-relaxed">{s.copy}</p>
        </div>
      ))}
    </div>
  );
}
