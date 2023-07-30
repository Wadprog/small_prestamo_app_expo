import React from 'react'
import Proptypes from 'prop-types'

import LottieView from 'lottie-react-native'
const AnimationLoader = ({ source, ...otherProps }) => {
  return <LottieView source={source} {...otherProps} />
}

AnimationLoader.propTypes = {
  source: Proptypes.object.isRequired,
  otherProps: Proptypes.object,
}
export default AnimationLoader
