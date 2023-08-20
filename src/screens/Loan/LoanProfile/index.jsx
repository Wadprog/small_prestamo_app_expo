import { View, FlatList } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Text from '../../../components/Text'
import Button from '../../../components/Button'
import Screen from '../../../components/screen'

import GeneralInformation from './components/GeneralInformation'
import BorrowerInformation from './components/BorrowerInformation'
import RequestInformation from './components/RequestInformation'
import ReviewInformation from './components/ReviewInformation'
import PaymentsInformation from './components/PaymentsInformation'
import DocumentsInformation from './components/DocumentsInformation'

import tw from '../../../lib/tailwind'
import { getLoan, getLoans } from '../../../store/loans'

const tabs = [
  { component: GeneralInformation, title: 'General' },
  { component: BorrowerInformation, title: 'Borrower' },
  { component: RequestInformation, title: 'Request' },
  { component: ReviewInformation, title: 'Reviews' },
  { component: PaymentsInformation, title: 'Payments' },
  { component: DocumentsInformation, title: 'Documents' },
]
const LoanProfile = ({ navigation, route }) => {
  const dispatch = useDispatch()
  const { current_loan, loading, error } = useSelector(getLoans)

  React.useEffect(() => {
    console.log({ getLoan })
    dispatch(getLoan(route.params.id))
  }, [])

  const [currentTab, setCurrentab] = React.useState(null)
  console.log({ currentTab })
  const CurrentTab = currentTab !== null ? tabs[currentTab].component : null

  return (
    <Screen loading={loading}>
      <View style={tw`px-1`}>
        <View style={tw`flex flex-row items-center justify-between mt-4 mb-2 `}>
          <View style={tw`flex flex-row items-center justify-between`}>
            <Text category="h1">Loan {current_loan?.id}</Text>
            <Text style={tw`ml-2 p-2 bg-gray-100 rounded-3xl`}>
              {current_loan?.loan_status}
            </Text>
          </View>
          <Button title="Operations" />
        </View>
        <View style={tw`bg-gray-200 rounded p-2`}>
          {/** upper part */}

          <View style={tw`flex flex-row justify-between `}>
            <View>
              <Text>Amount</Text>
              <Text>$ 500</Text>
            </View>

            <View>
              <Text>Debt</Text>
              <Text>$ 500</Text>
            </View>
            <View>
              <Text>Term</Text>
              <Text>$ 500</Text>
            </View>

            <View>
              <Text> Next Payment</Text>
              <Text>$ 500</Text>
              <Text>26/43/20</Text>
            </View>
          </View>

          <View style={tw` bg-gray-300 h-1 w-100 my-2`} />
          {/** bottom part */}
          <View style={tw`flex flex-row justify-left flex-wrap`}>
            {tabs.map((item, idx) => (
              <Button
                {...item}
                disabled={currentTab === idx}
                style={tw`px-1 mx-1 my-1 w- `}
                appearance="outline"
                onPress={() => {
                  setCurrentab(idx)
                }}
              />
            ))}
          </View>
        </View>
        {currentTab !== null && <CurrentTab />}
      </View>
    </Screen>
  )
}

export default LoanProfile
