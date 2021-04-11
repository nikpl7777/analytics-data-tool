import React from 'react'

import { DataGridTablePresentation } from './DataGridTablePresentation'
import { useAgCollectionFromData } from '../../hooks/useAgCollectionFromData'
import { FilterContext } from '../../context/FilterContext/FilterContext'

export const DataGrid: React.FC<{ data: any }> = ({ data }) => {
  const { groupByKey } = React.useContext(FilterContext)
  const collection = useAgCollectionFromData(data, groupByKey)
  return <DataGridTablePresentation rowData={collection} />
}
