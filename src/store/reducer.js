import { combineReducers } from 'redux'

import authentication from './auth'
import plan from './plans'

export default combineReducers({ authentication, plan })
