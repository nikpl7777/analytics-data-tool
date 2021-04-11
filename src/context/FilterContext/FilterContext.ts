import React from 'react'
import { useCreateFilterContext } from './useCreateFilterContext'

export const FilterContext = React.createContext<
  ReturnType<typeof useCreateFilterContext>
>({
  groupByKey: 'Industry',
  setGroupByKey() {
    throw new Error('Setter is called out of context')
  },
})
