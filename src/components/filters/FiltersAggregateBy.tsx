import React from 'react'
import Select from '@material-ui/core/Select'
import FormControl from '@material-ui/core/FormControl'
import MenuItem from '@material-ui/core/MenuItem'
import InputLabel from '@material-ui/core/InputLabel'
import { FilterContext } from '../../context/FilterContext/FilterContext'
import { FilterGroupBy } from '../../models/FilterGroupBy'

export const FiltersAggregateBy: React.FC = () => {
  const { groupByKey, setGroupByKey } = React.useContext(FilterContext)

  const handleChange = React.useCallback(
    (e: React.ChangeEvent<{ name?: string | undefined; value: unknown }>) => {
      setGroupByKey(e.target.value as keyof typeof FilterGroupBy)
    },
    [setGroupByKey]
  )

  return (
    <FormControl fullWidth>
      <InputLabel id="aggregate-by-label">Aggregate by:</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={groupByKey}
        onChange={handleChange}
      >
        {Object.values(FilterGroupBy).map((item) => (
          <MenuItem value={item} key={item}>
            {item}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}
