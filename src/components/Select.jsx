import React from 'react'
import PropTypes from 'prop-types'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { View, Modal, TouchableOpacity } from 'react-native'
import Text from './Text'
import Screen from './screen/Screen'
import { ThemeContext } from '../context/theme.context'
// Custom import
import tw from '../lib/tailwind'

export default function Select({
  items,
  placeholder,
  onValueChange,
  style,
  value,
  ...otherProps
}) {
  const [selectedItem, setSelectedItem] = React.useState(value||null)
  const [modalVisible, setModalVisible] = React.useState(false)
  const themeContext = React.useContext(ThemeContext)
  const col =
    themeContext.theme === 'light'
      ? { backgroundColor: tw.color('gray-100') }
      : { backgroundColor: 'white' }
  return (
    <View style={[tw`rounded-lg    p-3 my-1`, col, style]} {...otherProps}>
      <View style={tw`flex flex-row items-center justify-between`}>
        <MaterialCommunityIcons name="apps" size={20} />
        <View>
          {selectedItem ? (
            <Text style={tw`font-semibold text-lg`}>{selectedItem}</Text>
          ) : (
            <Text style={tw`text-gray-400  text-lg`}>
              {placeholder || 'Pick an option'}
            </Text>
          )}
        </View>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <MaterialCommunityIcons name="chevron-down" size={20} />
        </TouchableOpacity>
      </View>
      <Modal visible={modalVisible}>
        <Screen>
          <View style={tw`p-3`}>
            <TouchableOpacity
              onPress={() => setModalVisible(false)}
              style={tw`flex flex-row justify-end`}
            >
              <MaterialCommunityIcons
                name="close"
                style={tw`m-2 text-cs-primary text-3xl`}
              />
            </TouchableOpacity>
            <Text style={tw`font-bold text-lg text-cs-primary my-2`}>
              Pick an option
            </Text>
            {items.map((item) => (
              <TouchableOpacity
                onPress={() => {
                  setSelectedItem(item)
                  onValueChange(item)
                  setModalVisible(false)
                }}
              >
                <View style={tw.style(`my-1 p-3 rounded-lg`, col)}>
                  <Text style={tw`font-bold text-lg`}>{item}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </Screen>
      </Modal>
    </View>
  )
}

Select.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  onValueChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  style: PropTypes.object,
}
