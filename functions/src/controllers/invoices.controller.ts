import {Request, Response} from 'firebase-functions/v1';
import {PaymentService} from '../services/payment.service';
import {ConfigService} from '../config/config.service';

export class InvoicesController {
  private paymentService: PaymentService;
  private configService: ConfigService;

  constructor(paymentService: PaymentService, configService: ConfigService) {
    this.paymentService = paymentService;
    this.configService = configService;
  }

  retrievePayments = async (req: Request, res: Response) => {
    this.configService.loadConfig();

    const data = this.paymentService.readJsonData();
    res.json(data);
  };

  createGlobalInvoices = async () => {
    this.configService.loadConfig();

    this.paymentService.readJsonData();
    await this.paymentService.parseAndSplitData();
    await this.paymentService.createInvoices();
  };

  retrieveGlobalInvoices = async (req: Request, res: Response) => {
    this.configService.loadConfig();

    if (req.query.id) {
      if (req.query.currency) {
        const globalInvoices = await this.paymentService.findInvoicesByIdAndCurrency(req.query.id as string, req.query.currency as string);
        res.json(globalInvoices);
        return;
      }

      const globalInvoices = await this.paymentService.findInvoicesById(req.query.id as string);
      res.json(globalInvoices);
      return;
    }

    const globalInvoices = await this.paymentService.findAllInvoices();

    res.json(globalInvoices);
  };
}
