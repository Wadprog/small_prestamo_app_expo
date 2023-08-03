import React from 'react'
import * as eva from '@eva-design/eva'
import { Provider } from 'react-redux'
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components'
import { EvaIconsPack } from '@ui-kitten/eva-icons'
import { StripeProvider } from '@stripe/stripe-react-native'

import { store } from './src/store'
import Routes from './src/navigation'
import { ThemeContext } from './src/context/theme.context'

// process.env.publicKey
const publishableKey =
  'pk_test_51NZcKGLtANqeXneyl9k3T1UFP6h89RxJneQNiv4oyjoXID8F3CKVmA9Zq06k9VuTdctRmrGBRSaZHBGQVfW6c3Rk007yBpGD7C'
export default function App() {
  const [theme, setTheme] = React.useState('light')

  const toggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(nextTheme)
  }
  return (
    <Provider store={store}>
      <IconRegistry icons={EvaIconsPack} />
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <ApplicationProvider {...eva} theme={eva[theme]}>
          <StripeProvider publishableKey={publishableKey}>
            <Routes />
          </StripeProvider>
        </ApplicationProvider>
      </ThemeContext.Provider>
    </Provider>
  )
}
