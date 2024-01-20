import cryptoRandomString from 'crypto-random-string'
import { Item } from '../../interfaces/Invoice.interface'
import {
  ItemTable,
  Product,
} from '../../interfaces/InvoiceTable.interface'

export const parseItemData = (items: Item[]) => {
  const ItemsTableData: ItemTable[] = items.map((item) => {
    let key = cryptoRandomString({ length: 10, type: 'numeric' })

    return {
      key: key,
      quantity: item.quantity,
      discount: item.discount,
      product: {} as Product,
      unit_name: item.product.unit_name,
      unit_key: item.product.unit_key,
      product_key: item.product.product_key,
      price: item.product.price,
      description: item.product.description,
      tax_included: item.product.tax_included ? 'yes': 'no',
      taxability: item.product.taxability,
    }
  })

  return ItemsTableData
}
