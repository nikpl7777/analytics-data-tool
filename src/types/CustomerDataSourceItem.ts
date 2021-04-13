import type { Currency } from './Currency'
import type { UNIFIED_DEFAULT_CURRENCY } from '../models/UnifiedDefaultCurrency'

export type ARRWithDate = {
  ARR: number
  date: string
}

export type CustomerDataSourceItem = {
  Account: string
  Tier: string
  Currency: Currency
  Industry: string
  Region: string
  ARR: number
  details: ARRWithDate[]
}

export type CustomerDataSourceItemUnifiedCurrency = CustomerDataSourceItem & {
  Currency: typeof UNIFIED_DEFAULT_CURRENCY
}
