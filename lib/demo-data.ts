import {
  ActivityEvent,
  Client,
  Enquiry,
  InternalNote,
  MarineProduct,
  Payment,
  Purchase,
  Quotation,
  Sale,
  Supplier,
  Task,
  Vessel,
} from "./types";

// NOTE: All data in this file is DEMO / SAMPLE data for development and
// design review only. It is not a representation of MK Marine Services'
// real clients, vessels, inventory or business. Replace with data from
// the database once Phase 3 (Clients/Vessels/Products backend) lands.

export const clients: Client[] = [
  {
    id: "cl-oceanic",
    name: "Oceanic Shipping Pvt. Ltd.",
    primaryContact: "Mr. Rahul Mehta",
    vesselIds: ["v-ocean-star"],
    outstandingAmount: 42000,
  },
  {
    id: "cl-seastar",
    name: "Seastar Marine Logistics",
    primaryContact: "Ms. Anita Rao",
    vesselIds: ["v-sea-horizon"],
    outstandingAmount: 0,
  },
  {
    id: "cl-bluehorizon",
    name: "Blue Horizon Shipping Co.",
    primaryContact: "Mr. Imran Sheikh",
    vesselIds: ["v-blue-crest"],
    outstandingAmount: 15500,
  },
  {
    id: "cl-eastern",
    name: "Eastern Maritime Services",
    primaryContact: "Mr. Vikram Nair",
    vesselIds: ["v-eastern-pearl"],
    outstandingAmount: 0,
  },
  {
    id: "cl-global",
    name: "Global Ocean Carriers",
    primaryContact: "Ms. Farah Contractor",
    vesselIds: ["v-ocean-voyager"],
    outstandingAmount: 0,
  },
];

export const vessels: Vessel[] = [
  { id: "v-ocean-star", name: "MV Ocean Star", imo: "Demo IMO 9876543", type: "Bulk Carrier", clientId: "cl-oceanic" },
  { id: "v-sea-horizon", name: "MV Sea Horizon", imo: "Demo IMO 9876544", type: "Container Ship", clientId: "cl-seastar" },
  { id: "v-blue-crest", name: "MV Blue Crest", imo: "Demo IMO 9876545", type: "Tanker", clientId: "cl-bluehorizon" },
  { id: "v-eastern-pearl", name: "MV Eastern Pearl", imo: "Demo IMO 9876546", type: "Bulk Carrier", clientId: "cl-eastern" },
  { id: "v-ocean-voyager", name: "MV Ocean Voyager", imo: "Demo IMO 9876547", type: "Container Ship", clientId: "cl-global" },
];

