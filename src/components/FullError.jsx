import { View } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import Text from './Text'
import Button from './Button'
import tw from '../lib/tailwind'

const defaultSecondLine = `If the problem persist contact support`
const FullError = ({
  errorMsg,
  onReload,
  secondLine = true,
  secondlIneMessage,
}) => {
  return (
    <View style={tw` w-full  h-full justify-center items-center  rounded-2xl`}>
      <MaterialCommunityIcons
        name="emoticon-sad-outline"
        size={78}
        color={tw.color(`color-danger-500`)}
      />
      <Text category="h6">{errorMsg || "It's seems there is an error"} </Text>
      {secondLine && <Text>{secondlIneMessage || defaultSecondLine}</Text>}
      {onReload && (
        <Button appearance="ghost" title="Realod" onPress={onReload} />
      )}
    </View>
  )
}

export default FullError
