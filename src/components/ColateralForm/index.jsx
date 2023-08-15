import { View } from 'react-native'
import React from 'react'

import tw from '../../lib/tailwind'

import FlowOption from '../FlowOption'
import ScanDescribeColateral from '../ScanAddDescribeColateral'
import CaptureDescribeColateral from '../CaptureDescribeColateral'

const ColateralForm = ({ afterSumit }) => {
  const [flow, setFlow] = React.useState(0)

  const handleSubmit = (data) => {
    afterSumit(data)
  }
  return (
    <View style={tw``}>
      {flow === 0 ? (
        <View style={tw`flex-row justify-around pt-5 items-center`}>
          <FlowOption text="Take Pictures" onPress={() => setFlow(2)} />
          <FlowOption text="Scan Document" onPress={() => setFlow(1)} />
        </View>
      ) : (
        <View style={tw``}>
          {flow === 1 ? (
            <View style={tw`mx-2`}>
              <ScanDescribeColateral onFinish={handleSubmit} />
            </View>
          ) : (
            <CaptureDescribeColateral
              onFinish={handleSubmit}
              onCreateUser={() => setFlow(1)}
            />
          )}
        </View>
      )}
    </View>
  )
}

export default ColateralForm
