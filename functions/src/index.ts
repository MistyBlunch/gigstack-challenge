import {onRequest} from 'firebase-functions/v2/https';
import {PaymentService} from './services/payment.service';
import {initializeApp} from 'firebase-admin/app';
import {InvoicesController} from './controllers/invoices.controller';
import {HttpService} from './services/http.service';
import {ECommerceRepository} from './model/repositories/ecommerce.repository';
import {ConfigService} from './config/config.service';
import {runWith} from 'firebase-functions/v1';

initializeApp();

const configService = new ConfigService();

const eCommerceRepository = new ECommerceRepository();
const httpService = new HttpService(configService);
const paymentService = new PaymentService(configService, httpService, eCommerceRepository);
const invoicesController = new InvoicesController(paymentService, configService);

export const retrievePayments = onRequest(invoicesController.retrievePayments);
export const createGlobalInvoices = runWith({timeoutSeconds: 300})
  .pubsub
  .schedule('59 23 28-31 * *')
  .timeZone('America/Mexico_City')
  .onRun(invoicesController.createGlobalInvoices);
export const retrieveGlobalInvoices = onRequest({
  timeoutSeconds: 300,
}, invoicesController.retrieveGlobalInvoices);
