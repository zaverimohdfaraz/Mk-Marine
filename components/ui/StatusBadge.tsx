import clsx from "clsx";
import { EnquiryStatus, Priority, QuotationStatus, SaleStatus, PurchaseStatus, PaymentStatus, ReminderStatus } from "@/lib/types";

const statusStyles: Record<EnquiryStatus, string> = {
  New: "bg-ocean-light text-ocean-hover",
  "In Progress": "bg-gold-soft text-warn",
  "Quotation Preparing": "bg-gold-soft text-warn",
  "Quotation Sent": "bg-[#EDE9FB] text-[#5B3FAE]",
  Negotiation: "bg-gold-soft text-warn",
  Confirmed: "bg-success-bg text-success",
  Completed: "bg-border-soft text-ink-muted",
  Lost: "bg-danger-bg text-danger",
};

const dotStyles: Record<EnquiryStatus, string> = {
  New: "bg-ocean",
  "In Progress": "bg-gold",
  "Quotation Preparing": "bg-gold",
  "Quotation Sent": "bg-[#7C5CD6]",
  Negotiation: "bg-gold",
  Confirmed: "bg-success",
  Completed: "bg-ink-faint",
  Lost: "bg-danger",
};

export function StatusBadge({ status }: { status: EnquiryStatus }) {
  return (
    <span
      className={clsx(
        "inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[13.5px] font-semibold",
        statusStyles[status]
      )}
    >
      <span className={clsx("w-[7px] h-[7px] rounded-full", dotStyles[status])} />
      {status}
    </span>
  );
}

const priorityStyles: Record<Priority, string> = {
  Normal: "bg-border-soft text-ink-muted",
  Important: "bg-gold-soft text-warn",
  Urgent: "bg-danger-bg text-danger",
};

export function PriorityTag({ priority }: { priority: Priority }) {
  return (
    <span
      className={clsx(
        "text-xs font-bold px-2.5 py-1 rounded",
        priorityStyles[priority]
      )}
    >
      {priority}
    </span>
  );
}

type Tone = "blue" | "gold" | "purple" | "green" | "gray" | "red";

const toneStyles: Record<Tone, string> = {
  blue: "bg-ocean-light text-ocean-hover",
  gold: "bg-gold-soft text-warn",
  purple: "bg-[#EDE9FB] text-[#5B3FAE]",
  green: "bg-success-bg text-success",
  gray: "bg-border-soft text-ink-muted",
  red: "bg-danger-bg text-danger",
};

const toneDot: Record<Tone, string> = {
  blue: "bg-ocean",
  gold: "bg-gold",
  purple: "bg-[#7C5CD6]",
  green: "bg-success",
  gray: "bg-ink-faint",
  red: "bg-danger",
};

export function Pill({ label, tone }: { label: string; tone: Tone }) {
  return (
    <span
      className={clsx(
        "inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[13.5px] font-semibold",
        toneStyles[tone]
      )}
    >
      <span className={clsx("w-[7px] h-[7px] rounded-full", toneDot[tone])} />
      {label}
    </span>
  );
}

const quotationTone: Record<QuotationStatus, Tone> = {
  Draft: "gray",
  Sent: "blue",
  Accepted: "green",
  Rejected: "red",
  Expired: "gray",
};
export function QuotationStatusBadge({ status }: { status: QuotationStatus }) {
  return <Pill label={status} tone={quotationTone[status]} />;
}

const saleTone: Record<SaleStatus, Tone> = {
  Confirmed: "blue",
  Processing: "gold",
  Completed: "green",
  Cancelled: "red",
};
export function SaleStatusBadge({ status }: { status: SaleStatus }) {
  return <Pill label={status} tone={saleTone[status]} />;
}

const purchaseTone: Record<PurchaseStatus, Tone> = {
  Ordered: "gold",
  Received: "green",
  Cancelled: "red",
};
export function PurchaseStatusBadge({ status }: { status: PurchaseStatus }) {
  return <Pill label={status} tone={purchaseTone[status]} />;
}

const paymentTone: Record<PaymentStatus, Tone> = {
  Unpaid: "gray",
  "Partially Paid": "gold",
  Paid: "green",
  Overdue: "red",
};
export function PaymentStatusBadge({ status }: { status: PaymentStatus }) {
  return <Pill label={status} tone={paymentTone[status]} />;
}

const reminderTone: Record<ReminderStatus, Tone> = {
  Due: "red",
  Upcoming: "gold",
  Scheduled: "gray",
  Completed: "green",
};
export function ReminderStatusBadge({ status }: { status: ReminderStatus }) {
  return <Pill label={status} tone={reminderTone[status]} />;
}
