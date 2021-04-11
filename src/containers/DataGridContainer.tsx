// @todo: Load data via AJAX
import data from '../data-sources/customers_G2000.json'
import React from 'react'
import { DataGrid } from '../components/dataGrid/DataGrid'

export const DataGridContainer: React.FC = () => {
  // @todo: Convert data to a single currency!
  return <DataGrid data={data} />
}
