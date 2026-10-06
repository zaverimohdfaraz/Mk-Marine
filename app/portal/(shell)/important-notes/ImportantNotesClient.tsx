"use client";

import { useState } from "react";
import Link from "next/link";
import Button from "@/components/ui/Button";
import { PriorityTag } from "@/components/ui/StatusBadge";
import {
  internalNotes as seedNotes,
  enquiries,
  quotations,
  sales,
  purchases,
  clients,
  getClient,
  getVessel,
  getEnquiry,
  getQuotation,
  getSale,
  getPurchase,
  getSupplier,
} from "@/lib/demo-data";
import { InternalNote, Priority, UserName, RecordType } from "@/lib/types";

let nextId = 100;

type LinkType = "None" | RecordType;

export default function ImportantNotesClient({ currentUser }: { currentUser: UserName }) {
  const [notes, setNotes] = useState<InternalNote[]>(seedNotes);
  const [showForm, setShowForm] = useState(false);

  const [message, setMessage] = useState("");
  const [priority, setPriority] = useState<Priority>("Normal");
  const [forUser, setForUser] = useState<UserName | "Both">("Both");
  const [linkType, setLinkType] = useState<LinkType>("None");
  const [linkId, setLinkId] = useState<string>("");

  function resetForm() {
    setMessage("");
    setPriority("Normal");
    setForUser("Both");
    setLinkType("None");
    setLinkId("");
    setShowForm(false);
  }

  function handleAdd() {
    if (!message.trim()) return;

    let relatedClientId: string | undefined;
    let relatedVesselId: string | undefined;
    let relatedEnquiryId: string | undefined;
    let relatedQuotationId: string | undefined;
    let relatedSaleId: string | undefined;
    let relatedPurchaseId: string | undefined;

    if (linkType === "Enquiry" && linkId) {
      const e = getEnquiry(linkId);
      relatedEnquiryId = e?.id;
      relatedClientId = e?.clientId;
      relatedVesselId = e?.vesselId;
    } else if (linkType === "Quotation" && linkId) {
      const q = getQuotation(linkId);
      relatedQuotationId = q?.id;
      relatedClientId = q?.clientId;
      relatedVesselId = q?.vesselId;
    } else if (linkType === "Sale" && linkId) {
      const s = getSale(linkId);
      relatedSaleId = s?.id;
      relatedClientId = s?.clientId;
      relatedVesselId = s?.vesselId;
    } else if (linkType === "Purchase" && linkId) {
      const p = getPurchase(linkId);
      relatedPurchaseId = p?.id;
    } else if (linkType === "Client" && linkId) {
      relatedClientId = linkId;
    }

    const newNote: InternalNote = {
      id: `note-${nextId++}`,
      message: message.trim(),
      createdBy: currentUser,
      forUser,
      priority,
      relatedClientId,
      relatedVesselId,
      relatedEnquiryId,
      relatedQuotationId,
      relatedSaleId,
      relatedPurchaseId,
      read: false,
      resolved: false,
      createdAt: "Just now",
    };
    setNotes((prev) => [newNote, ...prev]);
    resetForm();
  }

  const linkOptions = () => {
    if (linkType === "Enquiry")
      return enquiries.map((e) => ({ id: e.id, label: `${e.code} — ${getClient(e.clientId)?.name} · ${e.requirementTitle}` }));
    if (linkType === "Quotation")
      return quotations.map((q) => ({ id: q.id, label: `${q.code} — ${getClient(q.clientId)?.name}` }));
    if (linkType === "Sale")
      return sales.map((s) => ({ id: s.id, label: `${s.code} — ${getClient(s.clientId)?.name}` }));
    if (linkType === "Purchase")
      return purchases.map((p) => ({ id: p.id, label: `${p.code} — ${getSupplier(p.supplierId)?.name}` }));
    if (linkType === "Client")
      return clients.map((c) => ({ id: c.id, label: c.name }));
    return [];
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="font-display text-2xl text-navy font-semibold">Important Notes</h1>
        <Button onClick={() => setShowForm((v) => !v)}>{showForm ? "Cancel" : "Add Note"}</Button>
      </div>

      {showForm && (
        <div className="bg-white border border-border rounded-md p-5 mb-5 shadow-card">
          <label className="block font-semibold text-[14px] mb-1.5">Message</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={3}
            placeholder="e.g. Supplier confirmed availability, waiting on freight cost..."
            className="w-full px-3.5 py-3 border-[1.5px] border-border rounded-sm text-[15px] mb-4"
          />

          <div className="grid grid-cols-4 gap-4 mb-4 max-[860px]:grid-cols-2">
            <div>
              <label className="block font-semibold text-[13.5px] mb-1.5">Priority</label>
              <select
                value={priority}
                onChange={(e) => setPriority(e.target.value as Priority)}
                className="w-full px-3 py-2.5 border-[1.5px] border-border rounded-sm text-[14px]"
              >
                <option>Normal</option>
                <option>Important</option>
                <option>Urgent</option>
              </select>
            </div>
            <div>
              <label className="block font-semibold text-[13.5px] mb-1.5">For</label>
              <select
                value={forUser}
                onChange={(e) => setForUser(e.target.value as UserName | "Both")}
                className="w-full px-3 py-2.5 border-[1.5px] border-border rounded-sm text-[14px]"
              >
                <option>Both</option>
                <option>Mr. Kersi</option>
                <option>Mr. Patel</option>
              </select>
            </div>
            <div>
              <label className="block font-semibold text-[13.5px] mb-1.5">Related Record</label>
              <select
                value={linkType}
                onChange={(e) => {
                  setLinkType(e.target.value as LinkType);
                  setLinkId("");
                }}
                className="w-full px-3 py-2.5 border-[1.5px] border-border rounded-sm text-[14px]"
              >
                <option value="None">None</option>
                <option value="Enquiry">Enquiry</option>
                <option value="Quotation">Quotation</option>
                <option value="Sale">Sale</option>
                <option value="Purchase">Purchase</option>
                <option value="Client">Client</option>
              </select>
            </div>
            <div>
              <label className="block font-semibold text-[13.5px] mb-1.5">
                Which one <span className="text-ink-faint font-normal">{linkType === "None" ? "" : "(required)"}</span>
              </label>
              <select
                value={linkId}
                onChange={(e) => setLinkId(e.target.value)}
                disabled={linkType === "None"}
                className="w-full px-3 py-2.5 border-[1.5px] border-border rounded-sm text-[14px] disabled:bg-border-soft disabled:text-ink-faint"
              >
                <option value="">Select…</option>
                {linkOptions().map((o) => (
                  <option key={o.id} value={o.id}>
                    {o.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <p className="text-[12.5px] text-ink-faint mb-4">
            Linking a record shows a "Regarding" tag here and on the note itself —
            and the note will also appear on that record's own Internal Notes panel.
          </p>

          <div className="flex gap-2.5">
            <Button onClick={handleAdd}>Save Note</Button>
            <Button variant="secondary" onClick={resetForm}>Cancel</Button>
          </div>
        </div>
      )}

      {notes.map((note) => {
        const client = note.relatedClientId ? getClient(note.relatedClientId) : undefined;
        const vessel = note.relatedVesselId ? getVessel(note.relatedVesselId) : undefined;
        const relatedEnquiry = note.relatedEnquiryId ? getEnquiry(note.relatedEnquiryId) : undefined;
        const relatedQuotation = note.relatedQuotationId ? getQuotation(note.relatedQuotationId) : undefined;
        const relatedSale = note.relatedSaleId ? getSale(note.relatedSaleId) : undefined;
        const relatedPurchase = note.relatedPurchaseId ? getPurchase(note.relatedPurchaseId) : undefined;

        const regarding = relatedEnquiry
          ? { href: `/portal/enquiries/${relatedEnquiry.id}`, label: `Regarding: ${relatedEnquiry.code} — ${relatedEnquiry.requirementTitle}` }
          : relatedQuotation
          ? { href: `/portal/quotations/${relatedQuotation.id}`, label: `Regarding: ${relatedQuotation.code}` }
          : relatedSale
          ? { href: `/portal/sales/${relatedSale.id}`, label: `Regarding: ${relatedSale.code}` }
          : relatedPurchase
          ? { href: `/portal/purchases/${relatedPurchase.id}`, label: `Regarding: ${relatedPurchase.code}` }
          : client && !vessel
          ? { href: `/portal/clients/${client.id}`, label: `Regarding: ${client.name}` }
          : undefined;

        return (
          <div
            key={note.id}
            className={`bg-white border border-border rounded-md p-5 mb-3 ${
              !note.read ? "border-l-[3px] border-l-ocean" : ""
            }`}
          >
            <div className="flex justify-between items-center mb-2.5">
              <PriorityTag priority={note.priority} />
              <span className="text-xs text-ink-faint">
                {note.createdBy} → {note.forUser}
              </span>
            </div>

            <p className="text-[15px] text-ink mb-3 leading-relaxed">{note.message}</p>

            {regarding && (
              <Link
                href={regarding.href}
                className="inline-flex items-center gap-1.5 bg-ocean-light text-ocean-hover text-[12.5px] font-semibold px-2.5 py-1.5 rounded-md mb-3 hover:underline"
              >
                {regarding.label}
              </Link>
            )}

            <div className="flex justify-between items-center flex-wrap gap-2 text-xs text-ink-faint">
              <div className="flex gap-1.5 flex-wrap">
                {client && (
                  <span className="bg-border-soft text-ink-muted text-[11.5px] font-semibold px-2 py-1 rounded">
                    {client.name}
                  </span>
                )}
                {vessel && (
                  <span className="bg-border-soft text-ink-muted text-[11.5px] font-semibold px-2 py-1 rounded">
                    {vessel.name}
                  </span>
                )}
              </div>
              <span>
                {note.createdAt}
                {note.resolved ? " · Resolved" : ""}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
