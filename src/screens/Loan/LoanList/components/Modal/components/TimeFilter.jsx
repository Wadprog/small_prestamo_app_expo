import { View, Text } from 'react-native'
import React from 'react'

import Button from '../../../../../../components/Button'
import tw from '../../../../../../lib/tailwind'
import shadowBorder from '../lib/shadowBorder'
const TimeFilter = ({ text, selected, onSelect }) => {
  return (
    <View style={tw`flex-1`}>
      <Button
        title={text}
        appearance="outline"
        style={tw.style(` m-1 border-2`, shadowBorder(selected))}
      />
    </View>
  )
}

export default TimeFilter
