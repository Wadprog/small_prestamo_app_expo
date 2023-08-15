import React from 'react'
import PropTypes from 'prop-types'
import { View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

import tw from '../../../lib/tailwind'
import Text from '../../../components/Text'
import Screen from '../../../components/screen'

import { CreateLoan, getLoans } from '../../../store/loans'

import CreateCustomerAddLoanSteps from '../../../components/CreateCustomerAddLoan'
import SelectCustomerAddLoanSteps from '../../../components/SelectCustomerAddLoan'

import FlowOption from '../../../components/FlowOption'

const AddLoan = ({ navigation }) => {
  const dispatch = useDispatch()
  const { loading, error } = useSelector(getLoans)

  const handleSubmit = (data) => {
    dispatch(CreateLoan({ ...data, accepted_loan_review_id: data.last_review }))
    if (!error && !loading) navigation.navigate('LoanList')
  }
  const [flow, setFlow] = React.useState(0)
  return (
    <Screen loading={loading} error={error}>
      {flow === 0 ? (
        <View style={tw``}>
          <Text category="h6" style={tw`text-center mt-7`}>
            Choose for and existing or create a new customer
          </Text>
          <View style={tw`flex-row justify-around pt-5 items-center`}>
            <FlowOption text="New customer" onPress={() => setFlow(1)} />
            <FlowOption text="Existing customer" onPress={() => setFlow(2)} />
          </View>
        </View>
      ) : (
        <View style={tw``}>
          {flow === 1 ? (
            <View style={tw`mx-2`}>
              <CreateCustomerAddLoanSteps onFinish={handleSubmit} />
            </View>
          ) : (
            <SelectCustomerAddLoanSteps
              onFinish={handleSubmit}
              onCreateUser={() => setFlow(1)}
            />
          )}
        </View>
      )}
    </Screen>
  )
}

export default AddLoan
