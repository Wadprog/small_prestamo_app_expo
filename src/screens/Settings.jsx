import React from 'react'
import { View, TouchableOpacity } from 'react-native'
import * as Yup from 'yup'
import PropTypes from 'prop-types'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { Avatar } from '@ui-kitten/components'
import { useSelector, useDispatch } from 'react-redux'

// Custom dependencies
import tw from '../lib/tailwind'
import Text from '../components/Text'
import { Form } from '../components/form'
import SettingSwitch from '../components/form/SettingSwitch'
import Input from '../components/Input'

import { getCurrentUser } from '../store/auth'

const ValidationSchema = Yup.object().shape({
  setting: Yup.boolean().required().label('setting').nullable(),
  setting2: Yup.boolean().required().label('setting two').nullable(),
  setting4: Yup.boolean().required().label('setting four').nullable(),
  setting5: Yup.boolean().required().label('setting five').nullable(),
  setting3: Yup.boolean().required().label('setting three').nullable(),
})

const initialValues = {
  setting: false,
  setting1: false,
  setting2: false,
  setting3: false,
  setting4: false,
  setting5: false,
}

const SettingNav = ({ onPress, title }) => {
  return (
    <TouchableOpacity onPress={onPress} style={tw``}>
      <View
        style={tw`flex flex-row items-center justify-between bg-white py-3 px-2`}
      >
        <Text style={tw`text-lg font-bold`}>{title}</Text>
        <MaterialCommunityIcons
          name="arrow-right"
          size={24}
          color="black"
          style={tw`mr-2`}
        />
      </View>
    </TouchableOpacity>
  )
}
const SettingForm = ({ handleSubmit, onBack, title }) => {
    const auth = useSelector(getCurrentUser)
  return (
    <Form
      validationSchema={ValidationSchema}
      initialValues={initialValues}
      onSubmit={handleSubmit}
    >
      <View style={tw`flex p-2 bg-color-primary-500`}>
        <Text style={tw` text-left font-bold ml-3 mb-2 mt-1 `}>Settings</Text>
        <Input
          placeholder="Search"
          style={tw` bg-white `}
          icon="swap-horizontal"
          onValueChange={console.log}
          append={{
            icon: 'filter-outline',
            onPress: console.log,
          }}
        />
      </View>

      <View style={tw` my-4 rounded-xl bg-red-500 overflow-hidden mx-3`}>
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
              {auth.user.person.givenName} {auth.user.person.familyName[0]}.
            </Text>
            <Text category="s1">{auth.user.company.name}</Text>
          </View>
        </View>
        
      </View>

      <View style={tw` my-4 rounded-xl bg-red-500 overflow-hidden mx-3`}></View>

      <View style={tw` my-4 rounded-xl bg-red-500 overflow-hidden mx-3`}>
        <SettingNav title="Bussiness Settings" />
        <SettingNav title="Printer" />
      </View>

      <View style={tw` my-4 rounded-xl bg-red-500 overflow-hidden mx-3`}>
        <SettingSwitch
          label="users can"
          name="setting"
          contentContainerStyle={tw`rounded-t-2xl`}
        />
        <SettingNav title="Notification" />
        <SettingNav title="Sound and Haptic" />
        <SettingNav title="Focus" />
      </View>

      <View style={tw`flex  flex-1 justify-between  p-2`}>
        <View style={tw`flex flex-row items-center mb-2`}>
          <View style={tw`flex flex-row items-center ml-auto`}></View>
        </View>
      </View>
    </Form>
  )
}

SettingForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  onBack: PropTypes.func.isRequired,
}
export default SettingForm
