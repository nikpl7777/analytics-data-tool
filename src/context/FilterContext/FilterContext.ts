import React from 'react'
import { useCreateFilterContext } from './useCreateFilterContext'

export type FilterContextState = ReturnType<typeof useCreateFilterContext>

export const FilterContext = React.createContext<FilterContextState>({
  groupByKey: 'Industry',
  setGroupByKey() {
    throw new Error('Setter is called out of context')
  },
  filter: {},
  setFilter() {
    throw new Error('Setter is called out of context')
  },
})
