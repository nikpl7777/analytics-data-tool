import React from 'react'
import { useCreateCustomerDataSourceContext } from './useCreateCustomerDataSourceContext'

export type CustomerDataSourceContextState = ReturnType<
  typeof useCreateCustomerDataSourceContext
>

export const CustomerDataSourceContext = React.createContext<CustomerDataSourceContextState>(
  {
    customerDataSource: [],
    setCustomerDataSource() {
      throw new Error('Setter is called out of context')
    },
  }
)
