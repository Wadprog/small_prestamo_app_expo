import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import SettingScreen from '../screens/Settings'

const Stack = createStackNavigator()

const ChatNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
      // headerTitle: '',
      // headerTransparent: true,
      // headerShadowVisible: false,
    }}
  >
    <Stack.Screen name="My Chat" component={SettingScreen} />
  </Stack.Navigator>
)

export default ChatNavigator
