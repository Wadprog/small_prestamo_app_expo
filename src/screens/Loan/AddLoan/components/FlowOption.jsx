import { TouchableOpacity } from 'react-native'
import React from 'react'

import tw from '../../../../lib/tailwind'
import Text from '../../../../components/Text'

const FlowOption = ({ onPress, text }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={tw`border border-2 border-color-primary-500 p-10`}
    >
      <Text>{text}</Text>
    </TouchableOpacity>
  )
}

export default FlowOption
