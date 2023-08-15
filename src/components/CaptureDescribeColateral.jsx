import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Camera, CameraType } from 'expo-camera'
import Ionicons from '@expo/vector-icons/Ionicons'

import tw from '../lib/tailwind'

const CaptureDescribeColateral = () => {
  const [type, setType] = React.useState(CameraType.back)
  function toggleCameraType() {
    setType((current) =>
      current === CameraType.back ? CameraType.front : CameraType.back
    )
  }
  return (
    <View style={tw`items-center justify-center`}>
      <Camera
        style={tw`h-[95%] w-[80%] border border-2 border-color-primary-500`}
        type={type}
      >
        <View style={tw``}>
          <TouchableOpacity style={tw`p-2`} onPress={toggleCameraType}>
            <Ionicons name="camera-reverse" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
  )
}

export default CaptureDescribeColateral
