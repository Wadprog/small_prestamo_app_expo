import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

// Custom core imports
import LoanAddScreen from '../screens/Loan/AddLoan'
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
    <Stack.Screen name="My Feeds" component={LoanListScreen} />
    <Stack.Screen name="AddLoans" component={LoanAddScreen} />
    <Stack.Screen name="AddLoanRequests" component={LoanRequestScreen} />
  </Stack.Navigator>
)

export default TimelineNavigator
