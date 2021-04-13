import React from 'react'
import type {
  CustomerDataSourceItem,
  CustomerDataSourceItemUnifiedCurrency,
} from '../../types/CustomerDataSourceItem'
import { convertToUnifiedCurrency } from '../../utils/convert-to-unified-currency'

export const useCreateCustomerDataSourceContext = (
  initiaCustomersData: CustomerDataSourceItem[] = []
) => {
  const [customerDataSource, setCustomerDataSource] = React.useState<
    CustomerDataSourceItemUnifiedCurrency[]
  >([])

  const processAndSetDataSource = React.useCallback(
    (dataSource: CustomerDataSourceItem[]) => {
      setCustomerDataSource(convertToUnifiedCurrency(dataSource))
    },
    [setCustomerDataSource]
  )

  React.useEffect(() => {
    processAndSetDataSource(initiaCustomersData)
  }, [processAndSetDataSource, initiaCustomersData])

  return {
    customerDataSource,
    setCustomerDataSource: processAndSetDataSource,
  }
}
