import { View, Text, Image, FlatList } from 'react-native'
import React from 'react'
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps'

import cars from '../../../assets/data/cars'

const HomeMap = (props) => {

  const getImage = (type) => {
    if (type === 'UberX') {
      return require('../../../assets/images/top-UberX.png');
    }
    if (type === 'Comfort') {
      return require('../../../assets/images/top-Comfort.png');
    }
    return require('../../../assets/images/top-UberXL.png');
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
      {cars.map((car) => (
        <Marker
          key={car.id}
          coordinate={{latitude: car.latitude, longitude: car.longitude}}
        >
          <Image
            style={{
              width: 50,
              height: 50,
              resizeMode: 'contain',
              transform: [{
                rotate: `${car.heading}deg`
              }]
            }}
            source={getImage(car.type)}
          />
        </Marker>
      ))}
     </MapView>
    </View>
  )
}

export default HomeMap