import { TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Card, CircularProgressBar, Text, Divider } from '@ui-kitten/components'
import { useNavigation } from '@react-navigation/native'
import { formatDistance, isAfter } from 'date-fns'

import tw from '../../lib/tailwind'

const Loan = ({
  borrower,
  id,
  debt_balance,
  loan_status,
  maturity_date,
  next_payment,
  plan,
}) => {
  const navigate = useNavigation()
  return (
    <Card style={tw`my-2 rounded-xl mx-1`}>
      <TouchableOpacity
        style={tw`flex flex-row items-center justify-between`}
        onPress={() => navigate.navigate('LoanProfile', { id })}
      >
        <View style={tw`flex flex-row items-center justify-center`}>
          <Text category="h6" style={tw`mr-2`}>
            #{id}
          </Text>
          <Text category="h6">{borrower}</Text>
        </View>
        <View style={tw`flex flex-row items-center justify-center`}>
          <Text category="h6" style={tw`mr-2`}>
            {new Intl.NumberFormat('en-US', {
              style: 'currency',
              currency: 'USD',
            }).format(debt_balance)}
          </Text>
          <CircularProgressBar
            progress={0.5}
            size="tiny"
            status={
              isAfter(new Date(next_payment), new Date()) ? 'success' : 'danger'
            }
          />
        </View>
      </TouchableOpacity>
      <Divider style={tw` bg-gray-100 my-2`} />
      <View style={tw`flex flex-row items-center justify-between`}>
        <View style={tw`p-1 bg-gray-100 rounded-full my-1`}>
          <Text category="c2" style={tw`text-black`}>
            {loan_status}
          </Text>
        </View>

        <Text category="c2" style={tw`font-bold`}>
          {plan}
        </Text>
        <Text category="c2" style={tw`font-bold`}>
          {/* 6 months */}
          {maturity_date
            ? formatDistance(new Date(maturity_date), new Date(), {
                addSuffix: true,
              })
            : 'N/A'}
        </Text>
      </View>
    </Card>
  )
}

export default Loan
