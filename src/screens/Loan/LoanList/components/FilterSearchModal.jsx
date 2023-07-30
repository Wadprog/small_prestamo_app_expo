import { Modal } from 'react-native'

const FilterSearchModal = ({ visible, children }) => {
  return (
    <Modal visible={visible} animationType="slide">
      {children}
    </Modal>
  )
}

export default FilterSearchModal