import { View } from 'react-native'
import protypes from 'prop-types'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import Text from './Text'
import tw from '../lib/tailwind'
import Btn from './Button'

const Op = ({ name }) => {
  return (
    <View style={tw`flex flex-row justify-start items-center ml-5 my-1`}>
      <MaterialCommunityIcons
        name="check-circle"
        size={24}
        color="green"
        style={tw`mr-2`}
      />
      <Text>{name}</Text>
    </View>
  )
}

const PaymentPlan = ({
  id,
  name,
  monthly_price,
  yearly_price,
  description,
  period,
  options,
  selected = false,
  onMainPress,
}) => {
  return (
    <View
      style={tw`mx-2 h-full rounded-3xl border mb-2 pt-1  ${
        selected === true
          ? 'border-color-success-500 border-2'
          : 'border-color-primary-300'
      }`}
    >
      {selected && (
        <View style={tw`flex flex-row justify-end`}>
          <MaterialCommunityIcons
            name="check-circle"
            size={24}
            color="green"
            style={tw`mr-2`}
          />
        </View>
      )}
      <View style={tw`  flex-1 my-2 p-3 w-70`}>
        <View style={tw`flex-1`}>
          {/** Header */}
          <View>
            <Text category="h1" style={tw`text-center`}>
              {name}
            </Text>
            <Text category="h2" style={tw`text-center capitalize`}>
              ${period?.startsWith('m') ? monthly_price : yearly_price} /{' '}
              {period}
            </Text>
            <Text category="s1" style={tw`text-center font-bold my-3`}>
              {description}
            </Text>
          </View>
          {/** Options */}
          <View style={tw``}>
            {options.map((option) => (
              <Text>{option}</Text>
            ))}
            <Op name="Opcion a es el mejor" />
            <Op name="Opcion mucho mejor 4" />
            <Op name="Opcion mucho mejor 3" />
            <Op name="Opcion mucho mejor 3" />
          </View>
        </View>

        {/** Button below */}
        <View style={tw`-mt-2 `}>
          <Btn
            appearance="outline"
            title="select"
            onPress={() => onMainPress({ id })}
          />
        </View>
      </View>
    </View>
  )
}

PaymentPlan.propTypes = {
  name: protypes.string.isRequired,
  monthly_price: protypes.number.isRequired,
  yearly_price: protypes.number.isRequired,
  period: protypes.string.isRequired,
  options: protypes.arrayOf(protypes.string).isRequired,
}
export default PaymentPlan
