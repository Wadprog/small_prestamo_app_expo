import { View } from 'react-native'
import React from 'react'

import tw from '../../../../lib/tailwind'
import Input from '../../../../components/Input'
import TextButton from '../../../../components/TextButton'

const Header = ({ onFileterBtnPress, onFilter }) => {
  return (
    <View style={tw`h-[30] bg-[#6255af] px-5 pt-3`}>
      <Input
        placeholder="Search"
        style={tw` bg-white`}
        icon="swap-horizontal"
        onValueChange={(value) => onFilter(value)}
        append={{
          icon: 'filter-outline',
          onPress: onFileterBtnPress,
        }}
      />
      <View style={tw` w-3/4 flex flex-row justify-between items-center`}>
        <TextButton label="Loans in Debts" onPress={() => onFilter('debts')} />
        <TextButton label="Today's Loan" onPress={() => onFilter('today')} />
        <TextButton label="Active Loans" onPress={() => onFilter('active')} />
      </View>
    </View>
  )
}

export default Header
