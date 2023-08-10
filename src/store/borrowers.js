/* eslint-disable no-shadow */
/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'
import * as action from './api'

const initialState = {
  loading: false,
  data: [],
  lastFetch: null,
  error: null,
  current_borrower: null,
}

export const Borrower = createSlice({
  name: 'borrower',
  initialState,
  reducers: {
    borrowersRequested: (state) => {
      state.data = []
      state.error = null
      state.loading = true
    },
    borrowersReceived: (state, action) => {
      state.error = null
      state.loading = false
      state.data = action.payload
      state.lastFetch = Date.now()
    },

    borrowerRequestFailed: (state, action) => {
      state.loading = false
      state.error = action.payload
    },
    createBorrowerRequested: (state) => {
      state.error = null
      state.loading = true
    },
    createBorrowerReceived: (state, action) => {
      state.error = null
      state.loading = false
      state.data = [...state.data, action.payload]
      state.current_borrower = action.payload
      state.lastFetch = Date.now()
    },
    createBorrowerFailed: (state, action) => {
      state.loading = false
      state.error = action.payload
    },
    clearLast: (state) => {
      state.current_borrower = null
    }
  },
})

export const RequestBorrowers = () => (dispatch) => {
  dispatch(
    action.apiCallBegan({
      url: '/borrowers',
      method: 'GET',
      onSuccess: Borrower.actions.borrowersReceived.type,
      onStart: Borrower.actions.borrowersRequested.type,
      onError: Borrower.actions.borrowerRequestFailed.type,
    })
  )
}

export const CreateBorrower = (data) => (dispatch) => {
  dispatch(
    action.apiCallBegan({
      url: '/borrowers',
      method: 'POST',
      data,
      onSuccess: Borrower.actions.createBorrowerReceived.type,
      onStart: Borrower.actions.createBorrowerRequested.type,
      onError: Borrower.actions.createBorrowerFailed.type,
    })
  )
}

export const clearLastBorrower = () => (dispatch) => dispatch(Borrower.actions.clearLast())
export const getBorrowers = (state) => state.borrower
export default Borrower.reducer
