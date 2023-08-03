import React from 'react'
import { useSelector } from 'react-redux'

import { NavigationContainer } from '@react-navigation/native'
import AppNavigation from './Drawer'
import AuthNavigator from './Auth.navigation'
import PaymentNavigator from './Payment.navigation'

import { getCurrentUser } from '../store/auth'

// import AppTheme from './theme'
// import storage from '../utility/secureCache'
// import { logged } from '../store/auth'

function Routes() {
  const auth = useSelector(getCurrentUser)
  console.log('nav_auth', auth)
  //   const dispatch = useDispatch()
  //   const restoreUser = async () => {
  // const token = await storage.get('auth')
  // if (!token) return
  // dispatch({ type: logged, payload: { token } })
  //   }

  //   useEffect(() => {
  //     restoreUser()
  //   }, [])
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
