import {Item, Tax} from '../interfaces/Invoice.interface';
import {LineItem} from '../interfaces/Payment.interface';

export const parseLineItemToItem = (lineItem: LineItem): Item => {
  const tax: Tax[] = [
    {
      withholding: lineItem.tax_withholding,
      inclusive: lineItem.tax_included,
      rate: lineItem.taxe_rate,
      factor: lineItem.tax_factor,
      type: lineItem.tax_type,
    },
  ];

  return {
    quantity: lineItem.qty,
    taxes: tax,
    unit_name: lineItem.unit_name,
    total: parseFloat(lineItem.price),
    product_key: lineItem.product_key,
    unit_key: lineItem.unit_key,
    name: lineItem.name,
    description: lineItem.description,
  };
};
