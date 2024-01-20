import { Payment } from '../../interfaces/Payment.interface'
import { PaymentTable } from '../../interfaces/PaymentTable.interface'

import cryptoRandomString from 'crypto-random-string'
import moment from 'moment'

export const parsePaymentData = (payments: Payment[]) => {
  const paymentsData: PaymentTable[] = payments.map((payment) => {
    let key = cryptoRandomString({ length: 10, type: 'numeric' })

    return {
      key: key,
      accountId: payment.accountId,
      customer_name: payment.customer.name,
      customer_email: payment.customer.email,
      line_items: payment.line_items,
      currency: payment.currency,
      payment_method: payment.payment_method,
      created_at: moment(payment.created_at).format('DD-MM-YYYY'),
      status: payment.status,
      notes: payment.notes,
    }
  })

  return paymentsData
}
