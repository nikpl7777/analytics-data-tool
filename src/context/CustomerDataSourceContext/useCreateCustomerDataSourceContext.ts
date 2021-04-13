import React from 'react'
import type { CustomerDataSourceItem } from '../../types/CustomerDataSourceItem'

export const useCreateCustomerDataSourceContext = () => {
  const [customerDataSource, setCustomerDataSource] = React.useState<
    CustomerDataSourceItem[]
  >([])

  return {
    customerDataSource,
    setCustomerDataSource,
  }
}