export const products: MarineProduct[] = [
  { id: "p-fuel-injector", name: "Fuel Injector", partNumber: "FI-ME-2207", category: "Main Engine", manufacturer: "MAN B&W Compatible", unit: "pc", suppliers: ["Demo Marine Supplier A", "Demo Marine Supplier B"] },
  { id: "p-fuel-injection-pump", name: "Fuel Injection Pump", partNumber: "FIP-ME-1180", category: "Main Engine", manufacturer: "MAN B&W Compatible", unit: "pc", suppliers: ["Demo Marine Supplier A"] },
  { id: "p-piston-ring-set", name: "Piston Ring Set", partNumber: "PRS-ME-0044", category: "Main Engine", manufacturer: "Wartsila Compatible", unit: "set", suppliers: ["Oceanic Parts Trading"] },
  { id: "p-cylinder-liner", name: "Cylinder Liner", partNumber: "CL-ME-3301", category: "Main Engine", manufacturer: "MAN B&W Compatible", unit: "pc", suppliers: ["Harbor Engineering Supplies"] },
  { id: "p-exhaust-valve", name: "Exhaust Valve", partNumber: "EV-ME-2255", category: "Main Engine", manufacturer: "Wartsila Compatible", unit: "pc", suppliers: ["Demo Marine Supplier B"] },
  { id: "p-gasket-set", name: "Gasket Set", partNumber: "GS-ME-1140", category: "Main Engine", manufacturer: "Compatible", unit: "set", suppliers: ["Harbor Engineering Supplies", "Demo Marine Supplier A"] },
  { id: "p-main-bearing", name: "Main Bearing", partNumber: "MB-ME-3390", category: "Main Engine", manufacturer: "Compatible", unit: "pc", suppliers: ["Demo Marine Supplier B"] },
  { id: "p-turbocharger-cartridge", name: "Turbocharger Cartridge", partNumber: "TC-ME-4410", category: "Main Engine", manufacturer: "ABB Compatible", unit: "pc", suppliers: ["Marine Technical Solutions"] },
  { id: "p-centrifugal-pump", name: "Marine Centrifugal Pump", partNumber: "CP-PV-1002", category: "Pumps & Valves", manufacturer: "Compatible", unit: "pc", suppliers: ["Oceanic Parts Trading"] },
  { id: "p-bilge-pump", name: "Bilge Pump", partNumber: "BP-PV-1140", category: "Pumps & Valves", manufacturer: "Compatible", unit: "pc", suppliers: ["Demo Marine Supplies Pvt. Ltd."] },
  { id: "p-fire-pump", name: "Fire Pump", partNumber: "FP-PV-1155", category: "Pumps & Valves", manufacturer: "Compatible", unit: "pc", suppliers: ["Harbor Engineering Supplies"] },
  { id: "p-globe-valve", name: "Globe Valve", partNumber: "GV-PV-2001", category: "Pumps & Valves", manufacturer: "Compatible", unit: "pc", suppliers: ["Oceanic Parts Trading"] },
  { id: "p-butterfly-valve", name: "Butterfly Valve", partNumber: "BV-PV-2002", category: "Pumps & Valves", manufacturer: "Compatible", unit: "pc", suppliers: ["Demo Marine Supplies Pvt. Ltd."] },
  { id: "p-gate-valve", name: "Gate Valve", partNumber: "GTV-PV-2003", category: "Pumps & Valves", manufacturer: "Compatible", unit: "pc", suppliers: ["Harbor Engineering Supplies"] },
  { id: "p-check-valve", name: "Check Valve", partNumber: "CV-PV-2004", category: "Pumps & Valves", manufacturer: "Compatible", unit: "pc", suppliers: ["Oceanic Parts Trading"] },
  { id: "p-starter-motor", name: "Marine Starter Motor", partNumber: "SM-EL-3001", category: "Electrical", manufacturer: "Compatible", unit: "pc", suppliers: ["Marine Technical Solutions"] },
  { id: "p-alternator", name: "Alternator", partNumber: "ALT-EL-3002", category: "Electrical", manufacturer: "Compatible", unit: "pc", suppliers: ["Marine Technical Solutions"] },
  { id: "p-solenoid-valve", name: "Solenoid Valve", partNumber: "SV-EL-3003", category: "Electrical", manufacturer: "Compatible", unit: "pc", suppliers: ["Demo Marine Supplies Pvt. Ltd."] },
  { id: "p-pressure-sensor", name: "Pressure Sensor", partNumber: "PS-EL-3004", category: "Electrical", manufacturer: "Compatible", unit: "pc", suppliers: ["Marine Technical Solutions"] },
  { id: "p-temperature-sensor", name: "Temperature Sensor", partNumber: "TS-EL-3005", category: "Electrical", manufacturer: "Compatible", unit: "pc", suppliers: ["Marine Technical Solutions"] },
  { id: "p-control-relay", name: "Marine Control Relay", partNumber: "CR-EL-3006", category: "Electrical", manufacturer: "Compatible", unit: "pc", suppliers: ["Demo Marine Supplies Pvt. Ltd."] },
  { id: "p-hydraulic-motor", name: "Hydraulic Motor", partNumber: "HM-DM-4001", category: "Deck Machinery", manufacturer: "Compatible", unit: "pc", suppliers: ["Harbor Engineering Supplies"] },
  { id: "p-hydraulic-pump", name: "Hydraulic Pump", partNumber: "HP-DM-4002", category: "Deck Machinery", manufacturer: "Compatible", unit: "pc", suppliers: ["Harbor Engineering Supplies"] },
  { id: "p-winch-component", name: "Winch Component", partNumber: "WC-DM-4003", category: "Deck Machinery", manufacturer: "Compatible", unit: "pc", suppliers: ["Oceanic Parts Trading"] },
  { id: "p-mooring-equipment", name: "Mooring Equipment Component", partNumber: "ME-DM-4004", category: "Deck Machinery", manufacturer: "Compatible", unit: "pc", suppliers: ["Oceanic Parts Trading"] },
  { id: "p-crane-hydraulic", name: "Crane Hydraulic Component", partNumber: "CH-DM-4005", category: "Deck Machinery", manufacturer: "Compatible", unit: "pc", suppliers: ["Harbor Engineering Supplies"] },
  { id: "p-gasket-sheet", name: "Marine Gasket Sheet", partNumber: "GS-GN-5001", category: "General Supplies", manufacturer: "Compatible", unit: "sheet", suppliers: ["Demo Marine Supplies Pvt. Ltd."] },
  { id: "p-oring-kit", name: "O-Ring Kit", partNumber: "OR-GN-5002", category: "General Supplies", manufacturer: "Compatible", unit: "kit", suppliers: ["Demo Marine Supplies Pvt. Ltd."] },
  { id: "p-bearings", name: "Bearings", partNumber: "BR-GN-5003", category: "General Supplies", manufacturer: "Compatible", unit: "pc", suppliers: ["Oceanic Parts Trading"] },
  { id: "p-fasteners", name: "Fasteners", partNumber: "FS-GN-5004", category: "General Supplies", manufacturer: "Compatible", unit: "box", suppliers: ["Demo Marine Supplies Pvt. Ltd."] },
  { id: "p-filters", name: "Filters", partNumber: "FL-GN-5005", category: "General Supplies", manufacturer: "Compatible", unit: "pc", suppliers: ["Harbor Engineering Supplies"] },
  { id: "p-seals", name: "Seals", partNumber: "SL-GN-5006", category: "General Supplies", manufacturer: "Compatible", unit: "pc", suppliers: ["Harbor Engineering Supplies"] },
  { id: "p-hoses", name: "Hoses", partNumber: "HS-GN-5007", category: "General Supplies", manufacturer: "Compatible", unit: "m", suppliers: ["Demo Marine Supplies Pvt. Ltd."] },
];

