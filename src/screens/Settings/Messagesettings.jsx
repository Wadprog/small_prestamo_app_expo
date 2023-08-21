import { View, Text } from 'react-native'
import React from 'react'

const Messagesettings = () => {
  return (
    <View>
      <Text>Pick form list how many days before to send notification</Text>

      <Text>1 day before</Text>
      <Text>2 day before</Text>
      <Text>3 day before</Text>

      <Text>Choose for list prefered notification chanel </Text>

      <Text>SMS</Text>
      <Text>Correo</Text>

      <Text> Default to other chanel if the other is not available ? </Text>

      <Text> Switch Notify on weekends ?</Text>
      <Text> Copy on notification</Text>
      <Text>Prefered copy chanel</Text>
    </View>
  )
}

export default Messagesettings
