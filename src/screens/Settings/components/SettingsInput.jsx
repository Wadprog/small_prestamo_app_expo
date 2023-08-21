import { View } from 'react-native'
import React from 'react'
import * as Yup from 'yup'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import startCase from 'lodash/startCase'

import tw from '../../../lib/tailwind'
import SettingNav from './SettingNav'
import Modal from '../../../components/Modal'

import Text from '../../../components/Text'
import { Form, Field, Submit } from '../../../components/form'

const SettingsInput = ({
  label,
  title,
  name,
  handleSubmit,
  LeftIcon,
  ...otherProps
}) => {
  const [editing, setEditing] = React.useState(false)

  const ValidationSchema = Yup.object().shape({
    [name]: Yup.string().required().label(startCase(name)),
  })

  return (
    <View style={tw`my-4 gap-2`}>
      {label && <Text appearance="hint">{label}</Text>}
      <SettingNav
        title={title}
        onPress={() => setEditing(true)}
        LeftIcon={LeftIcon}
      />
      <Modal visible={editing} OnClose={() => setEditing(false)}>
        <Form
          validationSchema={ValidationSchema}
          initialValues={{
            [name]: '',
          }}
          onSubmit={handleSubmit}
        >
          <Field
            required
            placeholder={title}
            autoCapitalize="none"
            name={name}
            {...otherProps}
          />

          <Submit
            title="save"
            appearance="ghost"
            style={tw`self-end mt-0 p-0`}
          />
        </Form>
      </Modal>
    </View>
  )
}

export default SettingsInput
