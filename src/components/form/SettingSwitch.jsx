import React from 'react'
import { useFormikContext } from 'formik'
import PropTypes from 'prop-types'
import { MotiView, useAnimationState } from 'moti'
import { View, TouchableOpacity } from 'react-native'

import tw from '../../lib/tailwind'
import Text from '../Text'

function SettingSwitch({
  name,
  contentContainerStyle = {},
  label,
  labelStyle,
  value = false,
  LeftIcon = null,
}) {
  const { setFieldValue } = useFormikContext()
  const animationState = useAnimationState({
    on: {
      left: 20,
    },
    off: {
      left: 5,
    },
  })

  const colorAnimationState = useAnimationState({
    on: {
      backgroundColor: 'blue',
    },
    off: {
      backgroundColor: 'gray',
    },
  })

  const [val, setVal] = React.useState(value)

  React.useEffect(() => {
    // Animation
    if (val) {
      animationState.transitionTo('on')
      colorAnimationState.transitionTo('on')
    } else {
      animationState.transitionTo('off')
      colorAnimationState.transitionTo('off')
    }
  }, [val])

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
      <TouchableOpacity
        onPress={() => {
          setVal(!val)
          setFieldValue(name, !val)
        }}
      >
        <MotiView
          state={colorAnimationState}
          style={tw.style({
            justifyContent: 'center',
            height: 25,
            width: 45,
            borderRadius: 25,
            // backgroundColor: 'red',
          })}
        >
          <MotiView
            state={animationState}
            style={tw.style(`bg-white`, {
              position: 'absolute',
              height: 20,
              width: 20,
              borderRadius: 10,
            })}
          />
        </MotiView>
      </TouchableOpacity>
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
