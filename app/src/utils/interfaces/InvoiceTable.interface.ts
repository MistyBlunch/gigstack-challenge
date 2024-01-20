export interface Invoice {
  id: string
  collections: Collection[]
}

export interface Collection {
  id: string
  invoices: InvoiceElement[]
}
export interface InvoiceElement {
  key: string
  use: string
  payment_form: string
  created_at: string
  type: string
  emails: string
  total: number
  client_address: string,
  client_legal_name: string,
  client_tax_system: string,
  client_rfc: string,
  id: string
  payment_method: string
  verification_url: string
  exchange_rate?: number
  items: ItemTable[]
  status: string
}

export enum Country {
  Mex = 'MEX',
}

export interface ItemTable {
  product: Product
  quantity: number
  discount: number
}

export interface Product {
  unit_name: UnitName
  product_key: string
  price: number
  unit_key: UnitKey
  description: string
  tax_included: boolean
  taxability: string
}

export enum UnitKey {
  H87 = 'H87',
}

export enum UnitName {
  Pieza = 'Pieza',
}
