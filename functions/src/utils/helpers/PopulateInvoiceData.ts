import {Invoice} from '../interfaces/Invoice.interface';
import {InvoiceSkeletonForPost} from '../interfaces/InvoiceSkeletonForPost.interface';

export const populateInvoiceData = (
  invoiceSkeletonData: InvoiceSkeletonForPost
): Invoice => {
  const invoiceSkeleton = {
    invoicingIntegration: 'facturapi',
    use: 'S01',
    invoiceType: 'I',
    type: 'create_invoice',
    emails: ['gracenikole@gmail.com'],
    payment_form: '99',
    payment_method: 'PPD',
    currency: invoiceSkeletonData.currency,
    items: invoiceSkeletonData.items,
    client: {
      rfc: 'XAXX010101000',
      legal_name: 'PUBLICO EN GENERAL',
      tax_system: {
        label: 'Sin obligaciones fiscales',
        value: '616',
      },
      address: {
        zip: '34000',
        country: 'MEX',
      },
    },
  };

  return invoiceSkeleton;
};
