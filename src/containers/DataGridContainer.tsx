import React from 'react'
import { DataGrid } from '../components/dataGrid/DataGrid'
import { filterDataSource } from '../utils/filter-data-source'
import { FilterContext } from '../context/FilterContext/FilterContext'
import { CustomerDataSourceContext } from '../context/CustomerDataSourceContext/CustomerDataSourceContext'

export const DataGridContainer: React.FC = () => {
  const { customerDataSource } = React.useContext(CustomerDataSourceContext)
  const { filter } = React.useContext(FilterContext)
  const filteredData = React.useMemo(() => {
    return filterDataSource(customerDataSource, filter)
  }, [filter, customerDataSource])

  return <DataGrid dataSource={filteredData} />
}
