import React from 'react'
import { FilterGroupBy } from '../../models/FilterGroupBy'

export const useCreateFilterContext = () => {
  const [groupByKey, setGroupByKey] = React.useState<
    keyof typeof FilterGroupBy
  >('Industry')

  return {
    groupByKey,
    setGroupByKey,
  }
}
