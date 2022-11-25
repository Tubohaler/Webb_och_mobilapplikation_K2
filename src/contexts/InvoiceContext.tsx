import React, { createContext, useState } from "react";
import { InvoiceType } from "../types/invoiceTypes";

export type InvoiceContext = {
  prices: InvoiceType;
  setPrice: React.ReactNode;
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

export const InvoiceContext = createContext<InvoiceContext | null>(null);

const InvoiceProvider = ({ children }: Props) => {
  const [prices, setPrice] = useState<InvoiceType>({
    id: 0,
    status: "ej betald",
    due_date: 0,
    amount: 0,
    project: 0,
    customer_name: "",
    created_date: 0,
  });
  return (
    <InvoiceContext.Provider value={{ prices, setPrice }}>
      {" "}
      {children}
    </InvoiceContext.Provider>
  );
};
