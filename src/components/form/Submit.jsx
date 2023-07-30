import React from 'react'
import { useFormikContext } from 'formik'
import PropTypes from 'prop-types'

// Custom Dependencies
import Btn from '../Button'

// eslint-disable-next-line react/prop-types
function SubmitBtn({ title, ...otherProps }) {
  const { handleSubmit } = useFormikContext()

  return <Btn title={title} onPress={handleSubmit} {...otherProps} />
}

SubmitBtn.prototype = {
  title: PropTypes.string.isRequired,
  otherProps: PropTypes.object,
}

export default SubmitBtn
