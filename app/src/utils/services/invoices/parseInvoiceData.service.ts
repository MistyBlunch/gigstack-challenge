/* eslint-disable array-callback-return */
import { Invoice } from '../../interfaces/Invoice.interface'

import moment from 'moment'
import {
  Collection,
  InvoiceElement,
} from '../../interfaces/InvoiceTable.interface'

export const parseInvoiceData = (invoiceData: Invoice) => {
  const invoicesData: InvoiceElement[] = []
  const invoiceCollectionsData: Collection[] = []

  invoiceData.collections.forEach((collection) => {
    collection.invoices.forEach((invoice) => {
      const data: InvoiceElement = {
        key: invoice.id,
        use: invoice.use,
        payment_form: invoice.payment_form,
        created_at: moment(invoice.created_at).format('DD-MM-YYYY'),
        type: invoice.type,
        emails: invoice.emails[0],
        total: invoice.total,
        client_address: `${invoice.client.address.country}, ${invoice.client.address.zip}`,
        client_legal_name: invoice.client.legal_name,
        client_tax_system: invoice.client.tax_system,
        client_rfc: invoice.client.rfc,
        id: invoice.id,
        payment_method: invoice.payment_method,
        verification_url: invoice.verification_url,
        exchange_rate: invoice.exchange_rate,
        items: invoice.items,
        status: invoice.status,
      }

      invoicesData.push(data)
    })

    invoiceCollectionsData.push({
      id: collection.id,
      invoices: invoicesData,
    })
  })

  return invoicesData
}
