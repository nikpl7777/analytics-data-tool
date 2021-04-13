import type { Currency } from '../types/Currency'
const formatter = Intl.NumberFormat()

const currencySymbols: { [key in Currency]: string } = {
  USD: '$',
  GBP: '£',
  EUR: '€',
}

export const formatCurrency = (amount: number, currency?: Currency): string => {
  const formattedValue = formatter.format(amount)
  const currenySymbol = currency ? currencySymbols[currency] : ''

  if (currency === 'USD') {
    return `${currenySymbol}${formattedValue}`
  }

  if (!currency) {
    return formattedValue
  }

  return `${formattedValue} ${currenySymbol}`
}
