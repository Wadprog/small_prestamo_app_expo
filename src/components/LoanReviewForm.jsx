import { View } from 'react-native'
import React from 'react'
import * as Yup from 'yup'
import { useDispatch, useSelector } from 'react-redux'

import tw from '../lib/tailwind'
import { Form, Field, Submit, Select } from './form'

import { createloanReview, loanReviews } from '../store/loanReviews'

const ValidationSchema = Yup.object().shape({
  // plan_id: Yup.number().label('Plan'),
  proposed_amount: Yup.number().required().label('Proposed Amount'),
})

const initialValues = {
    // plan_id: '',
  proposed_amount: '',
}

const LoanReviewForm = ({ handleSubmit, formValues, previousForm }) => {
  const dispatch = useDispatch()
 
  const { last_review, loading, error } = useSelector(loanReviews)

  const handleFormSubmit = async (values) => {
    console.log('values', values)
    await dispatch(createloanReview({ ...values, ...previousForm }))
    console.log('After dispatch')
    

  }

  React.useEffect(() => {
    if (last_review && !loading && !error) {
      handleSubmit({ last_review: last_review.id, plan_id: last_review.plan_id })
    }
    return () => {
      console.log('clearing the current loan_review')
    
    }
  }, [last_review, loading, error])

  return (
    <Form
      validationSchema={ValidationSchema}
      initialValues={formValues || initialValues}
      onSubmit={handleFormSubmit}
    >
      <View style={tw`flex h-[100%]`}>
        <View style={tw`h-[80%]`}>
          <Field
            required
            placeholder="Request Amount"
            name="proposed_amount"
            type="number"
          />

        <Select name="plan_id" label="Plan" items={[1,2,3]}/>
        </View>
        <View style={tw`bg-blue-500 mb-5`}>
          <Submit title="Next" />
        </View>
      </View>
    </Form>
  )
}

export default LoanReviewForm
