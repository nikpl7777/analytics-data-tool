import React from 'react'
import { DataAggregationFields } from '../../models/DataAggregationFields'

export const useCreateFilterContext = () => {
  const [aggregateByKey, setAggregateByKey] = React.useState<
    keyof typeof DataAggregationFields
  >('Industry')

  const [filter, setFilter] = React.useState<
    {
      [key in DataAggregationFields]?: string
    }
  >({})

  return {
    filter,
    setFilter,
    aggregateByKey,
    setAggregateByKey,
  }
}