export const enquiries: Enquiry[] = [
  {
    id: "enq-1024",
    code: "ENQ-1024",
    clientId: "cl-oceanic",
    vesselId: "v-ocean-star",
    requirementTitle: "Main Engine Spare Parts",
    description:
      "Client requires replacement components for the main engine during scheduled maintenance.",
    port: "Mumbai",
    requiredDate: "28 Sep 2026",
    priority: "Important",
    status: "Quotation Preparing",
    items: [
      { productId: "p-fuel-injector", quantity: 4, supplier: "Demo Marine Supplier A", price: 18400 },
      { productId: "p-gasket-set", quantity: 2, supplier: "Harbor Engineering Supplies", price: 6200 },
      { productId: "p-main-bearing", quantity: 1, supplier: "Demo Marine Supplier B", price: 22000 },
    ],
    assignedTo: "Mr. Patel",
    createdBy: "Mr. Kersi",
    currentStatusLine:
      "Client is waiting for revised pricing. Supplier quotation has been received.",
    nextAction: "Confirm final selling price.",
    responsible: "Mr. Patel",
    lastUpdatedBy: "Mr. Kersi",
    lastUpdatedAt: "Today · 10:30 AM",
  },
  {
    id: "enq-1025",
    code: "ENQ-1025",
    clientId: "cl-seastar",
    vesselId: "v-sea-horizon",
    requirementTitle: "Pump & Valve Requirement",
    description: "Replacement bilge pump and associated valves ahead of drydock.",
    port: "Chennai",
    requiredDate: "5 Oct 2026",
    priority: "Normal",
    status: "Quotation Sent",
    items: [
      { productId: "p-bilge-pump", quantity: 1, supplier: "Demo Marine Supplies Pvt. Ltd.", price: 41000 },
      { productId: "p-gate-valve", quantity: 3, supplier: "Harbor Engineering Supplies", price: 5400 },
    ],
    assignedTo: "Mr. Kersi",
    createdBy: "Mr. Kersi",
    currentStatusLine: "Quotation sent to client, awaiting confirmation.",
    nextAction: "Follow up with client on quotation Q-1025.",
    responsible: "Mr. Kersi",
    lastUpdatedBy: "Mr. Patel",
    lastUpdatedAt: "Today · 12:18 PM",
  },
  {
    id: "enq-1026",
    code: "ENQ-1026",
    clientId: "cl-bluehorizon",
    vesselId: "v-blue-crest",
    requirementTitle: "Hydraulic Equipment",
    description: "Hydraulic motor and crane component requirement for deck machinery.",
    port: "Kandla",
    requiredDate: "12 Oct 2026",
    priority: "Normal",
    status: "New",
    items: [
      { productId: "p-hydraulic-motor", quantity: 1 },
      { productId: "p-crane-hydraulic", quantity: 2 },
    ],
    assignedTo: "Mr. Patel",
    createdBy: "Mr. Patel",
    currentStatusLine: "New requirement logged, not yet reviewed.",
    nextAction: "Review requirement and select suppliers.",
    responsible: "Mr. Patel",
    lastUpdatedBy: "Mr. Patel",
    lastUpdatedAt: "Yesterday · 4:20 PM",
  },
];

