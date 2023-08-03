/* eslint-disable no-shadow */
/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'
import * as action from './api'

const initialState = {
  loading: false,
  completed: false,
  data: {},
  error: null,
}

export const PaymentIntent = createSlice({
  name: 'paymentIntents',
  initialState,
  reducers: {
    patchRequested: (state) => {
      state.loading = true
      state.error = null
    },
    patchSuceed: (state, action) => {
      console.log('patchSuceed', action.payload.paymentIntent)
      state.loading = false
      if (action.payload.paymentIntent.status === 'completed')
        state.completed = true
    },

    patchRequestFailed: (state, action) => {
      state.loading = false
      state.error = action.payload
    },

    paymentIntentsRequested: (state) => {
      state.data = {}
      state.error = null
      state.loading = true
    },
    paymentIntentReceived: (state, action) => {
      state.error = null
      state.loading = false
      state.data = action.payload.paymentIntent
      state.lastFetch = Date.now()
    },

    paymentIntentRequestFailed: (state, action) => {
      console.log(action.payload)
      state.loading = false
      state.error = action.payload
    },

    clearPaymentIntent: (state) => {
      state.data = {}
      state.error = null
      state.loading = false
    },

    offLoad: (state) => {
      state.loading = false
      state.data = {}
    },
  },
})

export const makePaymentIntent = () => (dispatch) => {
  dispatch(
    action.apiCallBegan({
      url: '/payment-intents',
      method: 'POST',
      onSuccess: PaymentIntent.actions.paymentIntentReceived.type,
      onStart: PaymentIntent.actions.paymentIntentsRequested.type,
      onError: PaymentIntent.actions.paymentIntentRequestFailed.type,
    })
  )
}

export const patchPaymentIntent = (data) => (dispatch, getState) => {
  const id = getState().paymentIntents?.data?.id
  if (!id) throw new Error('PaymentIntent not found')
  dispatch(
    action.apiCallBegan({
      data,
      method: 'PATCH',
      url: `/payment-intents/${id}`,
      onSuccess: PaymentIntent.actions.patchSuceed.type,
      onStart: PaymentIntent.actions.patchRequested.type,
      onError: PaymentIntent.actions.patchRequestFailed.type,
    })
  )
}

export const clearPaymentIntent = () => (dispatch) =>
  dispatch(PaymentIntent.actions.offLoad())

export const getPaymentIntent = (state) => state.paymentIntents

export default PaymentIntent.reducer
