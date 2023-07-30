import { View } from 'react-native'
import React from 'react'
import { Spinner } from '@ui-kitten/components'

import Text from './Text'
import tw from '../lib/tailwind'
const LoadIndicator = ({
  loadingText = '',
  spinnerProps = {},
  textProps = {},
  containerStyle = {},
  textStyles = {},
}) => {
  return (
    <View
      style={tw.style(` h-full justify-center items-center`, containerStyle)}
    >
      <Spinner {...spinnerProps} />
      {loadingText && (
        <Text
          category="h5"
          style={tw.style(`mt-2 capitalize`, textStyles)}
          {...textProps}
        >
          {loadingText}
        </Text>
      )}
    </View>
  )
}

export default LoadIndicator
