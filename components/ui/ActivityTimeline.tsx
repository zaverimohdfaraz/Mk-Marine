import { ActivityEvent } from "@/lib/types";

export default function ActivityTimeline({ events }: { events: ActivityEvent[] }) {
  return (
    <div className="border-l-2 border-border ml-1.5 pl-5">
      {events.map((event) => (
        <div key={event.id} className="relative pb-5 last:pb-0">
          <span className="absolute -left-[27px] top-1 w-[11px] h-[11px] rounded-full bg-ocean border-2 border-white shadow-[0_0_0_1px_#DCE3E9]" />
          <div className="font-semibold text-[14.5px] text-navy">{event.user}</div>
          <div className="text-[14.5px] text-ink mt-0.5 mb-1">
            {event.action}
            {event.relatedLabel ? (
              <span className="text-ink-muted"> — {event.relatedLabel}</span>
            ) : null}
          </div>
          <div className="text-[12.5px] text-ink-faint">{event.timestamp}</div>
        </div>
      ))}
    </div>
  );
}
