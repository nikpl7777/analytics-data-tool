import React from 'react'
import Box from '@material-ui/core/Box'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import { FiltersAggregateBy } from './FiltersAggregateBy'
import { FiltersByDataFieldList } from './FiltersByDataFieldList'

export const Filters: React.FC = () => {
  return (
    <Box marginX={2}>
      <Paper>
        <Box paddingX={4} paddingY={2}>
          <FiltersAggregateBy />
          <Box mt={4}>
            <Typography variant="subtitle2">Filters</Typography>
            <FiltersByDataFieldList />
          </Box>
        </Box>
      </Paper>
    </Box>
  )
}
