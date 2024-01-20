interface GigstackApiConfig {
  apiUrl: string
  [eCommerceId: string]: string
}

interface ExchangeApiConfig {
  apiUrl: string
  apiKey: string
}

export interface Config {
  paymentsFile: string
  exchangeApiConfig: ExchangeApiConfig
  gigstackApiConfig: GigstackApiConfig
}
