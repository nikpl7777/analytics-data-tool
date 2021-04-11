// @todo: Load data via AJAX and put into state
import data from '../data-sources/customers_G2000.json'
import React from 'react'
import { DataGrid } from '../components/dataGrid/DataGrid'
import { filterData } from '../utils/filterData'
import { FilterContext } from '../context/FilterContext/FilterContext'

export const DataGridContainer: React.FC = () => {
  const { filter } = React.useContext(FilterContext)
  const filteredData = React.useMemo(() => {
    return filterData(data, filter)
  }, [filter])

  // @todo: Convert data to a single currency!
  return <DataGrid data={filteredData} />
}
