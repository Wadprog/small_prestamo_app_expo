import { View, TouchableOpacity } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import tw from '../../../lib/tailwind'
import Text from '../../../components/Text'
const SettingNav = ({ onPress, title, LeftIcon }) => {
  return (
    <TouchableOpacity onPress={onPress} style={tw``}>
      <View
        style={tw`flex flex-row items-center justify-between bg-white py-3 px-2`}
      >
        <View style={tw`justify-center flex flex-row  `}>
          {LeftIcon && (
            <View style={tw`mr-2`}>
              <LeftIcon />
            </View>
          )}
          <Text style={tw`text-lg  font-semibold`}>{title}</Text>
        </View>
        <MaterialCommunityIcons name="chevron-right" size={24} color="black" />
      </View>
    </TouchableOpacity>
  )
}

export default SettingNav
