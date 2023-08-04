import { View, Text } from 'react-native'
import React from 'react'
import { MaterialComunityIcons } from '@expo/vector-icons'


const LoanEmpty = () => {
  return (
    <View>
      <MaterialComunityIcons
        name="emoticon-sad-outline"
        size={100}
        color="black"
      />
      <Text>There are no loan found with this settings</Text>

    </View>
  )
}

export default LoanEmpty
