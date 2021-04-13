import React from 'react'
import type { CustomerDataSourceItemUnifiedCurrency } from '../types/CustomerDataSourceItem'
import type { TableDataItem } from '../types/TableDataItem'
import type { DataAggregationFields } from '../models/DataAggregationFields'
import {
  mapMatrixesToAgGridCollection,
  aggregateCollectionToMatrixes,
} from '../utils/data-processing'

export const useAggregatedCustomersTableData = (
  data: CustomerDataSourceItemUnifiedCurrency[],
  aggregateByKey: keyof typeof DataAggregationFields
): TableDataItem[] => {
  return React.useMemo(() => {
    const matrixes = aggregateCollectionToMatrixes(data, aggregateByKey)
    return mapMatrixesToAgGridCollection(matrixes)
  }, [data, aggregateByKey]) as TableDataItem[]
}
