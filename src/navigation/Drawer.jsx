/* eslint-disable react/no-unstable-nested-components */
import React from 'react'
import { TouchableOpacity, Image } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { useNavigation } from '@react-navigation/native'
// Custom imports
import DrawerContent from '../screens/DrawerContent'

import BottomTabNavigator from './Bottom'

import routes from './routes'
import tw from '../lib/tailwind'
import Text from '../components/Text'
import text from '../config/text'

const Drawer = createDrawerNavigator()

const DrawerNav = () => {
  const navigation = useNavigation()
  return (
    <Drawer.Navigator
      screenOptions={{
        headerTitle: '',
        headerShadowVisible: false,
        headerStyle: {
          backgroundColor: 'rgba(98, 85, 175, 1)',
        },

        headerRight: (props) => (
          <TouchableOpacity
            onPress={() => console.log(navigation)}
            style={tw` p-1 flex flex-row bg-blue-100 justify-center `}
          >
            <Image
              source={require('../assets/images/log.png')}
              style={{ width: 20, height: 20 }}
            />
            <Text style={tw`ml-1`}>{text.App.name}</Text>
          </TouchableOpacity>
        ),
      }}
      drawerContent={(props) => <DrawerContent {...props} />}
    >
      <Drawer.Screen name={routes.BOTTOM_TAB} component={BottomTabNavigator} />
    </Drawer.Navigator>
  )
}

export default DrawerNav
