import { View, Text, StyleSheet, SafeAreaView, StatusBar } from 'react-native'
import React, {useEffect, useState,} from 'react'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import {GOOGLE_MAPS_APIKEY} from '@env'
import PlaceRow from './PlaceRows';

const DestinationSearch = () => {

  const [originPlace,setOriginPlace] = useState(null)
  const [destinationPlace, setDestinationPlace] = useState(null)

  useEffect(() => {
    console.log('useEffect is called')
    if (originPlace && destinationPlace) {
      console.warn('Redirect to results')
    }
  }, [originPlace, destinationPlace])


  return (
    <SafeAreaView>
        <View style={styles.container}>

        <GooglePlacesAutocomplete
            nearbyPlacesApi = 'GooglePlacesSearch'
            placeholder = 'From...'
            listViewDisplayed = 'auto'
            debounce = {400}
            currentLocation = {true}
            currentLocationLabel='Current location'
            minLenght = {2}
            enabledPoweredByContainer = {true}
            fetchDetails = {true}
            autoFoccus = {true}
            renderRow={(data)=> <PlaceRow  data={data}/>}
            query ={{
                
                key: GOOGLE_MAPS_APIKEY ,
                language :'en'
            }}
            styles={{
              container: styles.autocompleteContainer,
              textInput: styles.textInput,
              listView: styles.listView,
              seperator: styles.separator
            }}
            onPress = {(data, details = null)=> {
                setOriginPlace({data, details})
                console.log(currentLocation)
            
            }}
            />

        <GooglePlacesAutocomplete
          nearbyPlacesApi = 'GooglePlacesSearch'
          placeholder = 'To...'
          listViewDisplayed = 'auto'
          debounce = {400}
          minLenght = {2}
          enabledPoweredByContainer = {true}
          fetchDetails = {true}
          autoFoccus = {true}
          query ={{
              
              key: GOOGLE_MAPS_APIKEY ,
              language :'en'
          }}
          renderRow={(data)=> <PlaceRow  data={data}/>}

          styles={{
            container: {
              ...styles.autocompleteContainer,
              top: 70
            },
            textInput: styles.textInput,
            seperator: styles.separator
          }}

          onPress = {(data, details = null)=> {
              setDestinationPlace({data, details})
          
          }}
          />

        {/* Circle near Origin input */}
        <View style={styles.circle} />

        {/* Line between dots */}
        <View style={styles.line} />

        {/* Square near Destination input */}
        <View style={styles.square} />

        </View>
    </SafeAreaView>
  )
}

export default DestinationSearch


export const styles = StyleSheet.create({
    container: {
      padding: 10,
      height: '100%',
      marginTop:StatusBar.currentHeight
    },
    textInput: {
      padding: 10,
      backgroundColor: '#eee',
      marginVertical: 5,
      marginLeft: 20,
    },
  
    separator: {
      backgroundColor: '#efefef',
      height: 1,
    },
    listView: {
      position: 'absolute',
        top: 100,
    },
    autocompleteContainer: {
      position: 'absolute',
      top: 20,
      left: 10,
      right: 10,
    },
  
    row: {
      flexDirection: 'row',
      alignItems: 'center',
      marginVertical: 10,
    },
    iconContainer: {
      backgroundColor: '#a2a2a2',
      padding: 5,
      borderRadius: 50,
      marginRight: 15,
    },
    locationText: {
  
    },
  
    circle: {
      width: 5,
      height: 5,
      backgroundColor: 'black',
      position: 'absolute',
      top: 40,
      left: 15,
      borderRadius: 5,
    },
    line: {
      width: 1,
      height: 55,
      backgroundColor: '#c4c4c4',
      position: 'absolute',
      top: 45,
      left: 17,
    },
    square: {
      width: 5,
      height: 5,
      backgroundColor: 'black',
      position: 'absolute',
      top: 100,
      left: 15,
    },
  });