/* eslint-disable react/no-unstable-nested-components */
import { createDrawerNavigator } from '@react-navigation/drawer'
import React from 'react'
// Custom imports
import DrawerContent from '../screens/DrawerContent'

import BottomTabNavigator from './Bottom'

import tw from '../lib/tailwind'
import routes from './routes'

const Drawer = createDrawerNavigator()

const DrawerNav = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerTitle: '',
        headerShadowVisible: false,
        headerStyle: {
          backgroundColor: tw.color('color-primary-500'),
        },
      }}
      drawerContent={(props) => <DrawerContent {...props} />}
    >
      <Drawer.Screen name={routes.BOTTOM_TAB} component={BottomTabNavigator} />
    </Drawer.Navigator>
  )
}

export default DrawerNav
