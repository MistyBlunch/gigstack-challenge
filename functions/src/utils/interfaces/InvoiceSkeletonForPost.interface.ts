import {Item} from './Invoice.interface';

export interface InvoiceSkeletonForPost {
  items: Item[]
  currency: string
}
