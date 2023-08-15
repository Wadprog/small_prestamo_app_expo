import React from 'react'
import { useDispatch } from 'react-redux'

import LoanReviewForm from '../LoanReviewForm'
import LoanRequestForm from '../LoanRequestForm'
import AddCustomerForm from '../AddCustomerSteps/AddCustomerForm'

import MultistepForms from '../MultistepForms'

import { clearLastReview } from '../../store/loanReviews'
import { clearLastBorrower } from '../../store/borrowers'
import { clearLastRequest } from '../../store/loanRequests'

const steps = [
  {
    name: 'borrower',
    label: "Personal's info",
    component: AddCustomerForm,
  },
  {
    name: 'loanRequest',
    label: 'Loan Request',
    component: LoanRequestForm,
  },
  {
    name: 'loanReview',
    label: 'Loan Review',
    component: LoanReviewForm,
  },
]

const CreateCustomerAddLoanSteps = ({ onFinish, onError, onLoading }) => {
  const dispatch = useDispatch()

  React.useEffect(() => {
    console.log('clearing')
    dispatch(clearLastReview())
    dispatch(clearLastRequest())
    dispatch(clearLastBorrower())
  }, [dispatch])

  return (
    <MultistepForms
      steps={steps}
      onFinish={onFinish}
      onError={onError}
      onLoading={onLoading}
    />
  )
}

export default CreateCustomerAddLoanSteps
