import { View } from 'react-native'
import React from 'react'
import { List, Divider } from '@ui-kitten/components'
import { useSelector, useDispatch } from 'react-redux'
import _ from 'lodash'

import Header from './components/Header'
import Screen from '../../../components/screen'
import FilterModal from './components/Modal/FilterModal'
import LoanEmptyList from '../../../components/FullError'
import Loan from '../../../components/Loan/Loan.component'

import { requestLoan, getLoans } from '../../../store/loans'

const Timeline = () => {
  const dispatch = useDispatch()
  const { data: loans, loading, error } = useSelector(getLoans)
  const [searchParams, setSearchParams] = React.useState({})

  const handleAddParams = (obj) => {
    setSearchParams((current) => ({ ...current, ...obj }))
  }
  const handleRemoveParams = (keys) => {
    keys.forEach((key) => {
      if (!_.hasIn(searchParams, key)) return
      setSearchParams(_.omit(searchParams, key))
    })
  }

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
      <FilterModal
        visible={filterOpen}
        OnClose={() => setFilterOpen(false)}
        onFilerAdd={handleAddParams}
        onFilterRemove={handleRemoveParams}
        onDoneFiltering={() => dispatch(requestLoan(searchParams))}
      />
    </Screen>
  )
}

export default Timeline
