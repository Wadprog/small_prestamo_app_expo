/* eslint-disable no-return-assign */
import axios from 'axios'
import { Alert } from 'react-native'
import * as actions from '../store/api'
import env from '../config'

// eslint-disable-next-line consistent-return
const api = (store) => (next) => async (action) => {
  if (action.type !== actions.apiCallBegan.type) return next(action)

  const { onSuccess, onError, onStart } = action.payload

  if (onStart) store.dispatch({ type: onStart })

  next(action)
  try {
    const response = await axios({
      baseURL: env.BASE_URL,
      ...action.payload,
    })

    if (!onSuccess) return
    store.dispatch({ type: onSuccess, payload: response.data })

    store.dispatch({
      type: actions.apiCallSucceeded.type,
      payload: response.data,
    })
  } catch (error) {
    store.dispatch({
      type: actions.apiCallFailed.type,
      payload: error.response.data.message,
    })
    if (!onError)
      return Alert.alert('Error', error.response._response || error.message, [
        {
          text: 'Retry',
          onPress: () => {},
          style: 'cancel',
        },
        { text: 'OK', onPress: () => {} },
      ])

    store.dispatch({ type: onError, payload: error.response.data })
  }
}

const Head = (headerKey, headerVal) => {
  console.log('** setting an header **')
  axios.defaults.headers.common[headerKey] = headerVal
}

export default api
export const setHeader = Head
