import { View } from 'react-native'
import React from 'react'

import tw from '../../../lib/tailwind'
import Text from '../../../components/Text'
import animation from '../../../config/animation'
import AnimationLoader from '../../../components/AnimationLoader'
import LoadIndicator from '../../../components/LoadIndicator'

const PaymentSuccesful = () => {
  return (
    <View style={tw` h-full`}>
      <View style={tw`flex-1`}>
        <AnimationLoader source={animation.success.default} autoPlay loop />
      </View>
      <View style={tw`h-[200px] border-0 border-t rounded`}>
        <LoadIndicator loadingText='Loading your account'/>
      </View>
    </View>
  )
}

export default PaymentSuccesful
