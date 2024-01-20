import { Category, LineItem } from "./Payment.interface"

export interface LineItemTable {
  name: string
  description: string
  price: string
  qty: number
  taxe_rate: number
  tax_type: string
  category: Category
  sku: string
  product_key: string
  unit_code: string
  unit_key: string
  unit_name: string
}

export interface PaymentTable {
  accountId: string,
  customer_name: string,
  customer_email: string,
  line_items: LineItem[],
  currency: string,
  payment_method: string,
  created_at: string,
  status: string,
  notes: string,
}