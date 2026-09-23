export type UserName = "Mr. Kersi" | "Mr. Patel";

export type EnquiryStatus =
  | "New"
  | "In Progress"
  | "Quotation Preparing"
  | "Quotation Sent"
  | "Negotiation"
  | "Confirmed"
  | "Completed"
  | "Lost";

export type Priority = "Normal" | "Important" | "Urgent";

export interface Client {
  id: string;
  name: string;
  primaryContact: string;
  vesselIds: string[];
  outstandingAmount: number;
}

export interface Vessel {
  id: string;
  name: string;
  imo: string;
  type: string;
  clientId: string;
}

export interface MarineProduct {
  id: string;
  name: string;
  partNumber: string;
  category:
    | "Main Engine"
    | "Pumps & Valves"
    | "Electrical"
    | "Deck Machinery"
    | "General Supplies";
  manufacturer: string;
  unit: string;
  suppliers: string[];
}

export interface EnquiryItem {
  productId: string;
  quantity: number;
  supplier?: string;
  price?: number;
}

export interface Enquiry {
  id: string;
  code: string; // e.g. ENQ-1024
  clientId: string;
  vesselId: string;
  requirementTitle: string;
  description: string;
  port: string;
  requiredDate: string;
  priority: Priority;
  status: EnquiryStatus;
  items: EnquiryItem[];
  assignedTo: UserName;
  createdBy: UserName;
  currentStatusLine: string;
  nextAction: string;
  responsible: UserName;
  lastUpdatedBy: UserName;
  lastUpdatedAt: string;
}

export interface InternalNote {
  id: string;
  message: string;
  createdBy: UserName;
  forUser: UserName | "Both";
  priority: Priority;
  relatedClientId?: string;
  relatedVesselId?: string;
  relatedEnquiryId?: string;
  read: boolean;
  resolved: boolean;
  createdAt: string;
}

export interface ActivityEvent {
  id: string;
  user: UserName;
  action: string;
  relatedLabel: string;
  timestamp: string;
}

export interface Task {
  id: string;
  title: string;
  assignedTo: UserName;
  dueLabel: string;
  priority: Priority;
  status: "Pending" | "In Progress" | "Completed" | "Cancelled";
  relatedLabel?: string;
}

export type QuotationStatus = "Draft" | "Sent" | "Accepted" | "Rejected" | "Expired";
export type SaleStatus = "Confirmed" | "Processing" | "Completed" | "Cancelled";
export type PaymentStatus = "Unpaid" | "Partially Paid" | "Paid" | "Overdue";
export type PurchaseStatus = "Ordered" | "Received" | "Cancelled";

export interface QuotationItem {
  productId: string;
  quantity: number;
  supplierCost: number;
  sellingPrice: number;
}

export interface Quotation {
  id: string;
  code: string; // e.g. Q-1024
  enquiryId: string;
  clientId: string;
  vesselId: string;
  items: QuotationItem[];
  clientNotes: string;
  internalNotes: string;
  deliveryTerms: string;
  paymentTerms: string;
  status: QuotationStatus;
  createdBy: UserName;
  currentStatusLine: string;
  nextAction: string;
  responsible: UserName;
  lastUpdatedBy: UserName;
  lastUpdatedAt: string;
}

export interface SaleItem {
  productId: string;
  quantity: number;
  sellingPrice: number;
  purchaseCost: number;
}

export interface Sale {
  id: string;
  code: string; // e.g. SALE-0512
  quotationId: string;
  clientId: string;
  vesselId: string;
  items: SaleItem[];
  saleStatus: SaleStatus;
  paymentStatus: PaymentStatus;
  createdAt: string;
  responsible: UserName;
}

export interface PurchaseItem {
  productId: string;
  quantity: number;
  cost: number;
}

export interface Purchase {
  id: string;
  code: string; // e.g. PO-2201
  supplierId: string;
  saleId?: string;
  enquiryId?: string;
  items: PurchaseItem[];
  status: PurchaseStatus;
  paymentStatus: PaymentStatus;
  orderDate: string;
  notes: string;
}

export interface Payment {
  id: string;
  direction: "Client" | "Supplier";
  relatedLabel: string;
  relatedType: "Sale" | "Purchase";
  relatedId: string;
  amount: number;
  date: string;
  method: string;
  reference: string;
  notes?: string;
}

export interface Supplier {
  id: string;
  name: string;
  contact: string;
  email: string;
  phone: string;
  productIds: string[];
  notes: string;
}
