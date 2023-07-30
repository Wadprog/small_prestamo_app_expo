import { View } from 'react-native'
import React from 'react'
import { Card, CircularProgressBar, Text, Divider } from '@ui-kitten/components'

import tw from '../../lib/tailwind'

const Loan = () => {
  return (
    <Card style={tw`my-2 rounded-3xl mx-1`}>
      <View style={tw`flex flex-row items-center justify-between`}>
        <View style={tw`flex flex-row items-center justify-center`}>
          <Text category="h6" style={tw`mr-2`}>
            #888
          </Text>
          <Text category="h6">Juan Urenas</Text>
        </View>
        <View style={tw`flex flex-row items-center justify-center`}>
          <Text category="h6" style={tw`mr-2`}>
            $ 5.6300
          </Text>
          <CircularProgressBar progress={0.5} size="tiny" status="success" />
        </View>
      </View>
      <Divider style={tw` bg-gray-100 my-2`} />
      <View style={tw`flex flex-row items-center justify-between`}>
        <View style={tw`p-1 bg-gray-100 rounded-full my-1`}>
          <Text category="c6" appearance="hint" style={tw`text-black`}>
            Active
          </Text>
        </View>

        <Text category="c6" appearance="hint" style={tw`font-bold`}>
          1.5 %
        </Text>
        <Text category="c6" appearance="hint" style={tw`font-bold`}>
          6 months
        </Text>
      </View>
    </Card>
  )
}

export default Loan
