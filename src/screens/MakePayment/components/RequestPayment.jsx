import React from 'react'
import Proptypes from 'prop-types'
import { View } from 'react-native'
import { Spinner } from '@ui-kitten/components'

import tw from '../../../lib/tailwind'
import Text from '../../../components/Text'
import Button from '../../../components/Button'

const RequestPayment = ({ onRequest, loading }) => {
  return (
    <View style={tw`justify-center items-center flex-1`}>
      <Text category="h4" style={tw`text-center`}>
        Activate your Subscription
      </Text>
      <Text category="s1" style={tw`text-center mt-3`}>
        Acess to all your loans borrowers and manage your employees create mange
        and update payment plans customize your company's profile.
      </Text>
      <View style={tw`flex-row justify-center mt-5`}>
        <Button title={'Pay now'} disabled={loading} onPress={onRequest} />
      </View>
      {loading && (
        <View style={tw`mt-3`}>
          <Spinner />
        </View>
      )}
    </View>
  )
}

RequestPayment.propTypes = {
  onRequest: Proptypes.func.isRequired,
  //   loading: Proptypes.bool.isRequired,
}
export default RequestPayment