export const internalNotes: InternalNote[] = [
  {
    id: "note-1",
    message:
      "Supplier confirmed availability of the fuel injectors. Waiting for final freight cost before we quote.",
    createdBy: "Mr. Patel",
    forUser: "Mr. Kersi",
    priority: "Important",
    relatedClientId: "cl-oceanic",
    relatedVesselId: "v-ocean-star",
    relatedEnquiryId: "enq-1024",
    read: false,
    resolved: false,
    createdAt: "Today · 12:18 PM",
  },
  {
    id: "note-2",
    message:
      "Do not send the quotation yet — still waiting on freight cost from the forwarder.",
    createdBy: "Mr. Kersi",
    forUser: "Both",
    priority: "Urgent",
    relatedClientId: "cl-seastar",
    relatedVesselId: "v-sea-horizon",
    relatedEnquiryId: "enq-1025",
    read: true,
    resolved: true,
    createdAt: "Today · 9:05 AM",
  },
  {
    id: "note-3",
    message:
      "Client will confirm the final quantity tomorrow — hold the quotation until then.",
    createdBy: "Mr. Kersi",
    forUser: "Mr. Patel",
    priority: "Normal",
    relatedClientId: "cl-bluehorizon",
    relatedVesselId: "v-blue-crest",
    read: true,
    resolved: false,
    createdAt: "Yesterday · 4:40 PM",
  },
];

export const activity: ActivityEvent[] = [
  { id: "a1", user: "Mr. Patel", action: "Updated quotation Q-1024", relatedLabel: "Oceanic Shipping — MV Ocean Star", timestamp: "12 min ago" },
  { id: "a2", user: "Mr. Kersi", action: "Created enquiry", relatedLabel: "Seastar Marine Logistics — MV Sea Horizon", timestamp: "35 min ago" },
  { id: "a3", user: "Mr. Patel", action: "Added internal note", relatedLabel: '"Waiting for supplier confirmation."', timestamp: "1 hour ago" },
  { id: "a4", user: "Mr. Kersi", action: "Moved enquiry to Quotation Preparing", relatedLabel: "ENQ-1024", timestamp: "Today · 2:05 PM" },
  { id: "a5", user: "Mr. Patel", action: "Added supplier quotation", relatedLabel: "ENQ-1025", timestamp: "Yesterday · 4:20 PM" },
];

