import { View } from 'react-native'
import React from 'react'
import { Slider } from '@miblanchard/react-native-slider'

import Text from './Text'

const SliderContainer = ({ sliderValue, children, onValueChange }) => {
  const [value, setValue] = React.useState(
    sliderValue ? sliderValue : DEFAULT_VALUE
  )

  const renderChildren = () => {
    return React.Children.map(children, (child) => {
      if (!!child && child.type === Slider) {
        return React.cloneElement(child, {
          onValueChange: (val) => {
            onValueChange(val)
            setValue(val)
          },
          value,
        })
      }

      return child
    })
  }

  return (
    <View>
      <View>
        <Text>{Array.isArray(value) ? value.join(' - ') : value}</Text>
      </View>
      {renderChildren()}
    </View>
  )
}

export default SliderContainer
