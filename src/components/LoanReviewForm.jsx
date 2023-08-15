import { View, FlatList } from 'react-native'
import React from 'react'
import * as Yup from 'yup'
import { useDispatch, useSelector } from 'react-redux'

import tw from '../lib/tailwind'
import text from '../config/text'

import LoanPlan from './LoanPlan'
import { Form, Field, Submit } from './form'
import ListItemPicker from './ItemPicker/ListItemPicker'
import InfoBox from './InfoBox'
import Text from './Text'

import { requestLoanPlans, getLoanPlans } from '../store/loanPlans'
import { createloanReview, loanReviews } from '../store/loanReviews'
import LoadIndicator from './TransparentLoader'

const ValidationSchema = Yup.object().shape({
  loan_plan_id: Yup.number().label('Loan Plan'),
  proposed_amount: Yup.number().required().label('Proposed Amount'),
})

const initialValues = {
  loan_plan_id: '',
  proposed_amount: '',
}

const Previews = ({ title, value }) => {
  return (
    <View style={tw` flex flex-row mx-1`}>
      <Text style={tw`text-center   font-bold`}>{title || 'Margin'}:</Text>
      <Text style={tw`text-center font-semibold`}>{value || '$ 70.000'}</Text>
    </View>
  )
}
const LoanReviewForm = ({ handleSubmit, formValues, previousForm }) => {
  const dispatch = useDispatch()
  const { last_review, loading, error } = useSelector(loanReviews)
  const {
    data: loanPlans,
    loading: loanPlanIsLoading,
    // error: loanPlanError,
  } = useSelector(getLoanPlans)

  React.useEffect(() => {
    dispatch(requestLoanPlans())
  }, [])

  const handleFormSubmit = async (values) => {
    console.log('values', values)
    await dispatch(createloanReview({ ...values, ...previousForm }))
    console.log('After dispatch')
  }

  React.useEffect(() => {
    if (last_review && !loading && !error) {
      handleSubmit({
        last_review: last_review.id,
        loan_plan_id: last_review.loan_plan_id,
      })
    }
    return () => {
      console.log('clearing the current loan_review')
    }
  }, [last_review, loading, error])

  return (
    <>
      {loading || loanPlanIsLoading ? (
        <LoadIndicator />
      ) : (
        <>
          <InfoBox description={text.addLoanReviewForm.infoBox} />
          <FlatList
            horizontal
            data={[
              { title: 'slay', value: '$ 70.00' },
              { title: 1, value: '$ 70.00' },
              { title: 1, value: '$ 70.00' },
            ]}
            renderItem={(item) => <Previews {...item} />}
          />
          <Form
            validationSchema={ValidationSchema}
            initialValues={formValues || initialValues}
            onSubmit={handleFormSubmit}
          >
            <View style={tw`flex h-[70%]`}>
              <View style={tw`h-[90%]`}>
                <Field
                  required
                  placeholder="Proposed Amount"
                  name="proposed_amount"
                  type="number"
                  icon="currency-usd"
                />

                <Text style={tw`font-bold`}>CHOOSE A PLAN</Text>
                <ListItemPicker
                  name="loan_plan_id"
                  Component={LoanPlan}
                  data={[
                    { id: 1, name: 'Loan Plan 1' },
                    { id: 2, name: 'Loan Plan 2' },
                    { id: 3, name: 'Loan Plan 2' },
                    { id: 4, name: 'Loan Plan 2' },
                    { id: 5, name: 'Loan Plan 2' },
                  ]}
                  flatListOptions={{
                    numColumns: 2,
                    horizontal: false,
                  }}
                />
              </View>

              <Submit title="Next" />
            </View>
          </Form>
        </>
      )}
    </>
  )
}

export default LoanReviewForm
