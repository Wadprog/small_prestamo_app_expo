/* eslint-disable no-return-assign */
import axios from 'axios'
import { Alert } from 'react-native'
import * as actions from '../store/api'
import env from '../config'

// eslint-disable-next-line consistent-return
const api = (store) => (next) => async (action) => {
  if (action.type !== actions.apiCallBegan.type) return next(action)

  const { onSuccess, onError, onStart } = action.payload

  if (onStart) console.log('on start provided')
  if (onError) console.log('on Error provided')
  if (onSuccess) console.log('on success provided')

  if (onStart) store.dispatch({ type: onStart })

  next(action)
  try {
    const response = await axios({
      baseURL: env.BASE_URL,
      ...action.payload,
    })

    console.log('api response')
    console.log({ response: response.data })
    if (!onSuccess) return console.log('no success provided')
    // store.dispatch({
    //   type: actions.apiCallSucceeded.type,
    //   payload: response.data,
    // })
    //removed the condition to check for onSuccess because it will always be there
    store.dispatch({ type: onSuccess, payload: response.data })
    // console.log({ response })
  } catch (error) {
    console.log('api error', error)
    console.log({ error })
    store.dispatch({
      type: actions.apiCallFailed.type,
      payload: error.response.data.message,
    })
    if (onError) store.dispatch({ type: onError, payload: error.response.data })
    // Alert.alert('Error', error.response._response || error.message, [
    //   {
    //     text: 'Retry',
    //     onPress: () => {},
    //     style: 'cancel',
    //   },
    //   { text: 'OK', onPress: () => {} },
    // ])
  }
}

const Head = (headerKey, headerVal) =>
  // eslint-disable-next-line implicit-arrow-linebreak
  (axios.defaults.headers.common[headerKey] = headerVal)

export default api
export const setHeader = Head
