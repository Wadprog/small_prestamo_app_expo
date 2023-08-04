import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { NavigationContainer } from '@react-navigation/native'
import AppNavigation from './Drawer'
import AuthNavigator from './Auth.navigation'
import PaymentNavigator from './Payment.navigation'

import { getCurrentUser } from '../store/auth'

// import AppTheme from './theme'
import { get } from '../lib/cache'
import { logged } from '../store/auth'

function Routes() {
  const auth = useSelector(getCurrentUser)

  const dispatch = useDispatch()
  const restoreUser = async () => {
    const user = await get('user')
    console.log('user', user)
    if (!user) return
    dispatch({ type: logged, payload: { user } })
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
