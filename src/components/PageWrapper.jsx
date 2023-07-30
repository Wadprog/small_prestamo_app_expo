import React from 'react'
import { View, Text, Image } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

// Core components
import tw from '../lib/tailwind'
import { image } from '../config'

const PageWrapper = ({ children }) => {
  return (
    <View style={tw`mx-0 md:mx-0 lg:h-screen`}>
      <View style={tw` lg:mb:0`}>
        <LinearGradient
          colors={[tw.color('g-one/[0.78]'), tw.color('g-two/[0.78]')]}
          locations={[0.2, 0.8]}
          style={tw` bg-red-400 bg-gradient-to-tr from-g-one/[0.78] to-g-two/[0.78] h-96 z-0 lg:h-screen bg-red-500`}
        >
          <Image
            source={image.Shape_up}
            alt="_image.Shape_up"
            style={tw`hidden lg:block w-[22%] lg:absolute right-0 z-30 -mt-8 object-fit`}
          />
          <Text style={tw`text-center pt-14 text-base-100 text-2xl py-5`}>
            <Image
              style={tw`mt-10 w-[30%] m-auto`}
              source={image.log}
              alt="image.log_vwanu"
            />
          </Text>
          <Text
            style={tw`text-5xl text-v-yellow-dark font-bold py-10 mt-10 text-center align-middle`}
          >
            Welcome
          </Text>
          <Text
            style={tw`hidden lg:block text-base-100 text-xl -center pb-2 align-middle`}
          >
            Together We are Stronger
          </Text>
        </LinearGradient>

        <View
          style={tw`place-items-center bg-gray-100 shadow-t-2xl rounded-t-[30px] lg:rounded-none px-4 md:px-8 -mt-28 z-10 md:mx-36 lg:mt-0 lg:mx-0 lg:h-screen pt-5`}
        >
          {children}
        </View>
      </View>
    </View>
  )
}
// RegisterScreen.propTypes = {}
export default PageWrapper
