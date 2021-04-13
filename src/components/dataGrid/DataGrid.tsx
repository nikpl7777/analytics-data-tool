import React from 'react'

import type { CustomerDataSourceItemUnifiedCurrency } from '../../types/CustomerDataSourceItem'
import { DataGridTablePresentation } from './DataGridTablePresentation'
import { useAggregatedCustomersTableData } from '../../hooks/useAggregatedCustomersTableData'
import { FilterContext } from '../../context/FilterContext/FilterContext'

export const DataGrid: React.FC<{ dataSource: CustomerDataSourceItemUnifiedCurrency[] }> = ({ dataSource }) => {
  const { aggregateByKey } = React.useContext(FilterContext)
  const aggregatedTableData = useAggregatedCustomersTableData(dataSource, aggregateByKey)
  return <DataGridTablePresentation rowData={aggregatedTableData} />
}
