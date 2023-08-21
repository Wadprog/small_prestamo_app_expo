import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import SettingScreen from '../screens/Settings'
import BussinessTools from '../screens/Settings/BussinessPage'
import Messagesettings from '../screens/Settings/Messagesettings'

const Stack = createStackNavigator()

const ChatNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <Stack.Screen name="mainSettings" component={SettingScreen} />
    <Stack.Screen name="businessTools" component={BussinessTools} />
    <Stack.Screen name="messageSettings" component={Messagesettings} />
  </Stack.Navigator>
)

export default ChatNavigator
