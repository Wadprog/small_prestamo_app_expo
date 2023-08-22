import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

// Custom core imports
import PaymentForm from '../screens/Loan/PaymentForm'
import LoanAddScreen from '../screens/Loan/AddLoan'
import LoanProfile from '../screens/Loan/LoanProfile'
import LoanRequestScreen from '../screens/Loan/AddLoanRequest'
import LoanListScreen from '../screens/Loan/LoanList/LoanList.screen'
const Stack = createStackNavigator()

const TimelineNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
      // headerTitle: '',
      // headerTransparent: true,
      // headerShadowVisible: false,
    }}
  >
    <Stack.Screen name="LoanList" component={LoanListScreen} />
    <Stack.Screen name="LoanProfile" component={LoanProfile} />
    <Stack.Screen name="AddLoans" component={LoanAddScreen} />
    <Stack.Screen name="paymentForm" component={PaymentForm} />
    <Stack.Screen name="AddLoanRequests" component={LoanRequestScreen} />
  </Stack.Navigator>
)

export default TimelineNavigator
