import { ReactNode } from "react";
import Link from "next/link";

export function Panel({
  title,
  count,
  action,
  actionHref,
  children,
}: {
  title: string;
  count?: number;
  action?: string;
  actionHref?: string;
  children: ReactNode;
}) {
  return (
    <div className="bg-white border border-border rounded-md mb-5 overflow-hidden shadow-card">
      <div className="flex items-center justify-between px-5 py-4 border-b border-border-soft">
        <h3 className="text-[15.5px] font-bold text-navy m-0 flex items-center gap-2">
          {title}
          {typeof count === "number" && count > 0 && (
            <span className="bg-danger text-white text-xs font-bold px-2 py-0.5 rounded-full">
              {count}
            </span>
          )}
        </h3>
        {action && actionHref && (
          <Link href={actionHref} className="text-[13.5px] text-ocean font-semibold">
            {action}
          </Link>
        )}
      </div>
      <div className="px-5 pb-4 pt-1.5">{children}</div>
    </div>
  );
}

export function EmptyState({
  title,
  description,
  actionLabel,
}: {
  title: string;
  description: string;
  actionLabel?: string;
}) {
  return (
    <div className="text-center py-12 px-6">
      <div className="text-[17px] font-semibold text-navy mb-2">{title}</div>
      <p className="text-[14.5px] text-ink-muted max-w-md mx-auto mb-5">{description}</p>
      {actionLabel && (
        <button className="inline-flex items-center justify-center min-h-[44px] px-6 rounded-sm bg-ocean text-white text-[15px] font-semibold">
          {actionLabel}
        </button>
      )}
    </div>
  );
}
