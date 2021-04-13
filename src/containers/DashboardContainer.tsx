import React from 'react'
import { FilterContext } from '../context/FilterContext/FilterContext'
import { useCreateFilterContext } from '../context/FilterContext/useCreateFilterContext'
import { CustomerDataSourceContext } from '../context/CustomerDataSourceContext/CustomerDataSourceContext'
import { useCreateCustomerDataSourceContext } from '../context/CustomerDataSourceContext/useCreateCustomerDataSourceContext'
import {useGetCustomerData} from '../hooks/useGetCustomerData'
import { Dashboard } from '../components/dashboard/Dashboard'
import { Filters } from '../components/filters/Filters'
import { ExchangeRates } from '../components/ExhangeRates/ExchangeRates'

export const DashboardContainer: React.FC = ({ children }) => {
  const customerData = useGetCustomerData()
  const filterContext = useCreateFilterContext()
  const customerDataSourceContext = useCreateCustomerDataSourceContext(customerData)

  return (
    <CustomerDataSourceContext.Provider value={customerDataSourceContext}>
      <FilterContext.Provider value={filterContext}>
        <Dashboard
          filters={
            <>
              <Filters />
              <ExchangeRates />
            </>
          }
        >
          {children}
        </Dashboard>
      </FilterContext.Provider>
    </CustomerDataSourceContext.Provider>
  )
}
