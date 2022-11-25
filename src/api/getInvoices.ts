import axios from "axios";
import { InvoiceType } from "../types/invoiceTypes";

export const getInvoices = async (id: number): Promise<InvoiceType[]> => {
    try {
        const data = await axios.get(`http://localhost:3000/invoices`);
        return data.data
    }catch(err) {
        throw {message: "Problem getting the invoices.", state: 404}
    };
}