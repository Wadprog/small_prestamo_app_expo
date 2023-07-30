import { View } from 'react-native'
import React from 'react'
import proptypes from 'prop-types'

import { List } from '@ui-kitten/components'

const data = new Array(8).fill({
  title: 'Item',
})

import ModalPicker from './ModalPicker'
import ListPicker from './ListPicker'

const Picker = ({ view, data, listProps, Component }) => {
  const ToRender = view === 'list' ? ListPicker : ModalPicker
  
  return <ToRender data={data} Component={Component} listProps={listProps} />
}

Picker.propTypes = {
  view: proptypes.oneOf(['list', 'modal']).isRequired,
  listProps: proptypes.object,
  data: proptypes.arrayOf(proptypes.object).isRequired,
  otherProps: {
    items: proptypes.arrayOf(proptypes.element).isRequired,
  },
}
export default Picker
