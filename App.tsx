import React from 'react'
import * as eva from '@eva-design/eva'
import { Provider } from 'react-redux'
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components'

import { store } from './src/store'
import Routes from './src/navigation'

import { ThemeContext } from './src/context/theme.context'

import { EvaIconsPack } from '@ui-kitten/eva-icons'

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
          <Routes />
        </ApplicationProvider>
      </ThemeContext.Provider>
    </Provider>
  )
}
