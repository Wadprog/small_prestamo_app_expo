import { View } from 'react-native'
import React from 'react'

import tw from '../../../../lib/tailwind'

import Text from '../../../../components/Text'

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
const GeneralInformation = () => {
  return (
    <>
      <Text style={tw`text-left mt-3 mb-2`}>Loan Details</Text>
      <Row title="Maturity date " value="now" />
      <Row title="Creator" value=" Juan Eric" />
      <Row title="Interest" value="10%" />
      <Row title="Issue Date" value="26/43/20" />
      <Row title="Principal deb" value="5%" />
      <Row title="Maturity Date" value="Juan Eric" />
      <Row title="Interest balance" value="5%" />
      <Row title="Maturity Date" value="26/43/20" />
      <Row title="Over due Principal Balance" value="500" />
      <Row title="Over due Principl Interest" value="26/43/20" />
    </>
  )
}

export default GeneralInformation
