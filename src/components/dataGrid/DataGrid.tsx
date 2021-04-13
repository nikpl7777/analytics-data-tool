import React from 'react'

import type { CustomerDataSourceItem } from '../../types/CustomerDataSourceItem'
import { DataGridTablePresentation } from './DataGridTablePresentation'
import { useAggregatedCustomersTableData } from '../../hooks/useAggregatedCustomersTableData'
import { FilterContext } from '../../context/FilterContext/FilterContext'

export const DataGrid: React.FC<{ dataSource: CustomerDataSourceItem[] }> = ({ dataSource }) => {
  const { aggregateByKey } = React.useContext(FilterContext)
  const aggregatedTableData = useAggregatedCustomersTableData(dataSource, aggregateByKey)
  return <DataGridTablePresentation rowData={aggregatedTableData} />
}
