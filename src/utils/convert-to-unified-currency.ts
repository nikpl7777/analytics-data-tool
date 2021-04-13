import type {
  CustomerDataSourceItem,
  CustomerDataSourceItemUnifiedCurrency,
} from '../types/CustomerDataSourceItem'
import { UNIFIED_DEFAULT_CURRENCY } from '../models/UnifiedDefaultCurrency'
import exchangeRates from '../data-sources/exhange-rates.json'

const applyExhangeRate = (
  item: CustomerDataSourceItem
): CustomerDataSourceItemUnifiedCurrency => {
  if (item.Currency === UNIFIED_DEFAULT_CURRENCY) {
    return item as CustomerDataSourceItemUnifiedCurrency
  }

  return {
    ...item,
    Currency: UNIFIED_DEFAULT_CURRENCY,
    ARR: item.ARR * exchangeRates[item.Currency],
    details: item.details.map((detail) => ({
      ...detail,
      ARR: detail.ARR * exchangeRates[item.Currency],
    })),
  }
}

export const convertToUnifiedCurrency = (
  data: CustomerDataSourceItem[]
): CustomerDataSourceItemUnifiedCurrency[] => data.map(applyExhangeRate)
