import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { NavigationContainer } from '@react-navigation/native'
import AppNavigation from './Drawer'
import AuthNavigator from './Auth.navigation'
import PaymentNavigator from './Payment.navigation'

import { getCurrentUser } from '../store/auth'

// import AppTheme from './theme'
import { get } from '../lib/secureCache'
import { logged, Login } from '../store/auth'

function Routes() {
  const auth = useSelector(getCurrentUser)
  const dispatch = useDispatch()

  const restoreUser = async () => {
    const { user, token } = auth
    if (user && token) return
    const storedUser = await get('user')
    if (!storedUser) {
      // const credential = await get('credential')
      // if (!credential) return
      // dispatch({ type: Login(credential) })
      return
    }
    dispatch({ type: logged, payload: storedUser })
  }

  useEffect(() => {
    restoreUser()
  }, [])
  return (
    <NavigationContainer>
      {!auth.user ? (
        <AuthNavigator />
      ) : auth.user.company.hasActiveSuscription ? (
        <AppNavigation />
      ) : (
        <PaymentNavigator />
      )}
      {/* {!auth.user ? <AuthNavigator /> : <AppNavigation />} */}
    </NavigationContainer>
  )
}

export default Routes