export const tasks: Task[] = [
  { id: "t1", title: "Follow up with Oceanic Shipping", assignedTo: "Mr. Patel", dueLabel: "Tomorrow", priority: "Important", status: "Pending", relatedLabel: "ENQ-1024" },
  { id: "t2", title: "Confirm freight cost — MV Sea Horizon", assignedTo: "Mr. Kersi", dueLabel: "Today", priority: "Urgent", status: "Pending", relatedLabel: "ENQ-1025" },
  { id: "t3", title: "Send revised pricing to Blue Horizon", assignedTo: "Mr. Patel", dueLabel: "Yesterday", priority: "Normal", status: "Completed", relatedLabel: "ENQ-1026" },
];

export const suppliers: Supplier[] = [
  {
    id: "sup-demo-a",
    name: "Demo Marine Supplier A",
    contact: "Mr. Sanjay Kulkarni",
    email: "sales@demomarinesupplierA.example",
    phone: "+91 90000 00001",
    productIds: ["p-fuel-injector", "p-fuel-injection-pump", "p-gasket-set"],
    notes: "Reliable on main engine components. Typical lead time 10-14 days.",
  },
  {
    id: "sup-demo-b",
    name: "Demo Marine Supplier B",
    contact: "Ms. Reema Fernandes",
    email: "sales@demomarinesupplierB.example",
    phone: "+91 90000 00002",
    productIds: ["p-main-bearing", "p-exhaust-valve"],
    notes: "Good pricing on bearings and valves.",
  },
  {
    id: "sup-oceanic-parts",
    name: "Oceanic Parts Trading",
    contact: "Mr. Deepak Shah",
    email: "info@oceanicparts.example",
    phone: "+91 90000 00003",
    productIds: ["p-centrifugal-pump", "p-globe-valve", "p-gate-valve", "p-check-valve", "p-winch-component", "p-mooring-equipment", "p-piston-ring-set", "p-bearings"],
    notes: "Broad pumps & valves catalogue.",
  },
  {
    id: "sup-harbor-eng",
    name: "Harbor Engineering Supplies",
    contact: "Mr. Feroz Khan",
    email: "contact@harborengineering.example",
    phone: "+91 90000 00004",
    productIds: ["p-cylinder-liner", "p-fire-pump", "p-gate-valve", "p-hydraulic-motor", "p-hydraulic-pump", "p-crane-hydraulic", "p-filters", "p-seals"],
    notes: "Preferred for deck machinery and hydraulics.",
  },
  {
    id: "sup-marine-technical",
    name: "Marine Technical Solutions",
    contact: "Ms. Priya Iyer",
    email: "sales@marinetechnical.example",
    phone: "+91 90000 00005",
    productIds: ["p-turbocharger-cartridge", "p-starter-motor", "p-alternator", "p-pressure-sensor", "p-temperature-sensor"],
    notes: "Electrical & automation specialist.",
  },
  {
    id: "sup-demo-supplies",
    name: "Demo Marine Supplies Pvt. Ltd.",
    contact: "Mr. Arvind Menon",
    email: "orders@demomarinesupplies.example",
    phone: "+91 90000 00006",
    productIds: ["p-bilge-pump", "p-butterfly-valve", "p-solenoid-valve", "p-control-relay", "p-gasket-sheet", "p-oring-kit", "p-fasteners", "p-hoses"],
    notes: "General marine supplies, fast turnaround on consumables.",
  },
];

