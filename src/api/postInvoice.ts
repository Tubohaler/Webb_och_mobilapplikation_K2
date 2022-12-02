import axios from 'axios';
import { InvoiceType } from '../types/invoiceTypes';

export const postInvoice = async (invoice: InvoiceType): Promise<InvoiceType> => {
  console.log(invoice);
  
  try {
      const data = await axios.post(`http://localhost:3000/invoices`, invoice);
      return data.data
} catch(err: any) {
  throw { message: "Problemo with adding new invoice." + err.message}
}
}




















