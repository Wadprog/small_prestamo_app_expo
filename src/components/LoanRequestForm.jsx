import { View, Image, FlatList } from 'react-native'
import React from 'react'
import * as Yup from 'yup'
import { useDispatch, useSelector } from 'react-redux'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import InfoBox from './InfoBox'
import tw from '../lib/tailwind'
import { Form, Field, Submit } from './form'
import LoadIndicator from './TransparentLoader'
import Text from './Text'
import Button from './Button'
import EmptyList from './FullError'
import Modal from './Modal'
import Colateral from './Colateral'
import ColateralForm from './ColateralForm'
import text from '../config/text'

import { CreateloanRequest, getloanRequests } from '../store/loanRequests'

const ValidationSchema = Yup.object().shape({
  request_amount: Yup.number().required().label('Loan Amount'),
})

const initialValues = {}

const colaterals = [
  // { image: null, price: 10.0 },
  // { image: null, price: 10.0 },
  // { image: null, price: 10.0 },
  // { image: null, price: 10.0 },
]

const LoanRequestForm = ({ handleSubmit, formValues, previousForm }) => {
  const dispatch = useDispatch()
  const res = useSelector(getloanRequests)
  const { last_request, loading, error } = res

  const handleFormSubmit = async (values) => {
    await dispatch(CreateloanRequest({ ...values, ...previousForm }))
  }

  const handleColateralAdded = (values) => {
    console.log('values', values)
  }

  const [modalVisible, setModalVisible] = React.useState(false)
  React.useEffect(() => {
    if (last_request && !loading && !error) {
      handleSubmit({ loan_request_id: last_request.id })
    }
    return () => {
      console.log('clearing the current loan_request')
    }
  }, [last_request, loading, error])

  return (
    <>
      {loading ? (
        <LoadIndicator />
      ) : (
        <>
          <InfoBox description={text.addLoanRequestForm.infoBox} />
          <Form
            validationSchema={ValidationSchema}
            initialValues={formValues || initialValues}
            onSubmit={handleFormSubmit}
          >
            <View style={tw`flex h-[80%]`}>
              <View style={tw`h-[80%]`}>
                <Field
                  icon="currency-usd"
                  required
                  placeholder="Request Amount"
                  name="request_amount"
                  type="number"
                  style={tw`z-10`}
                />

                <Button
                  style={tw`justify-between items-center bg-gray-100 `}
                  title="Add Colateral"
                  onPress={() => setModalVisible(true)}
                  appearance="outline"
                  accessoryLeft={(props) => (
                    <MaterialCommunityIcons
                      name="plus-circle"
                      size={24}
                      color={tw.color('blue-500')}
                    />
                  )}
                  accessoryRight={(props) => (
                    <MaterialCommunityIcons
                      name="chevron-down"
                      size={24}
                      color={tw.color('blue-500')}
                    />
                  )}
                />

                {colaterals?.length ? (
                  <FlatList
                    numColumns={2}
                    data={colaterals}
                    renderItem={({ item }) => <Colateral {...item} />}
                  />
                ) : (
                  <EmptyList
                    errorMsg="No colaterals for this borrower"
                    secondlIneMessage="Click the button above to add colaterals"
                    style={tw`h-[70%]`}
                  />
                )}
              </View>
              <View style={tw`bg-blue-500 mb-5`}>
                <Submit title="Next" />
              </View>
            </View>
          </Form>

          <Modal visible={modalVisible} OnClose={() => setModalVisible(false)}>
            <ColateralForm onFinish={handleColateralAdded} />
          </Modal>
        </>
      )}
    </>
  )
}

export default LoanRequestForm
