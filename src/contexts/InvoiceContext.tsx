import React, { createContext, useState, useContext } from "react";
import { InvoiceType } from "../types/invoiceTypes";

export type InvoiceTypeContext = {
  invoices: InvoiceType[];
  setInvoices: React.Dispatch<React.SetStateAction<InvoiceType[]>>;
};

const initialStateInvoice = {
  id: 0,
  status: "ej betald",
  due_date: 0,
  amount: 0,
  project: 0,
  customer_name: "",
  created_date: 0,
};
type Props = { children: React.ReactNode };
export const InvoiceContext = createContext<InvoiceTypeContext | null>(null);

export const InvoiceProvider = ({ children }: Props) => {
  const [invoices, setInvoices] = useState<InvoiceType[]>([]);
  return (
    <InvoiceContext.Provider value={{ invoices, setInvoices }}>
      {" "}
      {children}
    </InvoiceContext.Provider>
  );
};
export function useInvoices() {
  const context = useContext(InvoiceContext);
  if (!context) {
    throw new Error("BLab lba");
  }
  return context;
}
