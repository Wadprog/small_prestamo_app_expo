import React from 'react'
// Dependencies

import {
  View,
  TextInput,
  StyleSheet,
  TouchableHighlight,
  Text,
} from 'react-native'

import { ThemeContext } from '../context/theme.context'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import PropTypes from 'prop-types'
import { Input } from '@ui-kitten/components'
// Customs Dependencies

import defaultStyles from '../config/styles'
import tw from '../lib/tailwind'

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    borderRadius: 5,
    flexDirection: 'row',
    marginVertical: 10,
    overflow: 'hidden',
    padding: 15,
    width: '100%',
  },
  icon: {
    marginRight: 10,
  },

  input: {
    color: defaultStyles.colors.dark,
    marginLeft: 5,
    marginRight: 5,
    width: '100%',
    backgroundColor: 'yellow',
  },
})
// Main Function
function AppInput({ style, icon, append = undefined, ...otherProps }) {
  const themeContext = React.useContext(ThemeContext)
  const col =
    themeContext.theme === 'light'
      ? { backgroundColor: tw.color('gray-100') }
      : { backgroundColor: 'white' }
  return (
    <View style={[styles.container, defaultStyles.input, col, style]}>
      {icon && (
        <MaterialCommunityIcons name={icon} size={20} style={styles.icon} />
      )}
      <TextInput {...otherProps} style={[tw`flex-1`, defaultStyles.text]} />
      {append && (
        <TouchableHighlight onPress={append.onPress}>
          <MaterialCommunityIcons
            name={append.icon}
            size={20}
            style={styles.icon}
          />
        </TouchableHighlight>
      )}
    </View>
  )
}
// Styles

AppInput.propTypes = {
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  icon: PropTypes.string,
}
export default AppInput
