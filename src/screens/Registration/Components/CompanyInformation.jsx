import React from 'react'
import { Text, View } from 'react-native'
import * as Yup from 'yup'
import PropTypes from 'prop-types'

import tw from '../../../lib/tailwind'
import {
  Form,
  Submit,
  Field,
  ImageField,
  Select,
} from '../../../components/form'

const ValidationSchema = Yup.object().shape({
  name: Yup.string().required().label("Company's name"),
  wesite_url: Yup.string().label("Company's Website"),
  org_size: Yup.string().required().label("Company's Size"),
  companyLogo: Yup.string().label('Logo'),
})

const initialValues = {
  name: '',
  wesite_url: '',
  org_size: '',
  companyLogo: '',
}

const CompanyInfo = ({ handleSubmit, formValues }) => {
  console.log({ formValues })
  return (
    <Form
      validationSchema={ValidationSchema}
      initialValues={formValues || initialValues}
      onSubmit={(values) => {
        handleSubmit({ company: { ...values } })
      }}
    >
      <View style={tw`flex-1`}>
        <View style={tw`flex  flex-1 justify-between  p-2`}>
          <View style={tw`flex max-h-5/6`}>
            <ImageField name="companyLogo" />
            <Field name="name" placeholder="company's name" />
            <Field name="wesite_url" placeholder="company's Website" />

            <Select
              name="org_size"
              placeholder="company's Size"
              items={['1', '2', '3']}
            />

            <Select
              name="size"
              placeholder="Estimated borrowers Amount"
              items={['1', '2', '3']}
            />
          </View>
          <View style={tw`mb-1`}>
            <Submit title="Next" />
          </View>
        </View>
      </View>
    </Form>
  )
}

CompanyInfo.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
}
export default CompanyInfo
