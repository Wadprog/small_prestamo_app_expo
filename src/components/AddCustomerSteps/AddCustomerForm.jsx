import React from 'react'
import * as Yup from 'yup'
import { View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

import tw from '../../lib/tailwind'
import text from '../../config/text'

import InfoBox from '../InfoBox'
import LoadIndicator from '../TransparentLoader'
import { Form, Field, ImageField, Submit, Select } from '../form'

import { CreateBorrower, getBorrowers } from '../../store/borrowers'

const ValidationSchema = Yup.object().shape({
  phone: Yup.string().required().min(10).label('Phone'),
  profilePicture: Yup.string().label('Profile Picture'),
  given_name: Yup.string().required().min(3).label('First Name'),
  familly_name: Yup.string().required().min(3).label('Last Name'),
  email: Yup.string().required().min(6).email().label('Email'),
  idType: Yup.string().label('Id Type'),
  idNumber: Yup.string().label('Id Number'),
})

const initialValues = {
  phone: '',
  profilePicture: '',
  given_name: '',
  familly_name: '',
  email: '',
  idType: '',
}

const AddCustomerForm = ({ handleSubmit, formValues }) => {
  const idtypes = ['passport', 'nationalId', 'driverLicense']
  const dispatch = useDispatch()
  const { current_borrower, loading, error } = useSelector(getBorrowers)

  const handleFormSubmit = async (values) => {
    dispatch(CreateBorrower(values))
  }
  React.useEffect(() => {
    if (current_borrower && !loading && !error) {
      handleSubmit({ borrower: current_borrower.id })
    }
  }, [current_borrower, loading, error])
  return (
    <>
      {loading ? (
        <LoadIndicator />
      ) : (
        <>
          <InfoBox description={text.addCustomerForm.infoBox} />
          <Form
            validationSchema={ValidationSchema}
            initialValues={formValues || initialValues}
            onSubmit={handleFormSubmit}
          >
            <View style={tw`flex h-[80%]`}>
              <View style={tw`h-[80%]`}>
                <View style={tw`flex flex-row justify-between `}>
                  <ImageField name="profilePricture" />
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
                <View style={tw`flex flex-row justify-between items-center  `}>
                  <Select name="idType" placeholder="Id Type" items={idtypes} />
                  <Field
                    required
                    autoCapitalize="none"
                    placeholder="Id Number"
                    name="idNumber"
                    type="text"
                    autoCorrect={false}
                    style={tw`ml-1 flex-1`}
                  />
                </View>
              </View>
              <View style={tw`bg-blue-500 -mb-15`}>
                <Submit title="Next" />
              </View>
            </View>
          </Form>
        </>
      )}
    </>
  )
}

export default AddCustomerForm
