import React from 'react'
import { View } from 'react-native'
import * as Yup from 'yup'

import { Field, Submit, Form } from '../../components/form'

import tw from '../../lib/tailwind'
const ValidationSchema = Yup.object().shape({
  amount: Yup.number().required(),
})

const PaymentForm = ({ route }) => {
  React.useEffect(() => {
    console.log('fetching loan')
    // dispatch(getLoan(route.params.id))
  }, [])
  return (
    <View style={tw`px-2 pt-3`}>
      <Form
        validationSchema={ValidationSchema}
        initialValues={{
          amount: '',
        }}
        onSubmit={route.params.handleSubmit}
      >
        <Field
          required
          placeholder="$0.0"
          name="amount"
          type="number"
          style={tw`bg-white rounded-lg`}
        />
        <Submit title="Register Payment" />
      </Form>
    </View>
  )
}

export default PaymentForm
