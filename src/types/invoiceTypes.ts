export interface InvoiceType {
  id?: number,
  status: string,
  due_date: string,
  amount: number,
  customer_name: string,
}