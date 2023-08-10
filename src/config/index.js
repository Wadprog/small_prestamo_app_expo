import Constants from 'expo-constants'

import tw from '../lib/tailwind'
// Custom exports
export { default as image } from './image'
export { default as size } from './size'
export { default as colors } from './colors'
export { default as text } from './text'

export const endpoints = {
  REGISTER: '/tenants',
  LOG_IN: '/states',
  MARKET: '/market',
  STORE: '/store/',
  EXPECTED_HEADER: 'x-auth-token',
  MAKE_PAYMENT: '/payments',
}

const stepIndicatorStyles = {
  stepIndicatorSize: 25,
  currentStepIndicatorSize: 30,
  separatorStrokeWidth: 2,
  currentStepStrokeWidth: 4,
  stepStrokeCurrentColor: tw.color('color-primary-500'),
  stepStrokeWidth: 3,
  stepStrokeFinishedColor: tw.color('color-primary-500'),
  stepStrokeUnFinishedColor: '#aaaaaa',
  separatorFinishedColor: tw.color('color-primary-500'),
  separatorUnFinishedColor: '#aaaaaa',
  stepIndicatorFinishedColor: tw.color('color-primary-600'),
  stepIndicatorUnFinishedColor: '#ffffff',
  stepIndicatorCurrentColor: '#ffffff',
  stepIndicatorLabelFontSize: 13,
  currentStepIndicatorLabelFontSize: 13,
  stepIndicatorLabelCurrentColor: tw.color('color-primary-500'),
  stepIndicatorLabelFinishedColor: '#ffffff',
  stepIndicatorLabelUnFinishedColor: '#aaaaaa',
  labelColor: '#999999',
  labelSize: 13,
  currentStepLabelColor: tw.color('color-primary-500'),
}
const environment = {
  development: {
    BASE_URL: 'http://localhost:3030/',
    endpoints,
    stepIndicatorStyles,
  },
  staging: {
    BASE_URL: process.env.api_url,
    endpoints,
    stepIndicatorStyles,
  },
  production: {
    BASE_URL: process.env.api_url,
    endpoints,
    stepIndicatorStyles,
  },
}
const getEnvironment = () => {
  // eslint-disable-next-line no-undef
  if (__DEV__) {
    return environment.development
  } else if (Constants.manifest.releaseChannel === 'staging') {
    return environment.staging
  }
  return environment.production
}

export default getEnvironment()
