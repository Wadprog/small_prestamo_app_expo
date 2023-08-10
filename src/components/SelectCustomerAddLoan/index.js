import React from 'react'

import BorrowersList from '../borrower/List'

import MultistepForms from '../MultistepForms'

const steps = [
  { label: "Personal's info", component: BorrowersList, name: 'borrower' },
]

const CreateCustomerAddLoanSteps = ({
  onFinish,
  onError,
  onLoading,
  ...otherProps
}) => {
  return (
    <MultistepForms
      steps={steps}
      onFinish={onFinish}
      onError={onError}
      onLoading={onLoading}
      indicators={false}
      {...otherProps}
    />
  )
}

export default CreateCustomerAddLoanSteps
