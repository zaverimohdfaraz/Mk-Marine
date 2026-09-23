"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import Button from "@/components/ui/Button";
import { clients, products, getVesselsForClient } from "@/lib/demo-data";
import { MarineProduct } from "@/lib/types";

const CATEGORIES = [
  "Main Engine",
  "Pumps & Valves",
  "Electrical",
  "Deck Machinery",
  "General Supplies",
] as const;

interface SelectedLine {
  product: MarineProduct;
  quantity: number;
}

export default function NewEnquiryForm() {
  const router = useRouter();

  const [step, setStep] = useState<1 | 2 | 3 | 4 | 5>(1);
  const [clientId, setClientId] = useState(clients[0].id);
  const [vesselId, setVesselId] = useState(getVesselsForClient(clients[0].id)[0]?.id ?? "");
  const [requirementTitle, setRequirementTitle] = useState("");
  const [description, setDescription] = useState("");
  const [port, setPort] = useState("");
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<(typeof CATEGORIES)[number]>("Main Engine");
  const [selected, setSelected] = useState<Record<string, number>>({});
  const [created, setCreated] = useState(false);

  const client = clients.find((c) => c.id === clientId);
  const vessels = getVesselsForClient(clientId);

  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      const matchesCategory = p.category === category;
      const matchesSearch =
        !search ||
        p.name.toLowerCase().includes(search.toLowerCase()) ||
        p.partNumber.toLowerCase().includes(search.toLowerCase()) ||
        p.manufacturer.toLowerCase().includes(search.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [category, search]);

  const selectedLines: SelectedLine[] = Object.entries(selected)
    .filter(([, qty]) => qty > 0)
    .map(([productId, quantity]) => ({
      product: products.find((p) => p.id === productId)!,
      quantity,
    }));

  function addProduct(id: string) {
    setSelected((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
  }
  function changeQty(id: string, delta: number) {
    setSelected((prev) => {
      const next = Math.max(0, (prev[id] || 0) + delta);
      return { ...prev, [id]: next };
    });
  }

  const steps = [
    { n: 1, label: "Client" },
    { n: 2, label: "Vessel" },
    { n: 3, label: "Requirement" },
    { n: 4, label: "Marine Products" },
    { n: 5, label: "Summary" },
  ];

  if (created) {
    return (
      <div className="max-w-lg mx-auto text-center py-16">
        <div className="text-[17px] font-semibold text-navy mb-2">
          Enquiry created successfully.
        </div>
        <p className="text-[14.5px] text-ink-muted mb-6">
          {client?.name} — {requirementTitle || "New requirement"} has been assigned
          and will appear on the dashboard as a new update.
        </p>
        <Button onClick={() => router.push("/portal/enquiries")}>Go to Enquiries</Button>
      </div>
    );
  }

  return (
    <div>
      <div className="flex mb-8">
        {steps.map((s) => (
          <div
            key={s.n}
            className={`flex-1 text-center pb-3.5 border-b-[3px] ${
              s.n < step ? "border-ocean" : s.n === step ? "border-gold" : "border-border"
            }`}
          >
            <span
              className={`inline-flex w-[26px] h-[26px] rounded-full items-center justify-center text-[13px] font-bold mb-1.5 ${
                s.n < step
                  ? "bg-ocean text-white"
                  : s.n === step
                  ? "bg-gold text-[#241C08]"
                  : "bg-border text-ink-muted"
              }`}
            >
              {s.n < step ? "✓" : s.n}
            </span>
            <span className={`block text-[13px] font-semibold ${s.n === step ? "text-navy" : "text-ink-muted"}`}>
              {s.label}
            </span>
          </div>
        ))}
      </div>

      {step === 1 && (
        <div className="max-w-md">
          <label className="block font-semibold text-[14px] mb-1.5">Client</label>
          <select
            value={clientId}
            onChange={(e) => {
              setClientId(e.target.value);
              setVesselId(getVesselsForClient(e.target.value)[0]?.id ?? "");
            }}
            className="w-full px-3.5 py-3 border-[1.5px] border-border rounded-sm text-[15px] mb-6"
          >
            {clients.map((c) => (
              <option key={c.id} value={c.id}>
                {c.name}
              </option>
            ))}
          </select>
          <Button onClick={() => setStep(2)}>Continue</Button>
        </div>
      )}

      {step === 2 && (
        <div className="max-w-md">
          <label className="block font-semibold text-[14px] mb-1.5">Vessel</label>
          <select
            value={vesselId}
            onChange={(e) => setVesselId(e.target.value)}
            className="w-full px-3.5 py-3 border-[1.5px] border-border rounded-sm text-[15px] mb-6"
          >
            {vessels.map((v) => (
              <option key={v.id} value={v.id}>
                {v.name}
              </option>
            ))}
          </select>
          <div className="flex gap-3">
            <Button variant="secondary" onClick={() => setStep(1)}>Back</Button>
            <Button onClick={() => setStep(3)}>Continue</Button>
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="max-w-md">
          <label className="block font-semibold text-[14px] mb-1.5">Requirement</label>
          <input
            value={requirementTitle}
            onChange={(e) => setRequirementTitle(e.target.value)}
            placeholder="e.g. Main Engine Spare Parts"
            className="w-full px-3.5 py-3 border-[1.5px] border-border rounded-sm text-[15px] mb-5"
          />
          <label className="block font-semibold text-[14px] mb-1.5">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={3}
            className="w-full px-3.5 py-3 border-[1.5px] border-border rounded-sm text-[15px] mb-5"
          />
          <label className="block font-semibold text-[14px] mb-1.5">Port / Delivery Location</label>
          <input
            value={port}
            onChange={(e) => setPort(e.target.value)}
            placeholder="e.g. Mumbai"
            className="w-full px-3.5 py-3 border-[1.5px] border-border rounded-sm text-[15px] mb-6"
          />
          <div className="flex gap-3">
            <Button variant="secondary" onClick={() => setStep(2)}>Back</Button>
            <Button
              onClick={() => setStep(4)}
              disabled={!requirementTitle}
            >
              Continue
            </Button>
          </div>
        </div>
      )}

      {step === 4 && (
        <div className="grid grid-cols-[1.4fr_1fr] gap-6 max-[980px]:grid-cols-1">
          <div>
            <div className="bg-white border border-border rounded-md p-5 mb-5">
              <h3 className="text-[15.5px] font-bold text-navy mb-4">Search Marine Products</h3>
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search product, part number or manufacturer"
                className="w-full px-3.5 py-3 border-[1.5px] border-border rounded-sm text-[15px] mb-4"
              />
              <div className="flex flex-wrap gap-2.5 mb-5">
                {CATEGORIES.map((c) => (
                  <button
                    key={c}
                    onClick={() => setCategory(c)}
                    className={`px-4 py-2 rounded-full text-[13.5px] font-semibold border-[1.5px] ${
                      category === c
                        ? "bg-navy text-white border-navy"
                        : "bg-white text-ink-muted border-border"
                    }`}
                  >
                    {c}
                  </button>
                ))}
              </div>
              {filteredProducts.map((p) => (
                <div
                  key={p.id}
                  className="flex items-center justify-between border border-border rounded-md px-4 py-3.5 mb-2.5"
                >
                  <div>
                    <div className="font-semibold text-navy text-[15px]">{p.name}</div>
                    <div className="text-xs text-ink-faint">
                      {p.partNumber} · {p.category} · {p.manufacturer}
                    </div>
                  </div>
                  <Button
                    variant={selected[p.id] ? "secondary" : "primary"}
                    className="min-h-[38px] py-2 px-4"
                    onClick={() => addProduct(p.id)}
                  >
                    {selected[p.id] ? `Added × ${selected[p.id]}` : "Add"}
                  </Button>
                </div>
              ))}
              {filteredProducts.length === 0 && (
                <p className="text-[14px] text-ink-muted py-3">No products match your search.</p>
              )}
            </div>

            <div className="bg-white border border-border rounded-md p-5 shadow-card">
              <h3 className="text-[15.5px] font-bold text-navy mb-4">Selected Products</h3>
              {selectedLines.length === 0 && (
                <p className="text-[14px] text-ink-muted">No products added yet.</p>
              )}
              {selectedLines.map((line) => (
                <div key={line.product.id} className="flex items-center justify-between py-2.5 border-b border-border-soft last:border-b-0">
                  <div className="font-semibold text-navy text-[14.5px]">{line.product.name}</div>
                  <div className="inline-flex items-center border-[1.5px] border-border rounded-lg overflow-hidden">
                    <button
                      onClick={() => changeQty(line.product.id, -1)}
                      className="w-8 h-8 bg-offwhite text-navy text-[16px]"
                    >
                      −
                    </button>
                    <span className="w-8 text-center font-semibold text-[14.5px]">{line.quantity}</span>
                    <button
                      onClick={() => changeQty(line.product.id, 1)}
                      className="w-8 h-8 bg-offwhite text-navy text-[16px]"
                    >
                      +
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex gap-3 mt-5">
              <Button variant="secondary" onClick={() => setStep(3)}>Back</Button>
              <Button onClick={() => setStep(5)} disabled={selectedLines.length === 0}>
                Continue
              </Button>
            </div>
          </div>

          <div>
            <SummaryPreview
              clientName={client?.name ?? ""}
              vesselName={vessels.find((v) => v.id === vesselId)?.name ?? ""}
              requirementTitle={requirementTitle}
              lines={selectedLines}
              port={port}
            />
          </div>
        </div>
      )}

      {step === 5 && (
        <div className="max-w-lg">
          <SummaryPreview
            clientName={client?.name ?? ""}
            vesselName={vessels.find((v) => v.id === vesselId)?.name ?? ""}
            requirementTitle={requirementTitle}
            lines={selectedLines}
            port={port}
            expanded
          />
          <div className="flex gap-3 mt-5">
            <Button variant="secondary" onClick={() => setStep(4)}>Back</Button>
            <Button onClick={() => setCreated(true)}>Create Enquiry</Button>
          </div>
        </div>
      )}
    </div>
  );
}

function SummaryPreview({
  clientName,
  vesselName,
  requirementTitle,
  lines,
  port,
  expanded,
}: {
  clientName: string;
  vesselName: string;
  requirementTitle: string;
  lines: SelectedLine[];
  port: string;
  expanded?: boolean;
}) {
  return (
    <div className="bg-ocean-light border border-[#CFE0EF] rounded-lg p-6">
      <h3 className="font-display text-xl text-navy font-semibold mb-4">Enquiry Summary</h3>
      <SummaryLine label="Client" value={clientName} />
      <SummaryLine label="Vessel" value={vesselName} />
      <SummaryLine label="Requirement" value={requirementTitle || "—"} />
      <SummaryLine
        label="Products"
        value={
          lines.length
            ? lines.map((l) => `${l.quantity} × ${l.product.name}`).join(", ")
            : "None yet"
        }
      />
      {expanded && (
        <>
          <SummaryLine label="Delivery" value={port || "—"} />
          <SummaryLine label="Priority" value="Important" />
          <SummaryLine label="Assigned To" value="Mr. Patel" last />
        </>
      )}
    </div>
  );
}

function SummaryLine({ label, value, last }: { label: string; value: string; last?: boolean }) {
  return (
    <div className={`flex justify-between text-[14.5px] py-2 ${last ? "" : "border-b border-navy/10"}`}>
      <span className="text-ink-muted">{label}</span>
      <b className="text-navy text-right ml-4">{value}</b>
    </div>
  );
}
