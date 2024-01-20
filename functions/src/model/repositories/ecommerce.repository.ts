import {Firestore, getFirestore} from 'firebase-admin/firestore';
import {ECommerceRepositoryInterface} from './interfaces/ecommerce.repository.interface';
import {ECommerce} from '../ecommerce.model';

export class ECommerceRepository implements ECommerceRepositoryInterface {
  private firestore: Firestore;

  constructor() {
    this.firestore = getFirestore();
  }

  async create(id: string) {
    try {
      await this.firestore.collection('E-Commerces').doc(id).create({});
      return true;
    } catch {
      return false;
    }
  }

  async addInvoiceByCurrency(id: string, currency: string, invoice: object) {
    await this.firestore.collection('E-Commerces').doc(id).collection(currency).add(invoice);
  }

  async findAllInvoices() {
    const collections = (await this.firestore.collection('E-Commerces').get()).docs.map(async (doc) => {
      const collections = (await doc.ref.listCollections()).map(async (collection) => {
        return {
          id: collection.id,
          invoices: (await collection.get()).docs.map((doc) => doc.data()),
        };
      });

      return {
        id: doc.id,
        collections: await Promise.all(collections),
      };
    });
    return await Promise.all(collections);
  }

  async findInvoicesById(id: string) {
    const doc = await this.firestore.collection('E-Commerces').doc(id).get();
    const collections = (await doc.ref.listCollections()).map(async (collection) => {
      return {
        id: collection.id,
        invoices: (await collection.get()).docs.map((doc) => doc.data()),
      };
    });

    return {
      id: id,
      collections: await Promise.all(collections),
    };
  }

  async findInvoicesByIdAndCurrency(id: string, currency: string) {
    const collection = this.firestore.collection('E-Commerces').doc(id).collection(currency);
    const listDocuments = await collection.listDocuments();
    const documentsPromises = listDocuments.map(async (doc) => await doc.get());

    return {
      id: id,
      collections: [{
        id: collection.id,
        invoices: (await Promise.all(documentsPromises)).map((d) => d.data() as ECommerce),
      }],
    };
  }
}
