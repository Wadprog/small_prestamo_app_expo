import React from 'react'
import { useFormikContext } from 'formik'
import { Toggle } from '@ui-kitten/components'
import proptypes from 'prop-types'

const ToggleSwitch = ({
  name,
  label,
  value = false,
  onSwitch,
  ...otherProps
}) => {
  const { setFieldValue, values } = useFormikContext()

  React.useEffect(() => {
    setFieldValue(name, value)
  }, [value])
  return (
    <Toggle
      name={name}
      checked={values[name]}
      {...otherProps}
      onChange={(checked) => {
        setFieldValue(name, checked)
        onSwitch && onSwitch(checked)
      }}
    >
      {label ? label : null}
    </Toggle>
  )
}

ToggleSwitch.propTypes = {
  value: proptypes.bool,
  label: proptypes.string,
  name: proptypes.string.isRequired,
}
export default ToggleSwitch
