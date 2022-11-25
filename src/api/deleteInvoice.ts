import axios from "axios";
import { InvoiceType } from "../types/invoiceTypes";

export const deleteInvoice = async(id: number): Promise<InvoiceType[]> => {
    try {
        const data = await axios.delete(`http://localhost:3000/invoices/${id}`)
        return data.data
    }catch(err) {
        throw{message: "Problemos with deleting your invoice.", status: 404}
    }
}