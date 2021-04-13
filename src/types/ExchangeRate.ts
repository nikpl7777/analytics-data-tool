import type { Currency } from './Currency'

export type ExchangeRate = {
  [key in Currency]: number
}
