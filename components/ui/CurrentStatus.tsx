interface CurrentStatusProps {
  statusLine: string;
  nextAction: string;
  responsible: string;
  lastUpdatedBy: string;
  lastUpdatedAt: string;
  assignedTo?: string;
}

export default function CurrentStatus({
  statusLine,
  nextAction,
  responsible,
  lastUpdatedBy,
  lastUpdatedAt,
  assignedTo,
}: CurrentStatusProps) {
  return (
    <div className="bg-ocean-light border border-[#CFE0EF] rounded-md px-6 py-5">
      <div className="text-xs uppercase tracking-wide text-ocean-hover font-bold mb-2.5">
        Current Status
      </div>
      <div className="text-[16px] text-navy leading-relaxed mb-3.5">
        {statusLine}
        <br />
        Next action: <b>{nextAction}</b>
      </div>
      <div className="flex flex-wrap gap-7 text-[13.5px]">
        <div>
          <span className="block text-ink-muted text-xs mb-0.5">Responsible</span>
          <b className="text-navy text-[14.5px]">{responsible}</b>
        </div>
        <div>
          <span className="block text-ink-muted text-xs mb-0.5">Last updated</span>
          <b className="text-navy text-[14.5px]">
            {lastUpdatedBy} · {lastUpdatedAt}
          </b>
        </div>
        {assignedTo && (
          <div>
            <span className="block text-ink-muted text-xs mb-0.5">Assigned to</span>
            <b className="text-navy text-[14.5px]">{assignedTo}</b>
          </div>
        )}
      </div>
    </div>
  );
}
