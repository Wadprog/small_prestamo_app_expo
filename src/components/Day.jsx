import { View } from 'react-native'
import React, { Component } from 'react'
import { Card, Layout, Avatar, Text } from '@ui-kitten/components'
import tw from '../lib/tailwind'

export class Day extends Component {
  render() {
    return (
      <Card style={tw`flex border- justify-center items-center mx-1 mt-3 mb-2`}>
        <Text category="s1" style={tw` text-center`}>
          Mon
        </Text>
        <Text category="h5" style={tw`text-lg text-center`}>
          13
        </Text>
        <View style={tw`flex flex-row`}>
          <View style={tw`bg-blue-200 h-[10px] w-[10px] rounded-full`}></View>
          <View style={tw`bg-red-200 h-[10px] w-[10px] rounded-full`}></View>
          <View style={tw`bg-red-300 h-[10px] w-[10px] rounded-full`}></View>
          <View style={tw`bg-red-500 h-[10px] w-[10px] rounded-full`}></View>
          <View style={tw`bg-blue-500 h-[10px] w-[10px] rounded-full`}></View>
        </View>
      </Card>
    )
  }
}

export default Day