export const quotations: Quotation[] = [
  {
    id: "q-1024",
    code: "Q-1024",
    enquiryId: "enq-1024",
    clientId: "cl-oceanic",
    vesselId: "v-ocean-star",
    items: [
      { productId: "p-fuel-injector", quantity: 4, supplierCost: 15200, sellingPrice: 18400 },
      { productId: "p-gasket-set", quantity: 2, supplierCost: 5100, sellingPrice: 6200 },
      { productId: "p-main-bearing", quantity: 1, supplierCost: 18500, sellingPrice: 22000 },
    ],
    clientNotes: "Prices are ex-works and exclude freight, which will be confirmed separately.",
    internalNotes: "Hold 5% margin buffer on the main bearing line in case supplier revises pricing.",
    deliveryTerms: "Delivery to Mumbai Port within 10-14 days of order confirmation.",
    paymentTerms: "50% advance, balance on delivery.",
    status: "Draft",
    createdBy: "Mr. Patel",
    currentStatusLine: "Client is waiting for revised pricing. Supplier quotation has been received.",
    nextAction: "Confirm final selling price.",
    responsible: "Mr. Patel",
    lastUpdatedBy: "Mr. Kersi",
    lastUpdatedAt: "Today · 10:30 AM",
  },
  {
    id: "q-1025",
    code: "Q-1025",
    enquiryId: "enq-1025",
    clientId: "cl-seastar",
    vesselId: "v-sea-horizon",
    items: [
      { productId: "p-bilge-pump", quantity: 1, supplierCost: 35000, sellingPrice: 41000 },
      { productId: "p-gate-valve", quantity: 3, supplierCost: 4500, sellingPrice: 5400 },
    ],
    clientNotes: "Quotation valid for 15 days from date of issue.",
    internalNotes: "Client historically negotiates ~5% off list — approved to go down to supplier cost + 12%.",
    deliveryTerms: "Delivery to Chennai Port within 3 weeks.",
    paymentTerms: "100% advance against proforma invoice.",
    status: "Sent",
    createdBy: "Mr. Kersi",
    currentStatusLine: "Quotation sent to client, awaiting confirmation.",
    nextAction: "Follow up with client on quotation Q-1025.",
    responsible: "Mr. Kersi",
    lastUpdatedBy: "Mr. Patel",
    lastUpdatedAt: "Today · 12:18 PM",
  },
  {
    id: "q-0998",
    code: "Q-0998",
    enquiryId: "enq-1026",
    clientId: "cl-bluehorizon",
    vesselId: "v-blue-crest",
    items: [
      { productId: "p-hydraulic-motor", quantity: 1, supplierCost: 62000, sellingPrice: 71000 },
    ],
    clientNotes: "Includes standard 6-month warranty on the hydraulic motor.",
    internalNotes: "Client accepted verbally on call — awaiting written PO before moving to Sale.",
    deliveryTerms: "Delivery to Kandla Port within 4 weeks.",
    paymentTerms: "30% advance, 70% against delivery documents.",
    status: "Accepted",
    createdBy: "Mr. Patel",
    currentStatusLine: "Client accepted verbally, written confirmation pending.",
    nextAction: "Get written PO and convert to Sale.",
    responsible: "Mr. Patel",
    lastUpdatedBy: "Mr. Patel",
    lastUpdatedAt: "Yesterday · 5:10 PM",
  },
];

export const sales: Sale[] = [
  {
    id: "sale-0511",
    code: "SALE-0511",
    quotationId: "q-0998",
    clientId: "cl-bluehorizon",
    vesselId: "v-blue-crest",
    items: [{ productId: "p-hydraulic-motor", quantity: 1, sellingPrice: 71000, purchaseCost: 62000 }],
    saleStatus: "Processing",
    paymentStatus: "Partially Paid",
    createdAt: "Yesterday · 6:00 PM",
    responsible: "Mr. Patel",
  },
  {
    id: "sale-0498",
    code: "SALE-0498",
    quotationId: "q-1025",
    clientId: "cl-eastern",
    vesselId: "v-eastern-pearl",
    items: [
      { productId: "p-filters", quantity: 12, sellingPrice: 850, purchaseCost: 620 },
      { productId: "p-seals", quantity: 20, sellingPrice: 340, purchaseCost: 240 },
    ],
    saleStatus: "Completed",
    paymentStatus: "Paid",
    createdAt: "3 days ago",
    responsible: "Mr. Kersi",
  },
];

