import { View } from 'react-native'
import React from 'react'

import AnimationLoader from '../../../components/AnimationLoader'
import tw from '../../../lib/tailwind'
import animation from '../../../config/animation'


const PageLoading = () => {
  return (
    <View style={tw`bg-color-primary-900 flex-1`}>
      <AnimationLoader source={animation.loading.default} autoPlay loop />
    </View>
  )
}

export default PageLoading
