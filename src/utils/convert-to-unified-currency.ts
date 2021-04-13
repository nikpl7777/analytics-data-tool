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

  const exchangeRate = exchangeRates[item.Currency] || 0

  return {
    ...item,
    Currency: UNIFIED_DEFAULT_CURRENCY,
    ARR: item.ARR * exchangeRate,
    details: item.details.map((detail) => ({
      ...detail,
      ARR: detail.ARR * exchangeRate,
    })),
  }
}

export const convertToUnifiedCurrency = (
  data: CustomerDataSourceItem[]
): CustomerDataSourceItemUnifiedCurrency[] => {
  return data.map(applyExhangeRate)
}
