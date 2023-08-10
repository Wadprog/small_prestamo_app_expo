/* eslint-disable no-shadow */
/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'
import * as action from './api'

const initialState = {
  loading: false,
  data: [],
  lastFetch: null,
  error: null,
  last_review: null,
}

export const LoanReview = createSlice({
  name: 'loanreview',
  initialState,
  reducers: {
    reviewsRequest: (state) => {
      state.data = []
      state.error = null
      state.loading = true
    },
    reviewsReceived: (state, action) => {
      state.error = null
      state.loading = false
      state.data = action.payload
      state.lastFetch = Date.now()
    },

    reviewsFailed: (state, action) => {
      state.loading = false
      state.error = action.payload
    },
    reviewCreate:(state)=>{
      state.error=null
      state.loading=true
    },
    reviewCreated: (state, action) => {
      state.error = null
      state.loading = false
      state.last_review = action.payload
      state.lastFetch = Date.now()
    },
    reviewFailed: (state, action) => {
      state.loading = false
      state.error = action.payload
      state.last_review = null
    },
    clearLast: (state) => {
      state.last_review = null
    }
    
    
    
  },
})

export const getReviews = () => (dispatch) => {
  dispatch(
    action.apiCallBegan({
      url: '/loan-reviews',
      method: 'GET',
      onSuccess: LoanReview.actions.reviewsReceived.type,
      onStart: LoanReview.actions.reviewsRequest.type,
      onError: LoanReview.actions.reviewsFailed.type,
    })
  )
}

export const createloanReview = (data) => (dispatch) => {
  dispatch(
    action.apiCallBegan({
      url: '/loan-reviews',
      method: 'POST',
      data,
      onStart: LoanReview.actions.reviewCreate.type,
      onSuccess: LoanReview.actions.reviewCreated.type,
      onError: LoanReview.actions.reviewFailed.type,
    })
  )
}

export const clearLastReview = () => (dispatch) => dispatch(LoanReview.actions.clearLast())
export const loanReviews = (state) => state.loanReview
export default LoanReview.reducer
