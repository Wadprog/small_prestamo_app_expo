import { View } from 'react-native'
import React from 'react'
import PropTypes from 'prop-types'

import Text from './Text'
import Button from './Button'
import tw from '../lib/tailwind'

const ListEmptyComponent = ({
  emptyMsg,
  reloadMsg,
  error = false,
  onReload,
}) => {
  text_color = error
    ? tw.color('color-error-500')
    : tw.color('color-primary-300')
  return (
    <View>
      <Text style={{ color: text_color }}>{emptyMsg}</Text>
      onReload && (
      <Button style={tw`bg-blue-500`} onPress={onReload}>
        {reloadMsg}|| Reload
      </Button>
      )
    </View>
  )
}

ListEmptyComponent.propTypes = {
  emptyMsg: PropTypes.string.required,
  reloadMsg: PropTypes.string,
  error: PropTypes.bool,
  onReload: PropTypes.func,
}

export default ListEmptyComponent
