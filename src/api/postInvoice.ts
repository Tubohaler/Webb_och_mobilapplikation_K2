import axios from 'axios';
import { InvoiceType } from '../types/invoiceTypes';

export const postInvoice = async (id: number): Promise<InvoiceType[]> => {
  try {
      const data = await axios.post(`http://localhost:3000/invoices/${id}`);
      return data.data
} catch(err) {
  throw { message: "Problemo with adding new invoice.", status: 404}
}
}




















