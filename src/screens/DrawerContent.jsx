/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-unstable-nested-components */
// Dependencies
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer'
import { StyleSheet, View } from 'react-native'
import Icon from '@expo/vector-icons/MaterialCommunityIcons'
import { TouchableRipple, Drawer } from 'react-native-paper'

import { Toggle, Avatar } from '@ui-kitten/components'
import {
  Drawer as Dw,
  DrawerItem as DI,
  IndexPath,
} from '@ui-kitten/components'
import Text from '../components/Text'
import { ThemeContext } from '../context/theme.context'

import Screen from '../components/screen/Screen'
import routes from '../navigation/routes'
import { getCurrentUser, logout } from '../store/auth'

import tw from '../lib/tailwind'
// Styles
const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: '#f4f4f4',
    borderTopWidth: 1,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
})
const DrawerContent = (props) => {
  // Hooks
  const auth = useSelector(getCurrentUser)
  const dispatch = useDispatch()
  const themeContext = React.useContext(ThemeContext)
  // Main Object
  return (
    <Screen loading={auth.user.loading} error={auth.user.error}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <View style={{ flexDirection: 'row', marginTop: 15 }}>
              <Avatar
                source={{
                  uri:
                    auth.user.profilePicture ||
                    'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
                }}
                size="large"
              />

              <View style={{ marginLeft: 15, flexDirection: 'column' }}>
                <Text category="h5" style={tw`capitalize`}>
                  {auth.user.Person.given_name}{' '}
                  {auth.user.Person.familly_name[0]}.
                </Text>
                <Text category="s1">{auth.user.Person.familly_name}</Text>
              </View>
            </View>
          </View>

          <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
              icon={({ color, size }) => (
                <Icon name="chart-timeline-variant" color={color} size={size} />
              )}
              label="Dashboard"
              onPress={() => {
                props.navigation.navigate(routes.TIMELINE)
              }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <Icon name="bell" color={color} size={size} />
              )}
              label="Notifications"
              onPress={() => {
                props.navigation.navigate(routes.INBOX)
              }}
            />

            <DrawerItem
              icon={({ color, size }) => (
                <Icon name="account-group" color={color} size={size} />
              )}
              label="Borrowers"
              onPress={() => {
                props.navigation.navigate(routes.GROUP)
              }}
            />

            <DrawerItem
              icon={({ color, size }) => (
                <Icon name="cash-multiple" color={color} size={size} />
              )}
              label="Loans"
              onPress={() => {
                props.navigation.navigate(routes.NETWORK)
              }}
            />

            <DrawerItem
              icon={({ color, size }) => (
                <Icon name="cog-outline" color={color} size={size} />
              )}
              label="Settings"
              onPress={() => {
                props.navigation.navigate(routes.PAGE)
              }}
            />
          </Drawer.Section>
          <Drawer.Section title="Preferences">
            <TouchableRipple>
              <View style={styles.preference}>
                <View>
                  <Toggle
                    checked={themeContext.theme === 'dark'}
                    onChange={themeContext.toggleTheme}
                  >
                    Dark Mode
                  </Toggle>
                </View>
              </View>
            </TouchableRipple>
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>

      <Drawer.Section style={styles.bottomDrawerSection}>
        <DrawerItem
          active
          color="white"
          icon={({ color, size }) => (
            <Icon name="phone" color={color} size={size} />
          )}
          label="Support"
        />
        <DrawerItem
          icon={({ color, size }) => (
            <Icon name="exit-to-app" color={color} size={size} />
          )}
          label="Sign Out"
          onPress={() => {
            dispatch(logout())
          }}
        />
      </Drawer.Section>
    </Screen>
  )
}

export default DrawerContent
