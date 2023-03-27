import { View, Text, StatusBar, StyleSheet, Dimensions } from 'react-native'
import React from 'react'
import UberTypes from '../../components/UberTypes/UberTypes'
import RouteMap from '../../components/RouteMap/RouteMap'

const SearchResults = () => {
  return (
    <View  style={{display: 'flex', justifyContent: 'space-between', marginTop:StatusBar.currentHeight}}>
       <View style={{height: Dimensions.get('window').height - 330}}>
         <RouteMap />
      </View>

      <View style={{height: 330}}>
        <UberTypes  />
      </View>
  </View>
  )
}

export default SearchResults

const styles = StyleSheet.create({
  container: {
    marginTop:StatusBar.currentHeight,
  
  }
});