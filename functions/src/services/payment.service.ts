import * as fs from 'fs';
import {populateInvoiceData} from '../utils/helpers/PopulateInvoiceData';
import {Payment} from '../utils/interfaces/Payment.interface';
import {parseLineItemToItem} from '../utils/helpers/ParseLineItemToItem';
import {Item} from '../utils/interfaces/Invoice.interface';
import {HttpService} from './http.service';
import {ECommerceRepositoryInterface} from '../model/repositories/interfaces/ecommerce.repository.interface';
import {ConfigService} from '../config/config.service';
import * as pLimit from 'p-limit';

export class PaymentService {
  maxItems = 750;
  rawJsonData: Payment[] = [];
  structuredPaymentData: {
    [accountID: string]: {
      [currency: string]: Item[][]
    }
  } = {};
  exchangeRate: {
    [currency: string]: number
  } = {};

  private httpService: HttpService;
  private configService: ConfigService;
  private eCommerceRepository: ECommerceRepositoryInterface;

  constructor(
    configService: ConfigService,
    httpService: HttpService,
    eCommerceRepository: ECommerceRepositoryInterface
  ) {
    this.configService = configService;
    this.httpService = httpService;
    this.eCommerceRepository = eCommerceRepository;
  }

  readJsonData() {
    const rawData = fs.readFileSync(
      require.resolve(this.configService.config.paymentsFile),
      {
        encoding: 'utf8',
      }
    );
    this.rawJsonData = JSON.parse(rawData);
    return this.rawJsonData;
  }

  async saveExchangeRate(currency: string) {
    if (currency != 'MXN' && !this.exchangeRate[currency]) {
      this.exchangeRate[currency] = await this.httpService.getExchangeRate(currency);
    }
  }

  async parseAndSplitData() {
    const processPromises = this.rawJsonData.map(async (payment) => {
      payment.currency = payment.currency.toUpperCase();
      await this.saveExchangeRate(payment.currency);

      if (!this.structuredPaymentData[payment.accountId]) {
        this.structuredPaymentData[payment.accountId] = {};
      }

      if (
        !this.structuredPaymentData[payment.accountId][
          payment.currency
        ]
      ) {
        this.structuredPaymentData[payment.accountId][
          payment.currency
        ] = [[]];
      }

      const actual =
        this.structuredPaymentData[payment.accountId][
          payment.currency
        ];

      payment.line_items.forEach((lineItem) => {
        const item = parseLineItemToItem(lineItem);
        if (payment.currency != 'MXN') {
          item.total =
            item.total * this.exchangeRate[payment.currency];
        }
        actual[actual.length - 1].push(item);
        if (actual[actual.length - 1].length >= this.maxItems) {
          actual.push([]);
        }
      });
    });

    await Promise.all(processPromises);
  }

  async createInvoices() {
    const limit = pLimit(1);

    const promises: Promise<void>[] = [];

    Object.keys(this.structuredPaymentData).map((accountID) => {
      this.eCommerceRepository.create(accountID);
      Object.keys(this.structuredPaymentData[accountID]).forEach(
        (currency) => {
          const promiseToken = this.structuredPaymentData[accountID][
            currency
          ].map(async (invoiceItems) => {
            if (invoiceItems.length < 1) {
              return;
            }

            const request = populateInvoiceData({
              currency: currency,
              items: invoiceItems,
            });

            const invoiceResponse = await limit(async () => {
              return await this.httpService.createInvoice(
                request,
                accountID
              );
            });
            await this.eCommerceRepository.addInvoiceByCurrency(
              accountID,
              currency,
              invoiceResponse.data
            );
          });
          promises.push(...promiseToken);
        }
      );
    });

    await Promise.all(promises);
  }

  async findAllInvoices() {
    return await this.eCommerceRepository.findAllInvoices();
  }

  async findInvoicesById(id: string) {
    return await this.eCommerceRepository.findInvoicesById(id);
  }

  async findInvoicesByIdAndCurrency(id: string, currency: string) {
    return await this.eCommerceRepository.findInvoicesByIdAndCurrency(
      id,
      currency
    );
  }
}
