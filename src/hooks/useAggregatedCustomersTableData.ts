import React from 'react'
import type { CustomerDataSourceItem } from '../types/CustomerDataSourceItem'
import type { TableDataItem } from '../types/TableDataItem'
import {
  mapMatrixesToAgGridCollection,
  aggregateCollectionToMatrixes,
} from '../utils/data-processing'

export const useAggregatedCustomersTableData = (
  data: CustomerDataSourceItem[],
  aggregateByKey: string
): TableDataItem[] => {
  return React.useMemo(() => {
    const matrixes = aggregateCollectionToMatrixes(data, aggregateByKey)
    return mapMatrixesToAgGridCollection(matrixes)
  }, [data, aggregateByKey]) as TableDataItem[]
}
