/* eslint-disable react/no-unstable-nested-components */
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { MaterialCommunityIcons } from '@expo/vector-icons'

// // Importing the App Navigators.
import PeopleNavigators from './Account'
import SettingNavigator from './Setting'
import LoanNavigator from './Loan'

// import MiddleButton from './MainButton'
import routes from './routes'

const Tab = createBottomTabNavigator()

const BottomTabNavigator = () => (
  <Tab.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <Tab.Screen
      name={routes.LOAN}
      component={LoanNavigator}
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
      component={PeopleNavigators}
      options={{
        tabBarIcon: ({ size, color }) => (
          <MaterialCommunityIcons name="account" size={size} color={color} />
        ),
      }}
    />

    <Tab.Screen
      name={routes.SETTINGS}
      component={SettingNavigator}
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
