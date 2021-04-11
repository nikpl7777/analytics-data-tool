// @todo: Replace with type definitions
import type DataType from '../data-sources/customers_G2000.json'
import type { FilterContextState } from '../context/FilterContext/FilterContext'
import { filter, every, toPairs } from 'lodash'
import { DataAggregationFields } from '../models/DataAggregationFields'

export const filterData = (
  data: typeof DataType,
  filters: FilterContextState['filter']
) => {
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
