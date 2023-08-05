import React from 'react'
import { View, Text } from 'react-native'
import * as Yup from 'yup'
import { TouchableWithoutFeedback } from '@ui-kitten/components/devsupport'
import Proptypes from 'prop-types'
// Core components
import tw from '../../../lib/tailwind'
import {
  Form,
  Field,
  Submit,
  Switch,
  ImageField,
} from '../../../components/form'

const ValidationSchema = Yup.object().shape({
  phone: Yup.string().required().min(10).label('Phone'),
  profilePicture: Yup.string().label('Profile Picture'),
  given_name: Yup.string().required().min(3).label('First Name'),
  familly_name: Yup.string().required().min(3).label('Last Name'),
  email: Yup.string().required().min(6).email().label('Email'),
  username: Yup.string().required().min(3).label('username'),
  password: Yup.string().required().min(8).label('Password'),
  passwordConfirmation: Yup.string()
    .required()
    .oneOf([Yup.ref('password'), null], 'Passwords must be match'),
  termOfUse: Yup.bool()
    .required()
    .oneOf([true], 'You must accept the terms of use and the policy privacy'),
})

const initialValues = {
  given_name: '',
  familly_name: '',
  email: '',
  username: '',
  password: '',
  passwordConfirmation: '',
  termOfUse: false,
  profilePicture: '',
  phone: '',
}

const PersonalInfo = ({ handleSubmit, formValues }) => {
  return (
    <Form
      validationSchema={ValidationSchema}
      initialValues={formValues || initialValues}
      onSubmit={(values) => {
        handleSubmit({ employee: { ...values } })
      }}
      className="mt-4"
    >
      <View style={tw`flex-1`}>
        <View style={tw`flex flex-row justify-between `}>
          <ImageField name="profilePicture" />
          <View style={tw`flex-1 ml-3 rounded-xl`}>
            <Field
              required
              placeholder="First Name"
              name="given_name"
              type="text"
              style={tw`mr-1 `}
            />
            <Field
              required
              placeholder="Last Name"
              name="familly_name"
              type="text"
              style={tw``}
            />
          </View>
        </View>

        <Field
          required
          autoCapitalize="none"
          placeholder="Email"
          name="email"
          type="email"
          autoCorrect={false}
        />
        <Field
          required
          autoCapitalize="none"
          placeholder="Phone"
          name="phone"
          type="text"
          autoCorrect={false}
        />

        <Field
          required
          type="text"
          name="username"
          autoCapitalize="none"
          placeholder="Username"
          autoCorrect={false}
        />
        <Field
          required
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Password"
          name="password"
          showPassword
        />

        <Field
          required
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Password Confirmation"
          name="passwordConfirmation"
          showPassword
        />

        <View style={tw`ml-2 my-2 flex flex-row items-center `}>
          <Switch name="termOfUse" />
          <View style={tw` ml-2 flex flex-row items-center justify-center`}>
            <Text style={tw`font-semibold text-blue-600 text-lg`}>
              I agree to the
            </Text>
            <TouchableWithoutFeedback>
              <Text style={tw`font-semibold text-cs-primary text-lg ml-1`}>
                Privacy
              </Text>
            </TouchableWithoutFeedback>
            <Text style={tw`font-semibold text-blue-600 text-lg mx-1`}>
              and
            </Text>
            <TouchableWithoutFeedback>
              <Text style={tw`font-semibold text-cs-primary text-lg`}>
                Policy
              </Text>
            </TouchableWithoutFeedback>
          </View>
        </View>
      </View>
      <View style={tw`mb-5`}>
        <Submit title="Sign Up" />
      </View>
    </Form>
  )
}
PersonalInfo.propTypes = {
  formValues: Proptypes.object,
}
export default PersonalInfo
