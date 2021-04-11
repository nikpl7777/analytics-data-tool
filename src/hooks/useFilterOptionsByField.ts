import React from 'react'
// @todo: Load data via AJAX and get from state
import data from '../data-sources/customers_G2000.json'
import { DataAggregationFields } from '../models/DataAggregationFields'
import { map, uniq } from 'lodash'

export const useFilterOptionsByField = (
  field: keyof typeof DataAggregationFields
): string[] => {
  return React.useMemo(() => {
    return uniq(map(data, field))
  }, [field])
}
