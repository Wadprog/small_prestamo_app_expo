import { View } from 'react-native'
import React from 'react'

import Text from '../Text'
import tw from '../../lib/tailwind'

const Borrower = ({ style, givenName, famillyName, idType, idNumber }) => {
  return (
    <View
      style={tw.style(
        `flex-1 border border-color-primary-500 m-1 rounded-xl   items-center justify-center px-5 py-10`,
        style
      )}
    >
      <Text>
        {givenName} {famillyName}
      </Text>
      <View style={tw`flex flex-row`}>
        <Text apperance="hint"> {idType ? 'cedula' : 'Passoport'}:</Text>
        <Text> {idNumber}</Text>
      </View>
    </View>
  )
}

export default Borrower
