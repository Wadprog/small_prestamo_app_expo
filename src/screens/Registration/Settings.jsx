import React from 'react'
import { Text, View, TouchableWithoutFeedback } from 'react-native'
import * as Yup from 'yup'
import PropTypes from 'prop-types'
import { MaterialCommunityIcons } from '@expo/vector-icons'

// Custom dependencies
import tw from '../../lib/tailwind'
import { Form, Submit } from '../../components/form'
import SettingSwitch from '../../components/form/SettingSwitch'

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

const ProfilePictureForm = ({ handleSubmit, onBack, title }) => {
  return (
    <Form
      validationSchema={ValidationSchema}
      initialValues={initialValues}
      onSubmit={handleSubmit}
    >
      <Text
        style={tw`text-black text-left text-2xl font-semibold mb-5 mt-3 text-cs-primary`}
      >
        {title}
      </Text>
      <View style={tw`flex  flex-1 justify-between  p-2`}>
        <View style={tw`flex max-h-5/6`}>
          <SettingSwitch
            label="users can"
            name="setting"
            contentContainerStyle={tw`rounded-t-2xl`}
          />
          <SettingSwitch label="users can" name="setting1" />
          <SettingSwitch
            label="users can"
            name="setting2"
            contentContainerStyle={tw`rounded-b-2xl mb-5`}
          />

          <SettingSwitch
            label="users can"
            name="setting3"
            contentContainerStyle={tw`rounded-t-2xl`}
          />
          <SettingSwitch label="users can" name="setting4" />
          <SettingSwitch
            label="users can"
            name="setting5"
            contentContainerStyle={tw`rounded-b-2xl`}
          />
        </View>

        <View style={tw`flex flex-row items-center mb-2`}>
          <TouchableWithoutFeedback onPress={onBack}>
            <View style={tw`flex items-center justify-center`}>
              <MaterialCommunityIcons
                name="arrow-left-drop-circle"
                size={30}
                color="black"
              />
              <Text>(Back)</Text>
            </View>
          </TouchableWithoutFeedback>
          <View style={tw`flex flex-row items-center ml-auto`}>
            <TouchableWithoutFeedback onPress={handleSubmit}>
              <Text style={tw`text-cs-primary mr-1 text-lg`}>(Skip)</Text>
            </TouchableWithoutFeedback>
            <Submit
              style={tw`w-24 `}
              title="Next"
              // title={isLoading ? <Loader /> : 'Next'}
            />
          </View>
        </View>
      </View>
    </Form>
  )
}

ProfilePictureForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  onBack: PropTypes.func.isRequired,
}
export default ProfilePictureForm
