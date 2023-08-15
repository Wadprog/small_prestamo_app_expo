import { View } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import Text from './Text'
import tw from '../lib/tailwind'
import Button from './Button'

const InfoBox = ({ description }) => {
  return (
    <View
      style={tw`bg-color-primary-500 p-5 rounded-2xl my-3 h-35 overflow-hidden `}
    >
      <View style={tw`flex-row items-center justify-between`}>
        <MaterialCommunityIcons
          name="information-outline"
          size={12}
          color="white"
        />
        <MaterialCommunityIcons name="close" size={12} color="white" />
      </View>
      <View style={tw`flex-row items-center justify-between`}>
        <View style={tw` h-30 truncate pb-10`}>
          <Text appearance="hint" category="p1" style={tw`text-white ml-3 mt-1`}>
            {description}
          </Text>
        </View>
        <Button title="..." appearance="ghost" />
      </View>
    </View>
  )
}

export default InfoBox
