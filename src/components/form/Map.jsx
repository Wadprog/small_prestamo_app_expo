import React from 'react'
import { useFormikContext } from 'formik'
import PropTypes from 'prop-types'

import tw from '../../lib/tailwind'

import MiniMap from '../MiniMap'
import Error from './Error'
import { TouchableOpacity } from 'react-native'
import Modal from '../Modal'

function FormField({ name, ...otherProps }) {
  //   const { setFieldTouched, handleChange, errors, touched, values } =
  //     useFormikContext()
  return (
    <>
      <TouchableOpacity>
        <MiniMap
          value={values[name]}
          onBlur={() => setFieldTouched(name)}
          onChangeText={handleChange(name)}
          {...otherProps}
        />
        <Error error={errors[name]} visible={touched[name]} style={tw``} />
      </TouchableOpacity>
    </>
  )
}

FormField.propTypes = {
  name: PropTypes.string.isRequired,
  otherProps: PropTypes.object,
}
export default FormField
