import React from 'react'
import * as Yup from 'yup'
import { View } from 'react-native'

import tw from '../../../../lib/tailwind'
import { Form, Field, ImageField, Submit } from '../../../../components/form'

const ValidationSchema = Yup.object().shape({
  phone: Yup.string().required().min(10).label('Phone'),
  profilePicture: Yup.string().label('Profile Picture'),
  given_name: Yup.string().required().min(3).label('First Name'),
  familly_name: Yup.string().required().min(3).label('Last Name'),
  email: Yup.string().required().min(6).email().label('Email'),
})
const AddCustomerForm = ({ handleSubmit, formValues }) => {
  return (
    <Form
      validationSchema={ValidationSchema}
      initialValues={formValues || initialValues}
      onSubmit={(values) => {
        handleSubmit({ borrower: { ...values } })
      }}
    >
      <View style={tw`flex flex-row justify-between `}>
        <ImageField />
        <View style={tw`flex-1 ml-3 rounded-xl`}>
          <Field
            required
            placeholder="First Name"
            name="given_name"
            type="text"
            style={tw`mr-1 `}
          />
          <Field
            required
            placeholder="Last Name"
            name="familly_name"
            type="text"
            style={tw``}
          />
        </View>
      </View>

      <Field
        required
        autoCapitalize="none"
        placeholder="Email"
        name="email"
        type="email"
        autoCorrect={false}
      />
      <Field
        required
        autoCapitalize="none"
        placeholder="Phone"
        name="phone"
        type="text"
        autoCorrect={false}
      />
    </Form>
  )
}

export default AddCustomerForm
