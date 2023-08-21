import { View, Text } from 'react-native'
import React from 'react'

import tw from '../../../lib/tailwind'
const Separator = ({ style = {} }) => (
  <View style={[tw`bg-gray-200 h-[.5] ml-50`, style]} />
)

export default Separator
