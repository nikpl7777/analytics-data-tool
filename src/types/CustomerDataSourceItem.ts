import type { Currency } from './Currency'

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
