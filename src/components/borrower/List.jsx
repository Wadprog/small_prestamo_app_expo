import { View, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'

import tw from '../../lib/tailwind'
import Text from '../Text'
import Input from '../Input'
import ListEmpty from '../FullError'
import Borrower from './Minimum'
import borrowers from '../../mock_data/borrowers.json'
//  borrowers = []
const ListBorrowers = ({ onSelect, onCreateUser, showHeader = true }) => {
  return (
    <View>
      {showHeader && (
        <View style={tw`h-[35] bg-color-primary-500 px-5 py-3`}>
          <Input
            placeholder="Search"
            style={tw` bg-white`}
            icon="swap-horizontal"
            onValueChange={(value) => console.log(value)}
            append={{
              icon: 'magnify',
              onPress: () => {},
            }}
          />

          <Text style={tw`text-center text-white font-bold pt-3 pb-2`}>
            Select the borrower to create the transaction
          </Text>
        </View>
      )}

      {borrowers.length ? (
        <FlatList
          data={borrowers}
          horizontal={false}
          numColumns={2}
          renderItem={({ item }) => (
            <Borrower
              style={tw`py-10`}
              {...item}
              onPress={() => {
                onSelect(item)
              }}
            />
          )}
          keyExtractor={(item, index) => item.toString()}
          ListHeaderComponent={() => (
            <TouchableOpacity
              style={tw` border border-color-primary-500 items-center rounded-xl m-1 p-5 flex-1`}
            >
              <Ionicons name="person-add" size={32} color="green" />
              <Text> New Customer </Text>
            </TouchableOpacity>
          )}
        />
      ) : (
        <ListEmpty
          errorMsg={'You have no borrowers now'}
          secondLine={false}
          reloadMsg={'Crear uno'}
          onReload={() => onCreateUser()}
          style={tw` -mb-[50%] `}
        />
      )}
    </View>
  )
}

export default ListBorrowers
