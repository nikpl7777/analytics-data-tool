import data from '../data-sources/customers_G2000.json'
import type { CustomerDataSourceItem } from '../types/CustomerDataSourceItem'
// @todo: Replace this with async data loader
export const useGetCustomerData = (): CustomerDataSourceItem[] =>
  data as CustomerDataSourceItem[]
