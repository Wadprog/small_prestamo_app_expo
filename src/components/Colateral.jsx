import { View, Image } from 'react-native'
import React from 'react'

import tw from '../lib/tailwind'
import Text from './Text'

const Colateral = ({ image, price }) => {
  return (
    <View style={tw`border border-2 border-red-500 w-[50%] m-1`}>
      <Image
        source={image || require('../assets/images/share_coin.png')}
        style={tw` z-2 w-[100%] h-50`}
        width={50}
      />
      <View style={tw`bg-blue-500 rounded-full px-3 py-1 m-1`}>
        <Text style={tw`text-white text-sm`}> ${price || 10.0}</Text>
      </View>
    </View>
  )
}

export default Colateral
