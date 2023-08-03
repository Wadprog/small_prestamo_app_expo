import React from 'react'
import PropTypes from 'prop-types'
import { SafeAreaView } from 'react-native'
import { Layout } from '@ui-kitten/components'

import tw from '../../lib/tailwind'
import Wrapper from './components/Wrapper'
import DefaultPageLoading from './components/PageLoading'

function Screen({ children, loading = false, error = false, safeArea = true }) {
  return (
    <Layout style={tw`flex-1 `}>
      {loading ? (
        <DefaultPageLoading />
      ) : (
        <>
          {safeArea ? (
            <SafeAreaView style={tw`flex-1 `}>
              <Wrapper children={children} error={error} />
            </SafeAreaView>
          ) : (
            <Wrapper children={children} error={error} />
          )}
        </>
      )}
    </Layout>
  )
}

Screen.propTypes = {
  children: PropTypes.node,
  loading: PropTypes.bool,
  error: PropTypes.bool,
}
export default Screen
