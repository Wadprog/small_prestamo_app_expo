import { TouchableHighlight } from 'react-native'
import React from 'react'

const BackButton = ({ onPres }) => {
  return (
    <TouchableHighlight
      onPress={() => {
        err && setErr(null)
        setCurrentPosition((position) => position - 1)
      }}
    >
      <MaterialCommunityIcons
        name="chevron-left"
        size={30}
        color={themeContext.theme === 'light' ? 'black' : 'white'}
      />
    </TouchableHighlight>
  )
}

export default BackButton
