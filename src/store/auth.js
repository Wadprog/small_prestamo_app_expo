/* eslint-disable no-shadow */
/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'
import { endpoints } from '../config'
import * as action from './api'
import { setHeader } from '../middleware/api'
import { store, remove } from '../lib/secureCache'
import { Alert } from 'react-native'

const url = endpoints.LOG_IN
const registerUrl = endpoints.REGISTER

const initialState = {
  loading: false,
  user: null,
  lastFetch: null,
  token: null,
  error: null,
}

const key = 'user'
export const Auth = createSlice({
  name: 'authentication',
  initialState,
  reducers: {
    loginRequested: (state) => {
      state.loading = true
    },
    loginSucceed: (state, action) => {
      const { accessToken, employee } = action.payload
      state.loading = false
      state.token = accessToken
      store(key, { employee, accessToken })
      setHeader('authorization', accessToken)
      state.user = employee
      state.lastFetch = Date.now()
    },

    logged:(state, action) => {
      // await remove('user')
      const { accessToken, employee } = action.payload
      setHeader('authorization', accessToken)
      state.loading = false
      state.token = accessToken
      state.user = employee
      state.lastFetch = Date.now()
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
      remove(key)
    },
    updateRequested: (state) => {
      state.loading = true
    },
    updateSucceed: (state, action) => {
      state.loading = false
      state.user = action.payload
      state.lastFetch = Date.now()
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
export const Login = (credentials) => (dispatch, getState) => {
  const { user, token } = getState().authentication
  if (user && token) {
    Alert.alert('You are already logged in')
  }

  dispatch(
    action.apiCallBegan({
      url,
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
export const getCurrentUser = (state) => {
  return state.authentication
}
export const logged = Auth.actions.logged.type
export default Auth.reducer
