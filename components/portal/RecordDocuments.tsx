"use client";

import { useState } from "react";
import { Panel } from "@/components/ui/Panel";
import { FileText, Upload } from "lucide-react";
import { BusinessDocument, DocumentCategory, RecordType, UserName } from "@/lib/types";

export default function RecordDocuments({
  relatedType,
  relatedId,
  relatedLabel,
  initialDocuments,
  currentUser,
}: {
  relatedType: RecordType;
  relatedId: string;
  relatedLabel: string;
  initialDocuments: BusinessDocument[];
  currentUser: UserName;
}) {
  const [docs, setDocs] = useState(initialDocuments);
  const [adding, setAdding] = useState(false);
  const [name, setName] = useState("");
  const [category, setCategory] = useState<DocumentCategory>("Other");

  function handleAdd() {
    if (!name.trim()) return;
    const doc: BusinessDocument = {
      id: `doc-${Date.now()}`,
      name: name.trim(),
      category,
      relatedType,
      relatedId,
      relatedLabel,
      uploadedBy: currentUser,
      uploadedAt: "Just now",
      sizeLabel: "—",
    };
    setDocs([doc, ...docs]);
    setName("");
    setCategory("Other");
    setAdding(false);
  }

  return (
    <Panel title="Documents">
      {docs.length === 0 && !adding && (
        <p className="text-[14px] text-ink-muted py-2">No documents uploaded yet.</p>
      )}
      {docs.map((d) => (
        <div key={d.id} className="flex items-center gap-3 py-3 border-b border-border-soft last:border-b-0">
          <FileText size={18} className="text-ocean flex-shrink-0" />
          <div className="flex-1 min-w-0">
            <div className="font-semibold text-navy text-[14px] truncate">{d.name}</div>
            <div className="text-xs text-ink-faint">
              {d.category} · {d.uploadedBy} · {d.uploadedAt} · {d.sizeLabel}
            </div>
          </div>
        </div>
      ))}

      {adding ? (
        <div className="mt-3 border border-border rounded-md p-3.5 space-y-2.5">
          <input
            autoFocus
            placeholder="File name (e.g. invoice-final.pdf)"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-3 py-2 border-[1.5px] border-border rounded-sm text-[13.5px]"
          />
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value as DocumentCategory)}
            className="w-full px-3 py-2 border-[1.5px] border-border rounded-sm text-[13.5px]"
          >
            {["Quotation", "Invoice", "Purchase Order", "Delivery Note", "Other"].map((c) => (
              <option key={c}>{c}</option>
            ))}
          </select>
          <div className="flex gap-2">
            <button onClick={handleAdd} className="flex-1 bg-navy text-white text-[13px] font-semibold rounded-sm py-2">
              Add
            </button>
            <button onClick={() => setAdding(false)} className="px-3 text-[13px] text-ink-muted">
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setAdding(true)}
          className="mt-2 flex items-center gap-2 text-ocean text-[13.5px] font-semibold"
        >
          <Upload size={15} /> Upload Document
        </button>
      )}
      <p className="text-[11.5px] text-ink-faint mt-3">
        Demo upload — captures a file name only until real storage is connected (Vercel Blob planned).
      </p>
    </Panel>
  );
}
