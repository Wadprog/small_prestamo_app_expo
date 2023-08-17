import { View } from 'react-native'
import React from 'react'
import { List, Divider } from '@ui-kitten/components'
import { useSelector, useDispatch } from 'react-redux'

import Header from './components/Header'
import Screen from '../../../components/screen'
import FilterModal from './components/Modal/FilterModal'
import LoanEmptyList from '../../../components/FullError'
import Loan from '../../../components/Loan/Loan.component'

import { requestLoan, getLoans } from '../../../store/loans'

const Timeline = () => {
  const dispatch = useDispatch()
  const { data: loans, loading, error } = useSelector(getLoans)

  React.useEffect(() => {
    dispatch(requestLoan())
  }, [])

  console.log({ loans, loading, error })

  const [filterOpen, setFilterOpen] = React.useState(false)
  return (
    <Screen>
      <Header onFileterBtnPress={() => setFilterOpen(true)} />

      {loans.length === 0 ? (
        <LoanEmptyList errorMsg="No loan in this category" secondLine="" />
      ) : (
        <List
          data={loans}
          renderItem={({ item }) => <Loan key={item.id} {...item} />}
          ItemSeparatorComponent={Divider}
        />
      )}
      <FilterModal visible={filterOpen} OnClose={() => setFilterOpen(false)} />
    </Screen>
  )
}

export default Timeline
