import { View } from 'react-native'
import React from 'react'
import * as Yup from 'yup'
import { useDispatch, useSelector } from 'react-redux'

import tw from '../lib/tailwind'
import LoanPlan from './LoanPlan'
import { Form, Field, Submit } from './form'
import ListItemPicker from './ItemPicker/ListItemPicker'
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
        <Form
          validationSchema={ValidationSchema}
          initialValues={formValues || initialValues}
          onSubmit={handleFormSubmit}
        >
          <View style={tw`flex h-[100%]`}>
            <View style={tw`h-[80%]`}>
              <Field
                required
                placeholder="Proposed Amount"
                name="proposed_amount"
                type="number"
              />

              <ListItemPicker
                name="loan_plan_id"
                Component={LoanPlan}
                data={loanPlans.data}
              />
            </View>
            <View style={tw`bg-blue-500 mb-5`}>
              <Submit title="Next" />
            </View>
          </View>
        </Form>
      )}
    </>
  )
}

export default LoanReviewForm
