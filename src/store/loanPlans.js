/* eslint-disable no-shadow */
/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'
import * as action from './api'

const initialState = {
  loading: false,
  data: [],
  lastFetch: null,
  error: null,
}

export const LoanPlans = createSlice({
  name: 'loanplan',
  initialState,
  reducers: {
    loanPlansRequested: (state) => {
      state.data = []
      state.error = null
      state.loading = true
    },
    loanPlansReceived: (state, action) => {
      state.error = null
      state.loading = false
      state.data = action.payload
      state.lastFetch = Date.now()
    },

    loanPlansRequestFailed: (state, action) => {
      state.data = []
      state.error = action.payload
      state.loading = true
    },

    createLoanPlansRequested: (state) => {
      state.error = null
      state.loading = true
    },
    createLoanPlansReceived: (state, action) => {
      state.error = null
      state.loading = false
      state.data = [...state.data, action.payload]
      state.lastFetch = Date.now()
    },
    createLoanPlansFailed: (state, action) => {
      state.loading = false
      state.error = action.payload
    },
  },
})

export const requestLoanPlans = () => (dispatch) => {
  dispatch(
    action.apiCallBegan({
      url: '/loan_plans',
      method: 'GET',
      onSuccess: LoanPlans.actions.loanPlansReceived.type,
      onStart: LoanPlans.actions.loanPlansRequested.type,
      onError: LoanPlans.actions.loanPlansRequestFailed.type,
    })
  )
}

export const CreateLoanPlans = (data) => (dispatch) => {
  dispatch(
    action.apiCallBegan({
      url: '/loanPlans',
      method: 'POST',
      data,
      onSuccess: LoanPlans.actions.createLoanPlansReceived.type,
      onStart: LoanPlans.actions.createLoanPlansRequested.type,
      onError: LoanPlans.actions.createLoanPlansFailed.type,
    })
  )
}

export const getLoanPlans = (state) => state.loanplan
export default LoanPlans.reducer
