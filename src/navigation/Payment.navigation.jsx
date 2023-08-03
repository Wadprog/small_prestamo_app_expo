import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Text from '../components/Text'
import Makepayment from '../screens/MakePayment/Makepayment'

const PaymentScreen = () => (
  <>
    <Text category="h1">Payment screen</Text>
    <Text category="h1">Payment screen</Text>
    <Text category="h1">Payment screen</Text>
    <Text category="h1">Payment screen</Text>
    <Text category="h1">Payment screen</Text>
    <Text category="h1">Payment screen</Text>
    <Text category="h1">Payment screen</Text>
  </>
)
const { Navigator, Screen } = createStackNavigator()

const PaymentNavigator = () => (
  <Navigator screenOptions={{}}>
    <Screen name="Payment" component={Makepayment} />
  </Navigator>
)

export default PaymentNavigator
