import { View, ScrollView } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import tw from '../../lib/tailwind'
import SettingsInput from './components/SettingsInput'
import Screen from '../../components/screen'
import Text from '../../components/Text'
import ImageInput from '../../components/ImageInput'

import Map from '../../components/Map'
const BussinessPage = () => {
  return (
    <Screen>
      <ScrollView style={tw`px-3 bg-gray-100 `}>
        <View sytle={tw`items-center justify-center flex flex-row`}>
          <ImageInput label="Your Logo" />
        </View>
        <SettingsInput
          label="Bussiness Name"
          title="El Gallo Prestamo"
          name="bussinessName"
          LeftIcon={() => (
            <MaterialCommunityIcons
              name="domain"
              size={24}
              color={tw.color('color-primary-500')}
            />
          )}
        />
        <SettingsInput
          label="Phone number"
          title="8097673704"
          name="bussinessPhone"
          LeftIcon={() => (
            <MaterialCommunityIcons
              name="phone"
              size={24}
              color={tw.color('color-success-500')}
            />
          )}
        />
        <SettingsInput
          label="Email"
          title="coreo@negocio.com"
          name="busssinessEmail"
          LeftIcon={() => (
            <MaterialCommunityIcons
              name="email"
              size={24}
              color={tw.color('color-warning-500')}
            />
          )}
        />

        <SettingsInput
          label="Description"
          title="lorem ipsum dolore loque sea no se dime mas cosa lorem ipsum dolore loque sea no se dime mas cosa"
          name="bussinessPhone"
        />
        <Text>Bussiness Address</Text>
        <Map miniMapHeight={50} />
      </ScrollView>
    </Screen>
  )
}

export default BussinessPage
