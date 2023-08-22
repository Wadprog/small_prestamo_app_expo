import { View, FlatList } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Modal } from '@ui-kitten/components'

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
    console.log('fetching loan')
    console.log({ p: route.params })
    dispatch(getLoan(route.params.id))
  }, [])

  console.log('fetching loan')
  console.log({ p: route.params })
  const [currentTab, setCurrentab] = React.useState(route?.params.tab || 0)
  const [modalVisible, setModalVisible] = React.useState(false)
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
          <Button title="Operations" onPress={() => setModalVisible(true)} />
        </View>
        <View style={tw`bg-gray-200 rounded p-2`}>
          {/** upper part */}

          <FlatList
            style={tw``}
            horizontal
            data={[
              { title: 'Amount', value: 500 },
              { title: 'Debt', value: 500 },
              { title: 'Term', value: 500 },
              { title: 'Next Payment', value: current_loan?.next_payment },
            ]}
            renderItem={({ item }) => (
              <View style={tw`flex  items-center justify-center mx-5`}>
                <Text style={tw`font-bold`}> {item.value}</Text>
                <Text appearance="hint">{item.title}</Text>
              </View>
            )}
          />
          <View style={tw` bg-gray-300 h-1 w-100 my-2`} />
          {/** bottom part */}
          <FlatList
            style={tw`flex flex-row justify-left flex-wrap`}
            horizontal
            data={tabs}
            renderItem={({ item, index }) => (
              <Button
                {...item}
                disabled={currentTab === index}
                style={tw`px-1 mx-1 my-1 w- `}
                appearance="outline"
                onPress={() => {
                  setCurrentab(index)
                }}
              />
            )}
          />
        </View>
        {currentTab !== null && <CurrentTab loanDetails={current_loan} />}
      </View>
      <Modal
        visible={modalVisible}
        backdropStyle={tw`bg-black bg-opacity-50`}
        onBackdropPress={() => setModalVisible(false)}
      >
        <Button
          title="Make Payment"
          onPress={() =>
            navigation.navigate('paymentForm', {
              id: 1,
              handleSubmit: () => {
                console.log('submit')
                navigation.navigate('LoanProfile', {
                  id: current_loan?.id,
                  tab: 4,
                })
              },
            })
          }
        />
        <Button title="Cancel Loan" />
        <Button title="Renew Loan" />
      </Modal>
    </Screen>
  )
}

export default LoanProfile
