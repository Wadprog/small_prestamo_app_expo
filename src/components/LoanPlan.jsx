import { View, TouchableOpacity } from 'react-native'
import React from 'react'

import Text from './Text'
import tw from '../lib/tailwind'

const LoanPlan = (props) => {
  console.log('props', props)
  const {
    payment_interval,
    payment_frequency,
    interest_percentage,
    onMainPress,
    selected = false,
  } = props
  console.log('payment_interval')
  return (
    <TouchableOpacity
      onPress={() => onMainPress(props.id)}
      style={tw.style(
        `flex-1 border m-1 rounded-xl items-center justify-center px-5 ${
          selected === true
            ? 'border-color-success-500 border-2'
            : 'border-color-primary-300'
        } `
      )}
    >
      <Text>
        {payment_frequency} 'Every' {payment_interval}
      </Text>
      <View style={tw`flex flex-row`}>
        <Text apperance="hint"> Percentage:</Text>
        <Text> {interest_percentage} % </Text>
      </View>
    </TouchableOpacity>
  )
}

export default LoanPlan
