/* eslint-disable react/no-unstable-nested-components */
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { MaterialCommunityIcons } from '@expo/vector-icons'

// // Importing the App Navigators.
import AccountNavigator from './Account'
import ChatNavigator from './Chat'
import FeedNavigator from './Loan'

// import MiddleButton from './MainButton'
import routes from './routes'

const Tab = createBottomTabNavigator()

const BottomTabNavigator = () => (
  <Tab.Navigator
    screenOptions={{
      headerShown: false,
      // headerTitle: '',
      // headerTransparent: true,
      // headerShadowVisible: false,
    }}
  >
    <Tab.Screen
      name={routes.LOAN}
      component={FeedNavigator}
      options={{
        tabBarIcon: ({ size, color }) => (
          <MaterialCommunityIcons
            name="swap-horizontal"
            size={size}
            color={color}
          />
        ),
      }}
    />
    <Tab.Screen
      name={routes.CUSTOMERS}
      component={AccountNavigator}
      options={{
        tabBarIcon: ({ size, color }) => (
          <MaterialCommunityIcons name="account" size={size} color={color} />
        ),
      }}
    />

    <Tab.Screen
      name={routes.SETTINGS}
      component={ChatNavigator}
      options={{
        tabBarIcon: ({ size, color }) => (
          <MaterialCommunityIcons
            name="cog-outline"
            size={size}
            color={color}
          />
        ),
      }}
    />
  </Tab.Navigator>
)

export default BottomTabNavigator
