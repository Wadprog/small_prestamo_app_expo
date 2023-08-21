import { View } from 'react-native'
import React from 'react'

import Text from '../../../components/Text'
import tw from '../../../lib/tailwind'
import Input from '../../../components/Input'

const Header = () => {
  return (
    <View style={tw`flex p-2 bg-color-primary-500 mb-2`}>
      <Text category="h3"style={tw` text-left text-white font-bold ml-3 mb-2 mt-1 `}>Settings</Text>
      <Input
        placeholder="Search"
        style={tw` bg-white `}
        icon="magnify"
        onValueChange={console.log}
        
      />
    </View>
  )
}

export default Header
