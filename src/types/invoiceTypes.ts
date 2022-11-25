export interface InvoiceType {
    id: number,
      status: string,
      due_date: number,
      amount: number,
      project: number,
      customer_name: string,
      created_date: number
}