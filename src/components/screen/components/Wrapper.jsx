import { View } from 'react-native'
import React from 'react'
import Proptypes from 'prop-types'

import Button from '../../Button'
import tw from '../../../lib/tailwind'
import { Error } from '../../form'

const Wrapper = ({ children, error }) => (
  <>
    <View
      style={tw` flex flex-row  justify-between items-center w-full px-3 bg-blue-500`}
    >
      <Error error={error?.message} visible={error} />
      {error?.reload && (
        <Button
          appearance="ghost"
          onPress={error.reload}
          title="Reload "
          textStyle={tw`text-white`}
        />
      )}
    </View>
    {children}
  </>
)

Wrapper.propTypes = {
  children: Proptypes.node.Required,
  error: Proptypes.object,
}

export default Wrapper
