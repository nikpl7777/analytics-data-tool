import React from 'react'
import { Header } from './components/header/Header'
import { DashboardContainer } from './containers/DashboardContainer'
import { DataGridContainer } from './containers/DataGridContainer'

export const App: React.FC = () => (
  <>
    <Header />
    <DashboardContainer>
      <DataGridContainer />
    </DashboardContainer>
  </>
)
