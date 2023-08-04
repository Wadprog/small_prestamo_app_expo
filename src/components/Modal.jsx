import { View, Modal, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { MaterialComunityIcons } from '@expo/vector-icons'
import Button from './Button'
import tw from '../lib/tailwind'

import { Icon } from '@ui-kitten/components'

const CustomModal = ({ visible, OnClose, children, ...otherProps }) => {
  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="slide"
      {...otherProps}
    >
      <View style={tw`h-full`}>
        <View style={tw`h-[50%]`}></View>
        <View
          style={tw.style(`bg-base-100 h-[50%] rounded-3xl p-3`, {
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 3,
            },
            shadowOpacity: 0.58,
            shadowRadius: 16.0,

            elevation: 24,
          })}
        >
          <TouchableOpacity
            onPress={OnClose}
            style={tw.style(
              `bg-red-500 h-10 w-10 ml-auto -mt-8 rounded-xl items-center justify-center  `,
              {
                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 5,
                },
                shadowOpacity: 0.34,
                shadowRadius: 6.27,

                elevation: 10,
              }
            )}
          >
            <Text style={tw`text-white font-bold`}>X</Text>
          </TouchableOpacity>

          {children}
        </View>
      </View>
    </Modal>
  )
}

export default CustomModal
