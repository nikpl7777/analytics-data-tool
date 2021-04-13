import React from 'react'
import { AgGridColumn, AgGridReact } from 'ag-grid-react'
import type { ValueGetterParams } from 'ag-grid-community'
import type { TableDataItem } from '../../types/TableDataItem'
import 'ag-grid-community/dist/styles/ag-grid.css'
import 'ag-grid-community/dist/styles/ag-theme-alpine.css'

import { formatCurrency } from '../../utils/format-currency'

function abValueGetter(params: ValueGetterParams) {
  const value = params.data[params.column.getColId()]
  return formatCurrency(value)
}

export const DataGridTablePresentation: React.FC<{ rowData: TableDataItem[] }> = ({
  rowData,
}) => {
  const columns = React.useMemo(() => Object.keys(rowData[0] || {}), [rowData])

  return (
    <div
      className="ag-theme-alpine"
      style={{ height: 'calc(100vh - 175px)', width: '100%' }}
    >
      <AgGridReact rowData={rowData}>
        <AgGridColumn field={columns[0]} pinned />
        {columns.map(
          (field, index) =>
            index > 0 && (
              <AgGridColumn
                key={field}
                field={field}
                valueGetter={abValueGetter}
              />
            )
        )}
      </AgGridReact>
    </div>
  )
}
