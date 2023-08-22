import React from 'react'
import { View } from 'react-native'

import MiniMap from '../../../../components/MiniMap'
import tw from '../../../../lib/tailwind'
import Text from '../../../../components/Text'
import Button from '../../../../components/Button'

const Row = ({ title, value }) => {
  return (
    <View
      style={tw`flex flex-row justify-between p-2 border-gray-100 border-2`}
    >
      <Text>{title}</Text>
      <Text>{value}</Text>
    </View>
  )
}

const BorrowerInformation = () => {
  return (
    <View style={tw`px-2 pt-3`}>
      <Row title="Name" value="Juan Eric" />
      <Row title="Email" value="Juan@eric.com" />
      <Row title="Phone" value="123456789" />
      <Row title="Address" value="Ave Jose nunez de carceres" />
      <Row title="Loan Made" value="1" />
      <Row title="Loan Paid" value="1" />
      <Row title="Active Loan" value="1" />
      <Row title="Score" value="50" />
      <Text style={tw`mt-2`}>Address</Text>
      <MiniMap style={{ height: 200 }} />
      <Button title="See Profile" appearance="ghost" style={tw`self-end`} />
    </View>
  )
}

export default BorrowerInformation
