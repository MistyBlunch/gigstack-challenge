export interface Invoice {
  id: string
  collections: Collection[]
}

export interface Collection {
  id: string
  invoices: InvoiceElement[]
}

export interface InvoiceElement {
  date: Date
  fromApi: boolean
  livemode: boolean
  use: string
  payment_form: string
  issuer_info: IssuerInfo
  created_at: Date
  stamp: Stamp
  global: Global
  type: string
  pdf_custom_section: string
  pastInvoice: null
  uuid: string
  relation: null
  emails: string[]
  total: number
  invoiceType: string
  client: Client
  cfdi_version: number
  currency: string
  from: string
  cancellation_status: string
  id: string
  export: string
  payment_method: string
  verification_url: string
  timestamp: number
  owner: string
  address: InvoiceAddress
  test: boolean
  exchange_rate: number
  team: string
  internalClient: Client
  invoicingIntegration: string
  folio_number: number
  series: string
  organization: string
  exchange: number
  items: Item[]
  customer: Customer
  status: string
}

export interface InvoiceAddress {
  zip: string
  country: Country
  city: string
  street: string
  exterior: string
  municipality: string
  neighborhood: string
  state: string
  interior: string
}

export enum Country {
  Mex = 'MEX',
}

export interface Client {
  address: ClientAddress
  legal_name: string
  tax_system: string
  rfc: string
}

export interface ClientAddress {
  zip: string
  country: Country
}

export interface Customer {
  address: ClientAddress
  id: string
  legal_name: string
  tax_system: string
  tax_id: string
}

export interface Global {
  months: string
  year: number
  periodicity: string
  _id: string
}

export interface IssuerInfo {
  address: InvoiceAddress
  legal_name: string
  tax_system: string
  tax_id: string
}

export interface Item {
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
  taxes: Tax[]
  tax_included: boolean
  taxability: string
}

export interface Tax {
  withholding: boolean
  rate: number
  type: Type
  factor: Factor
  ieps_mode: IepsMode
  base: null
}

export enum Factor {
  Tasa = 'Tasa',
}

export enum IepsMode {
  SumBeforeTaxes = 'sum_before_taxes',
}

export enum Type {
  Iva = 'IVA',
}

export enum UnitKey {
  H87 = 'H87',
}

export enum UnitName {
  Pieza = 'Pieza',
}

export interface Stamp {
  date: Date
  sat_cert_number: string
  sat_signature: string
  signature: string
  complement_string: string
}
