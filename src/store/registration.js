/* eslint-disable no-shadow */
/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'

import * as action from './api'
import { endpoints } from '../config'
import { setHeader } from '../middleware/api'
import { store } from '../lib/cache'
const url = endpoints.REGISTER

const initialState = {
  loading: false,
  user: null,
  lastFetch: null,
  token: null,
  error: null,
}

export const Auth = createSlice({
  name: 'authentication',
  initialState,
  reducers: {
    loginRequested: (state) => {
      state.loading = true
    },
    loginSucceed: (state, action) => {
      state.token = action.payload.accessToken
      setHeader('authorization', action.payload.accessToken)
      state.loading = false
      state.user = action.payload.Person
      store('user', {
        Person: action.payload.Person,
        accessToken: action.payload.accessToken,
      })
      state.lastFetch = Date.now()
    },
    getAccountRequested: (state) => {
      state.loading = true
      state.error = null
    },
    getAccountSucceed: (state, action) => {
      state.lastFetch = 'this is a test'
      state.loading = false
      state.error = null
      state.user.company = action.payload.company
    },
    getAccountFailled: (state, action) => {
      console.log('getAccountFailled')
      console.log(action.payload)
      state.loading = false
      state.error = action.payload
    },

    LoginFailed: (state, action) => {
      state.loading = false
      state.token = null
      state.error = action.payload
    },
    LogOut: (state) => {
      state.loading = false
      state.token = null
      state.user = null
      // storage.remove('auth')
    },
    updateRequested: (state) => {
      state.loading = true
    },
    updateSucceed: (state, action) => {
      state.loading = false
      state.user = action.payload
      state.lastFetch = Date.now()
      store('user', action.payload)
    },
    updateFailed: (state, action) => {
      state.loading = false
      state.error = action.payload
    },
  },
})

export const Register = (newUser) => (dispatch) => {
  dispatch(
    action.apiCallBegan({
      url: registerUrl,
      data: newUser,
      method: 'POST',
      onSuccess: Auth.actions.loginSucceed.type,
      onStart: Auth.actions.loginRequested.type,
      onError: Auth.actions.LoginFailed.type,
    })
  )
}

export const getAccount = () => (dispatch, getState) => {
  const id = getState().authentication.user.id

  dispatch(
    action.apiCallBegan({
      url: `/employees/${id}`,
      method: 'GET',
      onSuccess: Auth.actions.updateSucceed.type,
      onStart: Auth.actions.updateRequested.type,
      onError: Auth.actions.updateFailed.type,
    })
  )
}
export const Login = (credentials) => (dispatch) => {
  dispatch(
    action.apiCallBegan({
      url: '/authentification',
      data: credentials,
      method: 'POST',
      onSuccess: Auth.actions.loginSucceed.type,
      onStart: Auth.actions.loginRequested.type,
      onError: Auth.actions.LoginFailed.type,
    })
  )
}
export const UpdateUser = (changes) => (dispatch) => {
  dispatch(
    action.apiCallBegan({
      url: '/users',
      data: changes,
      method: 'PATCH',
      onSuccess: Auth.actions.updateSucceed.type,
      onStart: Auth.actions.updateRequested.type,
      onError: Auth.actions.updateFailed.type,
    })
  )
}
export const logout = () => (dispatch) => dispatch(Auth.actions.LogOut())

export const getCurrentUser = (state) => state.authentication
export const logged = Auth.actions.loginSucceed.type
export default Auth.reducer
