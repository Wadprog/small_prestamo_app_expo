import { View, ActivityIndicator } from 'react-native'
import React from 'react'

import tw from '../lib/tailwind'
import Text from './Text'

const TransparentLoader = ({ message }) => {
  return (
    <View
      style={tw`bg-black rounded-2xl h-full w-full opacity-30 z-20 absolute top-0 left-0 items-center justify-center`}
    >
      <ActivityIndicator size="large" color="#fff" />
      <Text style={tw`text-white font-bold text-center text-2xl`}>
        {message || 'Loading...'}
      </Text>
    </View>
  )
}

export default TransparentLoader
