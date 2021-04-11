import React from 'react'
import { AgGridColumn, AgGridReact } from 'ag-grid-react'

import 'ag-grid-community/dist/styles/ag-grid.css'
import 'ag-grid-community/dist/styles/ag-theme-alpine.css'

export const DataGridTablePresentation: React.FC<{ rowData: any }> = ({
  rowData,
}) => {
  return (
    <div
      className="ag-theme-alpine"
      style={{ height: 'calc(100vh - 175px)', width: '100%' }}
    >
      <AgGridReact rowData={rowData}>
        {Object.keys(rowData[0]).map((field) => (
          <AgGridColumn key={field} field={field}></AgGridColumn>
        ))}
      </AgGridReact>
    </div>
  )
}
