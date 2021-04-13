import type { FilterContextState } from '../context/FilterContext/FilterContext'
import type { CustomerDataSourceItem } from '../types/CustomerDataSourceItem'
import { filter, every, toPairs } from 'lodash'
import { DataAggregationFields } from '../models/DataAggregationFields'

export const filterData = (
  data: CustomerDataSourceItem[],
  filters: FilterContextState['filter']
): CustomerDataSourceItem[] => {
  return filter(data, (item) => {
    return every(
      toPairs(filters),
      ([filterKey, filterValue]: [
        keyof typeof DataAggregationFields,
        string | number
      ]) => filterValue === undefined || item[filterKey] === filterValue
    )
  })
}
