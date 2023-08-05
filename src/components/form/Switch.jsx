import React from 'react'
import { useFormikContext } from 'formik'
import PropTypes from 'prop-types'
import Checkbox from 'expo-checkbox'

import Error from './Error'

function FormSwitch({ name, ...otherProps }) {
  const { touched, errors, values, setFieldValue } = useFormikContext()

  return (
    <>
      <Checkbox
        {...otherProps}
        value={values[name]}
        onValueChange={(checked) => {
          console.log('checked', checked)
          setFieldValue(name, checked)
        }}
      />

      <Error error={errors[name]} visible={touched[name]} />
    </>
  )
}

FormSwitch.propTypes = {
  name: PropTypes.string.isRequired,
  otherProps: PropTypes.object,
}
export default FormSwitch
