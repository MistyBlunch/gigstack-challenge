export interface Address {
  zip: string
  country: string
}

export interface Invoice {
  invoicingIntegration: string
  use: string
  invoiceType: string
  payment_form: string
  type: string
  emails: string[]
  currency: string
  exchange_rate?: number | null
  payment_method: string
  items: Item[]
  client: Client
}

export interface Client {
  rfc: string
  legal_name: string
  tax_system: TaxSystem
  address: Address
}

export interface Item {
  quantity: number
  taxes: Tax[]
  unit_name: string
  total: number
  product_key: string
  unit_key: string
  name: string
  description: string
}

export interface TaxSystem {
    label: string;
    value: string;
}

export interface Tax {
  withholding: boolean
  inclusive: boolean
  rate: number
  factor: string
  type: string
}
