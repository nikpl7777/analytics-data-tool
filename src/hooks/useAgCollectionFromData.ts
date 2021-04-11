import React from 'react'
import {
  mapMatrixesToAgGridCollection,
  aggregateCollectionToMatrixes,
} from '../utils/data-processing'

export const useAgCollectionFromData = (data: any, groupByKey: string) => {
  return React.useMemo(() => {
    const matrixes = aggregateCollectionToMatrixes(data, groupByKey)
    return mapMatrixesToAgGridCollection(matrixes)
  }, [data, groupByKey])
}
