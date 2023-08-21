import React, { useState } from 'react'
import { View } from 'react-native'
import MapView from 'react-native-maps'

const MiniMap = ({ style }) => {
  const [mapRegion, setmapRegion] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  })
  return (
    <View style={style}>
      <MapView
        style={{ alignSelf: 'stretch', height: '100%' }}
        region={mapRegion}
      />
    </View>
  )
}
export default MiniMap
