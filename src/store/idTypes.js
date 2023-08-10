import { createSlice } from '@reduxjs/toolkit'
import * as action from './api'

const initialState = {
  loading: false,
  data: [],
  lastFetch: null,
  error: null,
}

export const IdType = createSlice({
  name: 'idType',
  initialState,
  reducers: {
    idTypesRequested: (state) => {
      state.data = []
      state.error = null
      state.loading = true
    },
    idTypesReceived: (state, action) => {
      state.error = null
      state.loading = false
      state.data = action.payload
      state.lastFetch = Date.now()
    },

    idTypeRequestFailed: (state, action) => {
      state.loading = false
      state.error = action.payload
    },
  },
})

export const RequestIdTypes = () => (dispatch) => {
  dispatch(
    action.apiCallBegan({
      url: '/idTypes',
      method: 'GET',
      onSuccess: IdType.actions.idTypesReceived.type,
      onStart: IdType.actions.idTypesRequested.type,
      onError: IdType.actions.loanRequestFailed.type,
    })
  )
}
export const getIdType = (state) => state.idType
export default IdType.reducer
