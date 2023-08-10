import { combineReducers } from 'redux'

import plan from './plans'
import loan from './loans'
import idType from './idTypes'
import borrower from './borrowers'
import authentication from './auth'
import loanReview from './loanReviews'
import loanrequest from './loanRequests'
import paymentIntents from './paymentIntents'

export default combineReducers({
  plan,
  loan,
  idType,
  borrower,
  loanReview,
  loanrequest,
  authentication,
  paymentIntents,
})
