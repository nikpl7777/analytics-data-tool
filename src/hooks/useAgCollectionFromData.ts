import React from 'react'
import {
  mapMatrixesToAgGridCollection,
  aggregateCollectionToMatrixes,
} from '../utils/data-processing'

export const useAgCollectionFromData = (data: any, aggregateByKey: string) => {
  return React.useMemo(() => {
    const matrixes = aggregateCollectionToMatrixes(data, aggregateByKey)
    return mapMatrixesToAgGridCollection(matrixes)
  }, [data, aggregateByKey])
}
