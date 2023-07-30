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

export const Plan = createSlice({
  name: 'plan',
  initialState,
  reducers: {
    plansRequested: (state) => {
      state.data = []
      state.error = null
      state.loading = true
    },
    planReceived: (state, action) => {
      state.error = null
      state.loading = false
      state.data = action.payload
      state.lastFetch = Date.now()
    },

    planRequestFailed: (state, action) => {
      state.loading = false
      state.error = action.payload
    },
  },
})

export const RequestPlans = () => (dispatch) => {
  dispatch(
    action.apiCallBegan({
      url: '/plans',
      method: 'GET',
      onSuccess: Plan.actions.planReceived.type,
      onStart: Plan.actions.plansRequested.type,
      onError: Plan.actions.planRequestFailed.type,
    })
  )
}

export const getPlans = (state) => state.plan
export default Plan.reducer
