import React from 'react'
import PropTypes from 'prop-types'
import { View, Switch } from 'react-native'

import tw from '../../../lib/tailwind'
import Text from '../../../components/Text'

function SettingSwitch({
  name,
  contentContainerStyle = {},
  label,
  labelStyle,
  value = false,
  LeftIcon = null,
  onValueChange,
}) {
  return (
    <View
      style={[
        tw`flex bg-white flex-row justify-between px-2 py-3`,
        contentContainerStyle,
      ]}
    >
      <View style={tw`flex flex-row gap-2`}>
        {LeftIcon && <LeftIcon />}
        <Text
          style={tw.style(`text-lg  font-semibold  capitalize`, labelStyle)}
        >
          {label || name}
        </Text>
      </View>

      <Switch
        trackColor={{ false: '#767577', true: '#81b0ff' }}
        thumbColor={value ? '#f5dd4b' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={onValueChange}
        value={value}
      />
    </View>
  )
}

SettingSwitch.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  labelStyle: PropTypes.object,
  contentContainerStyle: PropTypes.object,
}
export default SettingSwitch
