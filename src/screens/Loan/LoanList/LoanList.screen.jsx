import { View } from 'react-native'
import React from 'react'
import { List, Divider } from '@ui-kitten/components'

import Header from './components/Header'
import FilterModal from './components/Modal/FilterModal'
import Screen from '../../../components/screen'
import Loan from '../../../components/Loan/Loan.component'
import LoanEmptyList from '../../../components/FullError'

const Timeline = () => {
  const Loans = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
  ]
  const [filterOpen, setFilterOpen] = React.useState(false)
  return (
    <Screen>
      <Header onFileterBtnPress={() => setFilterOpen(true)} />

      {Loans.length === 0 ? (
        <LoanEmptyList errorMsg="No loan in this category" secondLine="" />
      ) : (
        <List
          data={Loans}
          renderItem={({ item, idx }) => <Loan />}
          ItemSeparatorComponent={Divider}
        />
      )}
      <FilterModal visible={filterOpen} OnClose={() => setFilterOpen(false)} />
    </Screen>
  )
}

export default Timeline
