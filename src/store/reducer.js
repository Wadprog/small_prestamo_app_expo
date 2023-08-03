import { combineReducers } from 'redux'

import plan from './plans'
import authentication from './auth'
import paymentIntents from './paymentIntents'

export default combineReducers({ authentication, plan, paymentIntents })
