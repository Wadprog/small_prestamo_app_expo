import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useStripe } from '@stripe/stripe-react-native'
// import { MaterialCommunityIcons } from '@expo/vector-icons'

import RequestPayment from './components/RequestPayment'
import PaymentSuccesful from './components/PaymentSuccesful'

import Screen from '../../components/screen/Screen'
import {
  makePaymentIntent,
  getPaymentIntent,
  patchPaymentIntent,
  clearPaymentIntent,
} from '../../store/paymentIntents'

import { getAccount, getCurrentUser } from '../../store/registration'

const Makepayment = () => {
  const dispatch = useDispatch()
  const user = useSelector(getCurrentUser)
  const paymentIntent = useSelector(getPaymentIntent)
  const { initPaymentSheet, presentPaymentSheet } = useStripe()

  // console.log('paymentIntent', paymentIntent)
  console.log('user', user)

  const show_payment_sheet = async () => {
    if (
      paymentIntent.loading ||
      paymentIntent.error ||
      !paymentIntent.data.client_secret
    ) {
      console.log('error in show payment sheet')
      console.log({
        ld: paymentIntent.loading,
        err: paymentIntent.error,
        sc: paymentIntent.data.client_secret,
      })
      return
    }

    if (!paymentIntent.completed) {
      try {
        const initPaymentSheetResponse = await initPaymentSheet({
          paymentIntentClientSecret: paymentIntent.data.client_secret,
        })

        if (initPaymentSheetResponse.error) {
          console.log('error innitiation payment sheet')
          console.log('error', initPaymentSheetResponse.error)
        } else {
          console.log('success innitiation payment sheet')
          console.log({ initPaymentSheetResponse })
          console.log('About to present payment sheet')
          const paymentResponse = await presentPaymentSheet()
          if (paymentResponse.error) {
            console.log('error ')
            console.log(paymentResponse.error)
            return
          }
          console.log('Dispatching status completed')
          dispatch(patchPaymentIntent({ status: 'completed' }))
        }
      } catch (error) {
        console.log('error in show payment sheet')
      }
    } else {
      console.log('payment intent completed')
      console.log('getting account')
      dispatch(getAccount())
    }
  }

  show_payment_sheet()

  React.useEffect(() => {
    return () => {
      dispatch(clearPaymentIntent())
    }
  }, [])

  return (
    <Screen>
      {paymentIntent.data.completed ? (
        <PaymentSuccesful />
      ) : (
        <RequestPayment
          onRequest={() => {
            dispatch(makePaymentIntent())
          }}
        />
      )}
    </Screen>
  )
}

export default Makepayment
