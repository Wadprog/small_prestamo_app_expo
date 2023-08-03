import React from 'react'
import * as Yup from 'yup'
import { View, Image } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import { useDispatch, useSelector } from 'react-redux'
import PropTypes from 'prop-types'

import tw from '../lib/tailwind'
import { image } from '../config'
import Button from '../components/Button'
import Screen from '../components/screen/Screen'
import { Form, Field, Submit } from '../components/form'

import { getCurrentUser, login } from '../store/registration'

const ValidationSchema = Yup.object().shape({
  username: Yup.string().required().min(3).label('username'),
  password: Yup.string().required().min(8).label('Password'),
})

const LoginScreen = ({ navigation }) => {
  const dispatch = useDispatch()
  const { loading, error } = useSelector(getCurrentUser)

  const handleSubmit = (values) => {
    dispatch(login(values))
  }

  return (
    <Screen loading={loading}>
      <KeyboardAwareScrollView>
        <View style={tw`flex h-full`}>
          <View style={tw`items-center justify-center `}>
            <Image source={image.log} alt="company Logo" />
          </View>

          <View style={tw`px-4 py-8 flex flex-1`}>
            <Form
              validationSchema={ValidationSchema}
              initialValues={{
                username: '',
                password: '',
              }}
              onSubmit={() => {}}
            >
              <Field
                required
                autoCapitalize="none"
                placeholder="Username@Company"
                name="email"
                type="email"
              />
              <Field
                required
                autoCapitalize="none"
                autoCorrect="false"
                placeholder="Password"
                name="password"
                showPassword
              />

              <Submit
                title="Login"
                /* isLoading ? <Loader /> */
              />
              <View style={tw`flex flex-row justify-end -mt-2 -mr-4`}>
                <Button
                  title="Forgot password"
                  appearance="ghost"
                  disabled={loading}
                />
              </View>
            </Form>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </Screen>
  )
}

LoginScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
}
export default LoginScreen
