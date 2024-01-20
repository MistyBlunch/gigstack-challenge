import {error} from 'firebase-functions/logger';
import {Config} from './config.schema';

export class ConfigService {
  config: Config;

  constructor() {
    this.config = {
      paymentsFile: '',
      exchangeApiConfig: {
        apiUrl: '',
        apiKey: '',
      },
      gigstackApiConfig: {
        apiUrl: '',
      },
    };
  }

  loadConfig() {
    this.config = {
      paymentsFile: this.getEnvOrDefault('PAYMENTS_FILE', ''),
      exchangeApiConfig: {
        apiUrl: this.getEnvOrDefault('EXCHANGE_API_URL', ''),
        apiKey: this.getEnvOrDefault('EXCHANGE_API_KEY', ''),
      },
      gigstackApiConfig: {
        apiUrl: this.getEnvOrDefault('GIGSTACK_API_URL', ''),
      },
    };
  }

  findGigstackApiKey(eCommerceID: string) {
    if (!this.config.gigstackApiConfig[eCommerceID]) {
      if (process.env[eCommerceID.toUpperCase()]) {
        this.config.gigstackApiConfig[eCommerceID] = process.env[eCommerceID.toUpperCase()] || '';
      } else {
        error('Api Key Not Found');
      }
    }
  }

  private getEnvOrDefault(env: string, def: string): string {
    if (process.env[env]) {
      return process.env[env] || '';
    }
    return def;
  }
}
