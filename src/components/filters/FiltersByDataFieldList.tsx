import React from 'react'
import { FiltersByDataField } from './FiltersByDataField'
import { DataAggregationFields } from '../../models/DataAggregationFields'

export const FiltersByDataFieldList: React.FC = () => {
  return (
    <>
      {Object.values(DataAggregationFields).map((item) => (
        <FiltersByDataField field={item} key={item} />
      ))}
    </>
  )
}
