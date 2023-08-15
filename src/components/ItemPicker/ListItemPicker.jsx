import React from 'react'
import proptypes from 'prop-types'
import { FlatList } from 'react-native'

import { useFormikContext } from 'formik'
import tw from '../../lib/tailwind'

const ItemPicker = ({
  data,
  Component,
  name,
  flatListOptions = {},
  ...otherProps
}) => {
  console.log('data', data)
  console.log('Component', Component)
  const { setFieldValue, values } = useFormikContext()
  const handleSelect = (item) => {
    setFieldValue(name, item.id)
  }
  return (
    data && (
      <FlatList
        horizontal
        data={data}
        renderItem={({ item }) => (
          <Component
            key={item.id}
            selected={item.id === values[name]}
            {...item}
            onMainPress={() => handleSelect(item)}
            {...otherProps}
          />
        )}
        {...flatListOptions}
      />
    )
  )
}

ItemPicker.propTypes = {
  data: proptypes.array.isRequired,
  Component: proptypes.elementType.isRequired,
  name: proptypes.string.isRequired,
}

export default ItemPicker
