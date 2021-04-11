import React from 'react'
import { FilterContext } from '../context/FilterContext/FilterContext'
import { useCreateFilterContext } from '../context/FilterContext/useCreateFilterContext'
import { Dashboard } from '../components/dashboard/Dashboard'
import { Filters } from '../components/filters/Filters'

export const DashboardContainer: React.FC = ({ children }) => {
  const filterContext = useCreateFilterContext()

  return (
    <FilterContext.Provider value={filterContext}>
      <Dashboard filters={<Filters />}>{children}</Dashboard>
    </FilterContext.Provider>
  )
}
