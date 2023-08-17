import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useStripe } from '@stripe/stripe-react-native'

import RequestPayment from './components/RequestPayment'
import PaymentSuccesful from './components/PaymentSuccesful'

import Screen from '../../components/screen'
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

  console.log('paymentIntent', paymentIntent)

  const show_payment_sheet = async () => {
    if (
      paymentIntent.loading ||
      paymentIntent.error ||
      !paymentIntent.data?.client_secret
    ) {
      console.log('Not ready to show payment sheet')
      return
    }

    if (!paymentIntent.completed) {
      try {
        const initPaymentSheetResponse = await initPaymentSheet({
          paymentIntentClientSecret: paymentIntent.data.client_secret,
        })

        console.log({ initPaymentSheetResponse })

        if (initPaymentSheetResponse.error) {
          console.log('error innitiation payment sheet')
          console.log(initPaymentSheetResponse.error)
        } else {
          console.log('success innitiation payment sheet')
          console.log({ initPaymentSheetResponse })
          console.log('About to present payment sheet')
          await presentPaymentSheet()
          // if (paymentResponse.error) {
          //   console.log('error ')
          //   console.log(paymentResponse.error)
          //   return
          // }
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
