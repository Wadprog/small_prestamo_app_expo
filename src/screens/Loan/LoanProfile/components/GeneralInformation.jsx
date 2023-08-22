import React from 'react'
import { View } from 'react-native'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

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
const currency_formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2,
})

const GeneralInformation = ({ loanDetails }) => {
  console.log('\n\n***GeneralInformation***\n\n')
  console.log({ loanDetails })

  return (
    <>
      <Row
        title="Maturity date "
        value={
          loanDetails?.maturity_date &&
          formatDistanceToNow(new Date(loanDetails?.maturity_date), {
          addSuffix: true,
        })}
      />
      <Row title="Creator" value=" Juan Eric" />
      <Row
        title="Issue Date"
        value={
          loanDetails?.issue_date &&
          formatDistanceToNow(new Date(loanDetails?.issue_date), {
            addSuffix: true,
          })
        }
      />
      <Row
        title="Principal deb"
        value={
          loanDetails?.debt_balance &&
          currency_formatter.format(loanDetails?.debt_balance)
        }
      />
      <Row
        title="Interest balance"
        value={
          loanDetails?.interest_balance &&
          currency_formatter.format(loanDetails?.interest_balance)
        }
      />
      <Row
        title="Over due Principal Balance"
        value={currency_formatter.format(0)}
      />
      <Row
        title="Over due Principl Interest"
        value={currency_formatter.format(0)}
      />
    </>
  )
}

export default GeneralInformation
