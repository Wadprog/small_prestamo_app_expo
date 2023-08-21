import React from 'react'
import { TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'

import tw from '../lib/tailwind'
import MiniMap from './MiniMap'
import Modal from './Modal'
import Text from './Text'

function Map({ name, miniMapHeight, style, ...otherProps }) {
  const [editting, setEditing] = React.useState(false)
  return (
    <>
      <TouchableOpacity onPress={() => setEditing(true)}>
        <MiniMap style={tw`h-${miniMapHeight}`} {...otherProps} />
      </TouchableOpacity>
      <Modal
        visible={editting}
        OnClose={() => {
          setEditing(false)
        }}
      >
        <Text>Editable Map</Text>
        <MiniMap {...otherProps} />
      </Modal>
    </>
  )
}

Map.propTypes = {
  name: PropTypes.string.isRequired,
  otherProps: PropTypes.object,
}
export default Map
