import React from 'react'
import { View } from 'react-native'
import PropTypes from 'prop-types'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { Avatar } from '@ui-kitten/components'
import { useSelector, useDispatch } from 'react-redux'

// Custom dependencies
import tw from '../../lib/tailwind'
import Text from '../../components/Text'
import SettingSwitch from './components/SettingSwitch'
import Screen from '../../components/screen'
import { getCurrentUser } from '../../store/auth'
import Header from './components/Header'
import SettingNav from './components/SettingNav'
import Separator from './components/Separator'

const Settings = ({ navigation }) => {
  const auth = useSelector(getCurrentUser)
  return (
    <Screen>
      <View style={tw`bg-gray-100`}>
        <Header />
        <View
          style={tw`my-4 py-2 px-3 rounded-xl  bg-white overflow-hidden mx-3`}
        >
          <View style={tw`flex flex-row items-center`}>
            <Avatar
              source={{
                uri:
                  auth.user.profilePicture ||
                  'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
              }}
              size="large"
            />

            <View style={tw`ml-2`}>
              <Text category="h6" style={tw`capitalize`}>
                {auth.user.person.givenName} {auth.user.person.familyName[0]}.
              </Text>
              <Text category="s1">{auth.user.company.name}</Text>
            </View>
          </View>
          <Separator style={tw`w-full  ml-0 my-2`} />
          <SettingNav
            title="Avatar"
            LeftIcon={() => (
              <MaterialCommunityIcons
                name="face-man-profile"
                size={24}
                color={tw.color('color-primary-500')}
              />
            )}
          />
        </View>

        <View
          style={tw` my-4 rounded-xl bg-red-500 overflow-hidden mx-3`}
        ></View>

        <View style={tw` my-4 rounded-xl  overflow-hidden mx-3`}>
          <SettingNav
            title="Bussiness tools"
            LeftIcon={() => (
              <MaterialCommunityIcons
                name="briefcase-edit"
                size={24}
                color={tw.color('color-primary-500')}
              />
            )}
            onPress={() => navigation.navigate('businessTools')}
          />
          <Separator />
          <SettingNav
            title="Messages"
            onPress={() => navigation.navigate('messageSettings')}
            LeftIcon={() => (
              <MaterialCommunityIcons
                name="message-settings"
                size={24}
                color={tw.color('green-500')}
              />
            )}
          />
        </View>

        <View style={tw` my-4 rounded-xl  overflow-hidden mx-3`}>
          <SettingNav
            title="Account"
            LeftIcon={() => (
              <MaterialCommunityIcons
                name="account-cog"
                size={24}
                color="red"
              />
            )}
          />
          <Separator />
          <SettingNav
            title="Notification"
            LeftIcon={() => (
              <MaterialCommunityIcons
                name="square-rounded"
                color={tw.color('yellow-500')}
                size={24}
              />
            )}
          />
          <Separator />
          <SettingNav
            title="Privacy"
            LeftIcon={() => (
              <MaterialCommunityIcons
                name="lock"
                color={tw.color('color-primary-500')}
                size={24}
              />
            )}
          />
          <Separator />
          <SettingSwitch
            name="Dark Mode"
            LeftIcon={() => (
              <MaterialCommunityIcons name="theme-light-dark" size={24} />
            )}
          />
        </View>
      </View>
    </Screen>
  )
}

Settings.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  onBack: PropTypes.func.isRequired,
}
export default Settings
