import React from 'react'
import Select from '@material-ui/core/Select'
import FormControl from '@material-ui/core/FormControl'
import MenuItem from '@material-ui/core/MenuItem'
import InputLabel from '@material-ui/core/InputLabel'
import { FilterContext } from '../../context/FilterContext/FilterContext'
import { DataAggregationFields } from '../../models/DataAggregationFields'

export const FiltersAggregateBy: React.FC = () => {
  const { aggregateByKey, setAggregateByKey } = React.useContext(FilterContext)

  const handleChange = React.useCallback(
    (e: React.ChangeEvent<{ name?: string | undefined; value: unknown }>) => {
      setAggregateByKey(e.target.value as keyof typeof DataAggregationFields)
    },
    [setAggregateByKey]
  )

  return (
    <FormControl fullWidth>
      <InputLabel id="aggregate-by-label">Aggregate by:</InputLabel>
      <Select
        labelId="aggregate-by-label"
        id="aggregate-by-key"
        value={aggregateByKey}
        onChange={handleChange}
      >
        {Object.values(DataAggregationFields).map((item) => (
          <MenuItem value={item} key={item}>
            {item}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}
