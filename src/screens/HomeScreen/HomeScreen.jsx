import { View, Text, Dimensions, StatusBar} from 'react-native'
import * as React from 'react';

import HomeMap from '../../components/HomeMap/HomeMap'
import CovidMessage from '../../components/CovidMessage/CovidMessage'
import HomeSearch from '../../components/HomeSearch/HomeSearch' 


const HomeScreen = () => {
  return (
    <View >
      <View style={{height: Dimensions.get('window').height - 400, marginTop:StatusBar.currentHeight}}>
         <HomeMap />
      </View>

      {/* Covid message */}
      <CovidMessage />

      {/* bottom component*/}
        <HomeSearch />
    </View>
  )
}

export default HomeScreen

