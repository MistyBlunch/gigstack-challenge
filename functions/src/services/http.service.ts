import * as superagent from 'superagent';
import {Invoice} from '../utils/interfaces/Invoice.interface';
import * as logger from 'firebase-functions/logger';
import {ConfigService} from '../config/config.service';

export class HttpService {
  private configService: ConfigService;

  constructor(configService: ConfigService) {
    this.configService = configService;
  }

  getExchangeRate = async (currency: string) => {
    const apiKey = this.configService.config.exchangeApiConfig.apiKey;
    const apiUrl = `${this.configService.config.exchangeApiConfig.apiUrl}/${apiKey}/latest/${currency}`;

    try {
      const response = await superagent.get(apiUrl);
      return response.body.data.conversion_rates.MXN;
    } catch (error) {
      logger.error('Error al realizar la solicitud:', error);
    }
  };

  createInvoice = async (data: Invoice, eCommerceID: string) => {
    this.configService.findGigstackApiKey(eCommerceID);

    const apiUrl = `${this.configService.config.gigstackApiConfig.apiUrl}/create`;
    const authToken = this.configService.config.gigstackApiConfig[eCommerceID];

    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${authToken}`,
    };

    const response = await superagent.post(apiUrl).send(data).set(headers);
    return response.body;
  };
}
