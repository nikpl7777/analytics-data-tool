const formatter = Intl.NumberFormat()

export type Currency = 'USD' | 'GBP' | 'EUR'

const currencySymbols: { [key in Currency]: string } = {
  USD: '$',
  GBP: '£',
  EUR: '€',
}

export const formatCurrency = (amount: number, currency?: Currency): string =>
  `${currency ? currencySymbols[currency] : ''}${formatter.format(amount)}`
