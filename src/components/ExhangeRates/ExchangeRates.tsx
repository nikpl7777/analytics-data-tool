import React from 'react'
import Box from '@material-ui/core/Box'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import exhangeRates from '../../data-sources/exhange-rates.json'
import {UNIFIED_DEFAULT_CURRENCY} from '../../models/UnifiedDefaultCurrency'

export const ExchangeRates: React.FC = () => {
  return (
    <Box marginX={2} marginTop={4}>
      <Paper>
        <Box paddingX={4} paddingY={2}>
            <Typography variant="subtitle2">Exchange Rates</Typography>
            {Object.entries(exhangeRates).map(([currency, rate]) => currency !== UNIFIED_DEFAULT_CURRENCY && (
              <Typography variant="body2" key={currency}>
                <b>{currency}/{UNIFIED_DEFAULT_CURRENCY}:</b> {rate}
              </Typography>
            ))}
            <Typography variant="caption">
              * All amounts converted to {UNIFIED_DEFAULT_CURRENCY} applying these exchange rates.
            </Typography>
        </Box>
      </Paper>
    </Box>
  )
}
