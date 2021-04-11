import React from 'react'
import Box from '@material-ui/core/Box'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import { FiltersAggregateBy } from './FiltersAggregateBy'

export const Filters: React.FC = () => {
  return (
    <Box marginX={2}>
      <Paper>
        <Box paddingX={4} paddingY={2}>
          <Typography variant="subtitle2">Filters</Typography>
          <FiltersAggregateBy />
        </Box>
      </Paper>
    </Box>
  )
}
