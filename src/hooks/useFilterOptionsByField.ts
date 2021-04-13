import React from 'react'
import { DataAggregationFields } from '../models/DataAggregationFields'
import { map, uniq } from 'lodash'
import { CustomerDataSourceContext } from '../context/CustomerDataSourceContext/CustomerDataSourceContext'

export const useFilterOptionsByField = (
  field: keyof typeof DataAggregationFields
): string[] => {
  const { customerDataSource } = React.useContext(CustomerDataSourceContext)

  return React.useMemo(() => {
    return uniq(map(customerDataSource, field))
  }, [field, customerDataSource])
}
