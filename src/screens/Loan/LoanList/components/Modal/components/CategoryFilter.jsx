import { View, TouchableOpacity } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import tw from '../../../../../../lib/tailwind'
import Text from '../../../../../../components/Text'
import shadowBorder from '../lib/shadowBorder'
const CategoryFilter = ({ text, iconName, selected, onSelect }) => {
  return (
    <TouchableOpacity
      onPress={onSelect}
      style={tw.style(
        `items-center justify-center  rounded-xl px-3 py-2 flex-1 m-1 border-2 `,
        {
          ...shadowBorder(selected),
        }
      )}
    >
      <MaterialCommunityIcons name={iconName} size={54} color="black" />
      <Text style={tw`text-center font-bold `}>{text}</Text>
    </TouchableOpacity>
  )
}

export default CategoryFilter
