import React from 'react'
// Dependencies
import PropTypes from 'prop-types'

import { Button, Text } from '@ui-kitten/components'

// Custom dependencies
import tw from '../lib/tailwind'
function Btn({ title, onPress, textStyle = {}, ...otherProps }) {
  return (
    <Button onPress={onPress} {...otherProps}>
      <Text style={tw.style(`capitalize`, textStyle)}>{title}</Text>
    </Button>
  )
}

Btn.propTypes = {
  title: PropTypes.string.isRequired,
  otherProps: PropTypes.object,
  textStyle: PropTypes.object,
}
export default Btn
