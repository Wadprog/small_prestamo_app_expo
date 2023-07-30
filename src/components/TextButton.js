import React from 'react'
import { TouchableOpacity } from 'react-native'

import Text from './Text'
import tw from '../lib/tailwind'

const TextButton = ({
  contentContainerStyle,
  disabled = false,
  label,
  labelStyle,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        ...contentContainerStyle,
      }}
      disabled={disabled}
      onPress={onPress}
    >
      <Text category="s6" style={tw.style(`underline`, labelStyle)}>
        {label}
      </Text>
    </TouchableOpacity>
  )
}

export default TextButton
