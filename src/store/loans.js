/* eslint-disable no-shadow */
/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'
import * as action from './api'

const initialState = {
  loading: false,
  data: [],
  lastFetch: null,
  error: null,
  current_loan: null,
}

export const Loan = createSlice({
  name: 'loan',
  initialState,
  reducers: {
    loansRequested: (state) => {
      state.data = []
      state.error = null
      state.loading = true
    },
    loansReceived: (state, action) => {
      state.error = null
      state.loading = false
      state.data = action.payload.data
      state.lastFetch = Date.now()
    },

    loanRequestFailed: (state, action) => {
      state.loading = false
      state.error = action.payload
    },
    createLoanRequested: (state) => {
      state.error = null
      state.loading = true
    },
    createLoanReceived: (state, action) => {
      state.error = null
      state.loading = false
      state.data = [...state.data, action.payload]
      state.lastFetch = Date.now()
      state.current_loan = action.payload
    },
    createLoanFailed: (state, action) => {
      state.loading = false
      state.error = action.payload
    },
  },
})

export const getLoan = (id) => (dispatch) => {
  dispatch(
    action.apiCallBegan({
      url: `/loans/${id}`,
      method: 'GET',
      onSuccess: Loan.actions.createLoanReceived.type,
      onStart: Loan.actions.createLoanRequested.type,
      onError: Loan.actions.createLoanFailed.type,
    })
  )
}
export const requestLoan =
  (params = {}) =>
  (dispatch) => {
    dispatch(
      action.apiCallBegan({
        url: '/loans',
        method: 'GET',
        params,
        onSuccess: Loan.actions.loansReceived.type,
        onStart: Loan.actions.loansRequested.type,
        onError: Loan.actions.loanRequestFailed.type,
      })
    )
  }

export const CreateLoan = (data) => (dispatch) => {
  dispatch(
    action.apiCallBegan({
      url: '/loans',
      method: 'POST',
      data,
      onSuccess: Loan.actions.createLoanReceived.type,
      onStart: Loan.actions.createLoanRequested.type,
      onError: Loan.actions.createLoanFailed.type,
    })
  )
}

export const getLoans = (state) => state.loan
export default Loan.reducer