export const purchases: Purchase[] = [
  {
    id: "po-2201",
    code: "PO-2201",
    supplierId: "sup-harbor-eng",
    saleId: "sale-0511",
    enquiryId: "enq-1026",
    items: [{ productId: "p-hydraulic-motor", quantity: 1, cost: 62000 }],
    status: "Ordered",
    paymentStatus: "Partially Paid",
    orderDate: "Yesterday",
    notes: "Confirmed with supplier over call, awaiting dispatch confirmation.",
  },
  {
    id: "po-2189",
    code: "PO-2189",
    supplierId: "sup-demo-supplies",
    saleId: "sale-0498",
    items: [
      { productId: "p-filters", quantity: 12, cost: 620 },
      { productId: "p-seals", quantity: 20, cost: 240 },
    ],
    status: "Received",
    paymentStatus: "Paid",
    orderDate: "5 days ago",
    notes: "Received in full, matched against sale SALE-0498.",
  },
];

export const payments: Payment[] = [
  {
    id: "pay-1",
    direction: "Client",
    relatedLabel: "Blue Horizon Shipping — SALE-0511",
    relatedType: "Sale",
    relatedId: "sale-0511",
    amount: 25000,
    date: "Today",
    method: "Bank Transfer",
    reference: "UTR-88213",
    notes: "Advance payment received.",
  },
  {
    id: "pay-2",
    direction: "Client",
    relatedLabel: "Eastern Maritime Services — SALE-0498",
    relatedType: "Sale",
    relatedId: "sale-0498",
    amount: 15600,
    date: "3 days ago",
    method: "Bank Transfer",
    reference: "UTR-87990",
    notes: "Full and final settlement.",
  },
  {
    id: "pay-3",
    direction: "Supplier",
    relatedLabel: "Harbor Engineering Supplies — PO-2201",
    relatedType: "Purchase",
    relatedId: "po-2201",
    amount: 18600,
    date: "Yesterday",
    method: "Bank Transfer",
    reference: "UTR-88190",
    notes: "Advance against purchase order.",
  },
  {
    id: "pay-4",
    direction: "Supplier",
    relatedLabel: "Demo Marine Supplies Pvt. Ltd. — PO-2189",
    relatedType: "Purchase",
    relatedId: "po-2189",
    amount: 14680,
    date: "5 days ago",
    method: "Bank Transfer",
    reference: "UTR-87850",
    notes: "Paid in full on receipt.",
  },
];

export function getSupplier(id: string): Supplier | undefined {
  return suppliers.find((s) => s.id === id);
}

export function getQuotation(id: string): Quotation | undefined {
  return quotations.find((q) => q.id === id || q.code.toLowerCase() === id.toLowerCase());
}

export function getQuotationByEnquiry(enquiryId: string): Quotation | undefined {
  return quotations.find((q) => q.enquiryId === enquiryId);
}

export function getSale(id: string): Sale | undefined {
  return sales.find((s) => s.id === id || s.code.toLowerCase() === id.toLowerCase());
}

export function getPurchase(id: string): Purchase | undefined {
  return purchases.find((p) => p.id === id || p.code.toLowerCase() === id.toLowerCase());
}

export function lineTotal(quantity: number, price: number): number {
  return quantity * price;
}

export function getClient(id: string): Client | undefined {
  return clients.find((c) => c.id === id);
}

export function getVessel(id: string): Vessel | undefined {
  return vessels.find((v) => v.id === id);
}

export function getProduct(id: string): MarineProduct | undefined {
  return products.find((p) => p.id === id);
}

export function getEnquiry(id: string): Enquiry | undefined {
  return enquiries.find((e) => e.id === id || e.code.toLowerCase() === id.toLowerCase());
}

export function getVesselsForClient(clientId: string): Vessel[] {
  return vessels.filter((v) => v.clientId === clientId);
}
