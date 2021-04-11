import React from 'react'
import Select from '@material-ui/core/Select'
import FormControl from '@material-ui/core/FormControl'
import MenuItem from '@material-ui/core/MenuItem'
import InputLabel from '@material-ui/core/InputLabel'
import { FilterContext } from '../../context/FilterContext/FilterContext'
import { DataAggregationFields } from '../../models/DataAggregationFields'
import { useFilterOptionsByField } from '../../hooks/useFilterOptionsByField'
import { Box } from '@material-ui/core'

export const FiltersByDataField: React.FC<{
  field: keyof typeof DataAggregationFields
}> = ({ field }) => {
  const { filter, setFilter } = React.useContext(FilterContext)
  const options = useFilterOptionsByField(field)

  const handleChange = React.useCallback(
    (e: React.ChangeEvent<{ name?: string | undefined; value: unknown }>) =>
      setFilter((filter) => ({
        ...filter,
        [field]: e.target.value,
      })),
    [setFilter, field]
  )

  return (
    <Box mt={1}>
      <FormControl fullWidth>
        <InputLabel id={`filter-by-${field}`}>Filter by {field}:</InputLabel>
        <Select
          labelId={`filter-by-${field}`}
          id="demo-simple-select"
          value={filter[field]}
          onChange={handleChange}
        >
          <MenuItem value={undefined}>
            <i>ANY</i>
          </MenuItem>
          {options.map((item) => (
            <MenuItem value={item} key={item}>
              {item}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  )
}
