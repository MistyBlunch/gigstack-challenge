import {ECommerce} from '../../ecommerce.model';

export interface ECommerceRepositoryInterface {
  create(id: string): Promise<boolean>
  addInvoiceByCurrency(id: string, currency: string, invoice: object): Promise<void>
  findAllInvoices(): Promise<ECommerce[]>
  findInvoicesById(id: string): Promise<ECommerce>
  findInvoicesByIdAndCurrency(id: string, currency: string): Promise<ECommerce>
}
