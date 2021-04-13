import React from 'react'
import { DataGrid } from '../components/dataGrid/DataGrid'
import { filterData } from '../utils/filterData'
import { FilterContext } from '../context/FilterContext/FilterContext'
import { CustomerDataSourceContext } from '../context/CustomerDataSourceContext/CustomerDataSourceContext'

export const DataGridContainer: React.FC = () => {
  const {customerDataSource} = React.useContext(CustomerDataSourceContext)
  const { filter } = React.useContext(FilterContext)
  const filteredData = React.useMemo(() => {
    return filterData(customerDataSource, filter)
  }, [filter, customerDataSource])

  // @todo: Convert data to a single currency!
  return <DataGrid dataSource={filteredData} />
}
