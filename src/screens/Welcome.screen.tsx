import { View, Image } from 'react-native'
import React from 'react'

import tw from '../lib/tailwind'
import image from '../config/image'
import Text from '../components/Text'
import Button from '../components/Button'
import Screen from '../components/screen'

// Main Function To Export
const WelcomeScreen = ({ navigation }) => (
  <Screen>
    <View style={[tw` flex flex-1 pt-20`]}>
      <View style={tw`flex-1`}>
        <View style={tw`flex justify-center items-center`}>
          <Image source={image.log} />
        </View>
        <Text
          category="h1"
          style={[tw`text-center  absolute top-65 mt-20 text-center w-100`]}
        >
          Lending
        </Text>
        <Text
          category="h1"
          style={[tw`text-center   absolute top-75 mt-20 text-center w-100`]}
        >
          Made easy
        </Text>
      </View>

      <View style={[tw`h-1/4  justify-center px-3`]}>
        <Button
          title="Login"
          size="giant"
          onPress={() => navigation.navigate('Login')}
          style={tw` w-full mb-2 bg-cs-primary  rounded-lg`}
        />
        <Button
          title="Register"
          size="giant"
          onPress={() => navigation.navigate('SignUp')}
          style={tw` w-full rounded-lg `}
        />
      </View>
    </View>
  </Screen>
)

export default WelcomeScreen
