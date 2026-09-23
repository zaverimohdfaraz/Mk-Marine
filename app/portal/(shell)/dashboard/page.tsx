import Link from "next/link";
import { Panel } from "@/components/ui/Panel";
import ActivityTimeline from "@/components/ui/ActivityTimeline";
import { StatusBadge } from "@/components/ui/StatusBadge";
import {
  Mail,
  Building2,
  Ship,
  ListChecks,
  StickyNote,
  FileText,
} from "lucide-react";
import { activity, clients, enquiries, internalNotes, tasks, quotations, getClient, getVessel, getEnquiry } from "@/lib/demo-data";
import { QuotationStatusBadge } from "@/components/ui/StatusBadge";
import { getCurrentUser } from "@/lib/current-user";

export default function DashboardPage() {
  const user = getCurrentUser();
  const unread = internalNotes.filter((n) => !n.read || n.forUser === "Both" || n.forUser === user);
  const myTasks = tasks.filter((t) => t.assignedTo === user && t.status !== "Completed");
  const activeEnquiries = enquiries.filter((e) => e.status !== "Completed" && e.status !== "Lost");
  const pendingQuotations = quotations.filter((q) => q.status === "Draft" || q.status === "Sent");
  const receivable = clients.reduce((sum, c) => sum + c.outstandingAmount, 0);

  return (
    <div>
      <div className="mb-7">
        <h1 className="font-display text-[28px] text-navy font-semibold mb-1">
          Hello, {user}
        </h1>
        <p className="text-ink-muted text-[15px]">Here's what needs your attention today.</p>
      </div>

      <Panel title="Important for You" count={unread.length}>
        {unread.map((note) => {
          const relatedEnquiry = note.relatedEnquiryId ? getEnquiry(note.relatedEnquiryId) : undefined;
          return (
            <Link
              href={relatedEnquiry ? `/portal/enquiries/${relatedEnquiry.id}` : "/portal/important-notes"}
              key={note.id}
              className="flex gap-3.5 py-3.5 border-b border-border-soft last:border-b-0 items-start"
            >
              <div className="w-[34px] h-[34px] rounded-full bg-ocean-light text-ocean-hover flex items-center justify-center font-bold text-[13px] flex-shrink-0">
                {note.createdBy === "Mr. Patel" ? "P" : "K"}
              </div>
              <div>
                <p className="text-[14.5px] text-ink m-0 mb-1">
                  <b className="text-navy">{note.createdBy}</b> {note.message}
                </p>
                {relatedEnquiry && (
                  <span className="inline-flex items-center gap-1 bg-ocean-light text-ocean-hover text-[11.5px] font-semibold px-2 py-0.5 rounded mb-1">
                    Regarding: {relatedEnquiry.code} — {relatedEnquiry.requirementTitle}
                  </span>
                )}
                <div className="text-[12.5px] text-ink-faint">{note.createdAt}</div>
              </div>
            </Link>
          );
        })}
      </Panel>

      <div className="grid grid-cols-[1.4fr_1fr] gap-5 max-[980px]:grid-cols-1">
        <div>
          <Panel title="Active Enquiries" action="View all" actionHref="/portal/enquiries">
            <table className="w-full border-collapse text-[14.5px]">
              <thead>
                <tr>
                  <th className="text-left text-xs uppercase tracking-wide text-ink-faint font-bold border-b-[1.5px] border-border py-2.5 px-2">Client / Vessel</th>
                  <th className="text-left text-xs uppercase tracking-wide text-ink-faint font-bold border-b-[1.5px] border-border py-2.5 px-2">Requirement</th>
                  <th className="text-left text-xs uppercase tracking-wide text-ink-faint font-bold border-b-[1.5px] border-border py-2.5 px-2">Status</th>
                </tr>
              </thead>
              <tbody>
                {activeEnquiries.map((e) => {
                  const client = getClient(e.clientId);
                  const vessel = getVessel(e.vesselId);
                  return (
                    <tr key={e.id}>
                      <td className="py-3 px-2 border-b border-border-soft">
                        <Link href={`/portal/enquiries/${e.id}`} className="font-semibold text-navy block">
                          {client?.name}
                        </Link>
                        <div className="text-xs text-ink-faint">{vessel?.name}</div>
                      </td>
                      <td className="py-3 px-2 border-b border-border-soft">{e.requirementTitle}</td>
                      <td className="py-3 px-2 border-b border-border-soft">
                        <StatusBadge status={e.status} />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </Panel>

          <Panel title="Recent Activity">
            <ActivityTimeline events={activity} />
          </Panel>

          <Panel title="Pending Quotations" action="View all" actionHref="/portal/quotations">
            {pendingQuotations.length === 0 && (
              <p className="text-[14px] text-ink-muted py-2">Nothing pending — nice work.</p>
            )}
            {pendingQuotations.map((q) => {
              const client = getClient(q.clientId);
              return (
                <Link
                  key={q.id}
                  href={`/portal/quotations/${q.id}`}
                  className="flex justify-between items-center py-3 border-b border-border-soft last:border-b-0"
                >
                  <div>
                    <div className="font-semibold text-navy text-[14.5px]">{q.code}</div>
                    <div className="text-xs text-ink-faint">{client?.name}</div>
                  </div>
                  <QuotationStatusBadge status={q.status} />
                </Link>
              );
            })}
          </Panel>
        </div>

        <div>
          <Panel title="My Pending Work">
            {myTasks.length === 0 && (
              <p className="text-[14px] text-ink-muted py-2">Nothing pending — nice work.</p>
            )}
            {myTasks.map((t) => (
              <div key={t.id} className="py-3 border-b border-border-soft last:border-b-0">
                <div className="font-semibold text-navy text-[14.5px]">{t.title}</div>
                <div className="text-xs text-ink-faint">Due {t.dueLabel}</div>
              </div>
            ))}
          </Panel>

          <Panel title="Payments">
            <div className="flex gap-0 pb-4">
              <div className="flex-1 pr-4 border-r border-border-soft">
                <span className="block text-xs text-ink-muted mb-1.5">Receivable</span>
                <b className="text-[24px] text-navy font-bold">
                  ₹{(receivable / 1000).toFixed(1)}K
                </b>
              </div>
              <div className="flex-1 pl-4">
                <span className="block text-xs text-ink-muted mb-1.5">Payable</span>
                <b className="text-[24px] text-navy font-bold">₹1.6L</b>
              </div>
            </div>
          </Panel>
        </div>
      </div>

      <Panel title="Quick Actions">
        <div className="grid grid-cols-3 gap-3.5 pb-2 max-[700px]:grid-cols-2">
          <Link href="/portal/enquiries/new" className="border-[1.5px] border-border rounded-md p-5 flex flex-col gap-2 font-semibold text-navy text-[14.5px] hover:border-ocean hover:bg-ocean-light">
            <Mail size={20} />
            New Enquiry
          </Link>
          <Link href="/portal/clients" className="border-[1.5px] border-border rounded-md p-5 flex flex-col gap-2 font-semibold text-navy text-[14.5px] hover:border-ocean hover:bg-ocean-light">
            <Building2 size={20} />
            New Client
          </Link>
          <Link href="/portal/vessels" className="border-[1.5px] border-border rounded-md p-5 flex flex-col gap-2 font-semibold text-navy text-[14.5px] hover:border-ocean hover:bg-ocean-light">
            <Ship size={20} />
            New Vessel
          </Link>
          <Link href="/portal/tasks" className="border-[1.5px] border-border rounded-md p-5 flex flex-col gap-2 font-semibold text-navy text-[14.5px] hover:border-ocean hover:bg-ocean-light">
            <ListChecks size={20} />
            New Task
          </Link>
          <Link href="/portal/important-notes" className="border-[1.5px] border-border rounded-md p-5 flex flex-col gap-2 font-semibold text-navy text-[14.5px] hover:border-ocean hover:bg-ocean-light">
            <StickyNote size={20} />
            Add Internal Note
          </Link>
          <Link href="/portal/quotations" className="border-[1.5px] border-border rounded-md p-5 flex flex-col gap-2 font-semibold text-navy text-[14.5px] hover:border-ocean hover:bg-ocean-light">
            <FileText size={20} />
            Create Quotation
          </Link>
        </div>
      </Panel>
    </div>
  );
}
