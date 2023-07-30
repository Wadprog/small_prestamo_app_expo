import { View } from 'react-native'
import React from 'react'
import { List, Divider } from '@ui-kitten/components'

import tw from '../../../lib/tailwind'
import Input from '../../../components/Input'
import Screen from '../../../components/screen/Screen'
import TextButton from '../../../components/TextButton'
import Loan from '../../../components/Loan/Loan.component'
import Header from './components/Header'

const Timeline = () => {
  const Loans = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }]
  return (
    <Screen>
      <Header />
      {/* <View style={tw`h-[30] bg-[#6255af] px-5 pt-3`}>
        <Input
          placeholder="Search"
          style={tw` bg-white`}
          icon="swap-horizontal"
          append={{
            icon: 'filter-outline',
            onPress: () => {
              console.log('search')
            },
          }}
        />
        <View style={tw` w-3/4 flex flex-row justify-between items-center`}>
          <TextButton label="Loans in Debts" />
          <TextButton label="Today's Loan" />
          <TextButton label="Active Loans" />
        </View>
      </View> */}

      <List
        data={Loans}
        renderItem={({ item, idx }) => <Loan />}
        ItemSeparatorComponent={Divider}
      />
    </Screen>
  )
}

export default Timeline
