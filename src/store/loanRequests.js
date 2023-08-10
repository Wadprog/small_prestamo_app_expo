/* eslint-disable no-shadow */
/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'
import * as action from './api'

const initialState = {
  loading: false,
  data: [],
  lastFetch: null,
  error: null,
  last_request: null,
}

export const LoanRequest = createSlice({
  name: 'loanrequest',
  initialState,
  reducers: {
    loanRequestsRequested: (state) => {
      state.data = []
      state.error = null
      state.loading = true
    },
    loanRequestsReceived: (state, action) => {
      state.error = null
      state.loading = false
      state.data = action.payload
      state.lastFetch = Date.now()
    },

    loanRequestRequestFailed: (state, action) => {
      state.loading = false
      state.error = action.payload
    },
    loanCreateRequest:(state)=>{
      state.error=null
      state.loading=true
    },
    loanCreated: (state, action) => {
      state.error = null
      state.loading = false
      state.last_request = action.payload
      state.lastFetch = Date.now()
    },
    loanCreateFailed: (state, action) => {
      state.loading = false
      state.error = action.payload
      state.last_request = null
    },
    
    clearLast: (state) => {
      state.last_request = null
    }
    
  },
})

export const RequestloanRequest = () => (dispatch) => {
  dispatch(
    action.apiCallBegan({
      url: '/loan-requests',
      method: 'GET',
      onSuccess: LoanRequest.actions.loanRequestsReceived.type,
      onStart: LoanRequest.actions.loanRequestsRequested.type,
      onError: LoanRequest.actions.loanRequestRequestFailed.type,
    })
  )
}

export const CreateloanRequest = (data) => (dispatch) => {
  dispatch(
    action.apiCallBegan({
      url: '/loan-requests',
      method: 'POST',
      data,
      onSuccess: LoanRequest.actions.loanCreated.type,
      onStart: LoanRequest.actions.loanCreateRequest.type,
      onError: LoanRequest.actions.loanCreateFailed.type,
    })
  )
}

export const clearLastRequest = () => (dispatch) => dispatch(LoanRequest.actions.clearLast())
export const getloanRequests = (state) => state.loanrequest
export default LoanRequest.reducer
