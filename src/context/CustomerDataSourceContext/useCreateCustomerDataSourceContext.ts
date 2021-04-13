import React from 'react'
import type { CustomerDataSourceItem } from '../../types/CustomerDataSourceItem'

export const useCreateCustomerDataSourceContext = (
  initiaCustomersData: CustomerDataSourceItem[] = []
) => {
  const [customerDataSource, setCustomerDataSource] = React.useState<
    CustomerDataSourceItem[]
  >(initiaCustomersData)

  return {
    customerDataSource,
    setCustomerDataSource,
  }
}
