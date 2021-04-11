import React from 'react'
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'

export const Dashboard: React.FC<{ filters: React.ReactElement }> = ({
  children,
  filters,
}) => {
  return (
    <Box marginX="auto" marginY={5}>
      <Container maxWidth="xl">
        <Grid container>
          <Grid item xs={12} md={8} lg={9}>
            {children}
          </Grid>
          <Grid item xs={12} md={4} lg={3}>
            {filters}
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
