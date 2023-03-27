import { View, Text, Image, FlatList } from 'react-native'
import React from 'react'
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps'
import MapViewDirections from 'react-native-maps-directions';
import {GOOGLE_MAPS_APIKEY} from '@env'

const RouteMap = (props) => {

  const origin = {
    latitude:5.5600935,
    longitude: -0.197704,
  };

  const destination = {
    latitude: 5.584353,
    longitude: -0.235151,
  }

  return (
    <View>
      <MapView
       provider={PROVIDER_GOOGLE} // remove if not using Google Maps
       style={{height:"100%", width:'100%'}}
       region={{
         latitude:   5.614818,
         longitude:  -0.186964,
         latitudeDelta: 0.05,
         longitudeDelta: 0.021,
       }}
     >
      <MapViewDirections
        origin={origin}
        destination={destination}
        apikey={GOOGLE_MAPS_APIKEY}
        strokeWidth={5}
        strokeColor="black"
       />
       <Marker 
          coordinate={origin}
          title={'Origin'}
       />
       <Marker 
          coordinate={destination}
          title={'Destination'}
       />
     </MapView>
    </View>
  )
}

export default RouteMap