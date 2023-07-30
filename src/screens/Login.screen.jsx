import React from 'react'
import * as Yup from 'yup'
import { View, Image, Text } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { TouchableWithoutFeedback } from '@ui-kitten/components/devsupport'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import PropTypes from 'prop-types'
// Core components
import tw from '../lib/tailwind'
import { image, text } from '../config'
import { Form, Field, Submit } from '../components/form'

const ValidationSchema = Yup.object().shape({
  // eslint-disable-next-line newline-per-chained-call
  email: Yup.string().required().min(6).email().label('Email'),
  password: Yup.string().required().min(8).label('Password'),
})

const LoginScreen = ({ navigation }) => (
  <View style={tw`mx-0`}>
    <View style={tw`grid grid-cols-1 lg:mb:0 lg:grid-cols-2`}>
      <LinearGradient
        colors={[tw.color('g-one/[0.78]'), tw.color('g-two/[0.78]')]}
        locations={[0.2, 0.8]}
        style={tw`h-96 z-0 lg:h-screen`}
      >
        <Image
          style={tw`hidden lg:block w-[22%] lg:absolute right-0 z-30 -mt-8 object-fit`}
          source={image.Shape_up}
        />
        <View style={tw`z-0 text-center pt-14 text-base-100 text-2xl py-5 `}>
          <Image style={tw`mt-5 mx-auto`} source={image.log} alt="logo_vwanu" />
          <Text
            style={tw`text-5xl text-yellow-500 font-bold mt-10 text-center`}
          >
            Welcome 1
          </Text>

          <Text
            style={tw`hidden lg:block text-base-100 text-xl font-semibold text-center mb-2`}
          >
            Together we are stronger
          </Text>
        </View>
      </LinearGradient>

      <View
        style={tw`place-items-center bg-base-100 shadow-t-2xl rounded-t-[30px] lg:rounded-none px-4 md:px-8 -mt-28 z-10 md:mx-36 lg:mt-0 lg:mx-0 lg:h-screen h-full py-8`}
      >
        <View style={tw`hidden lg:block lg:place-content-center lg:my-8`}>
          <View style={tw`text-center mt-8`}>
            <Text style={tw`text-lg text-cs-primary font-semibold md:text-xl`}>
              {text.Get_your_account}
            </Text>
            <Text
              to={null}
              href="/signUp"
              style={tw`text-lg font-semibold text-white`}
            >
              Register
            </Text>
          </View>
        </View>
        <Form
          validationSchema={ValidationSchema}
          initialValues={{
            email: '',
            password: '',
          }}
          onSubmit={() => {}}
          className="mt-4 lg:mt-0 lg:mx-2 xl:mx-14 3xl:mx-64"
        >
          <Text
            style={tw`card-title text-cs-primary font-bold text-xl lg:text-2xl my-3`}
          >
            {text.Login_title}
          </Text>

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
            style={tw`rounded-full text-md btn-md`}
            title="Login"
            /* isLoading ? <Loader /> */
          />
          <TouchableWithoutFeedback style={tw`w-100`}>
            <Text style={tw`text-cs-primary font-semibold text-right`}>
              {text.Forgot_password}
            </Text>
          </TouchableWithoutFeedback>
          <View style={tw`mt-8 lg:hidden`}>
            <View
              style={tw`text-center mt-4 flex flex-row justify-center align-center items-center`}
            >
              <Text
                style={tw`text-lg text-cs-primary font-semibold md:text-xl`}
              >
                {text.No_account}
              </Text>

              <TouchableWithoutFeedback
                onPress={() => {
                  navigation.navigate('SignUp')
                }}
                style={tw`rounded md:px-8 ml-2  bg-cs-secondary p-2`}
              >
                <Text style={tw` text-lg font-bold text-white `}>
                  {text.Register_now}
                </Text>
              </TouchableWithoutFeedback>
            </View>
          </View>
        </Form>
      </View>
    </View>
  </View>
)

LoginScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
}
export default LoginScreen
