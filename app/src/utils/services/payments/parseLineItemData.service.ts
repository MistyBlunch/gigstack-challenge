import cryptoRandomString from 'crypto-random-string'
import { LineItem } from '../../interfaces/Payment.interface'
import { LineItemTable } from '../../interfaces/PaymentTable.interface'

export const parseLineItemData = (lineItems: LineItem[]) => {
  const lineItemsData: LineItemTable[] = []

  lineItems.forEach((item) => {
    let key = cryptoRandomString({ length: 10, type: 'numeric' })

    const data = {
      key: key,
      name: item.name,
      description: item.description,
      price: item.price,
      qty: item.qty,
      taxe_rate: item.taxe_rate,
      tax_type: item.tax_type,
      category: item.category,
      sku: item.sku,
      product_key: item.product_key,
      unit_code: item.unit_code,
      unit_key: item.unit_key,
      unit_name: item.unit_name,
    }

    lineItemsData.push(data)
  })

  return lineItemsData
}
