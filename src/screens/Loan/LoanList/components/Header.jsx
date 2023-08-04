import { View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

import tw from '../../../../lib/tailwind'
import Input from '../../../../components/Input'
import TextButton from '../../../../components/Button'

const Header = ({ onFileterBtnPress, onFilter }) => {
  const navigation = useNavigation()
  return (
    <View style={tw`h-[35] bg-color-primary-500 px-5 py-3`}>
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
      <View style={tw`  flex flex-row justify-between items-center `}>
        <TextButton
          title="Add Loan"
          appearance="outlined"
          onPress={() => navigation.navigate('AddLoans')}
        />
        <TextButton
          title="Add Loan Request"
          appearance="outlined"
          onPress={console.log}
        />
        <TextButton
          title="Pay Loan"
          appearance="outlined"
          onPress={console.log}
        />
      </View>
    </View>
  )
}

export default Header
