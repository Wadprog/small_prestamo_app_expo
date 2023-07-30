import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

// Custom core imports
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
  </Stack.Navigator>
)

export default TimelineNavigator
