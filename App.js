import { StyleSheet, Text, View, StatusBar, PermissionsAndroid, Platform,} from 'react-native';
import HomeScreen from './src/screens/HomeScreen/HomeScreen';
import DestinationSearch from './src/screens/DestinationSearch/DestinationSearch';
import SearchResults from './src/screens/SearchResults/SearchResults';
import { useEffect, useState } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import * as React from 'react';


//import * as Location from 'expo-location';
import Geolocation, { getCurrentPosition } from 'react-native-geolocation-service';
navigator.geolocation = require('react-native-geolocation-service');


export default function App() {

  const androidPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: "Uber App location Permission",
          message:
            "Uber App needs access to your location " +
            "so you can take awesome rides.",
          buttonNeutral: "Ask Me Later",
          buttonNegative: "Cancel",
          buttonPositive: "OK"
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log("You can use the location");
      } else {
        console.log("Location permission denied");
      }
    } catch (err) {
      console.warn(err);
    }
  };

  useEffect(() => {
    if (androidPermission) {
      Geolocation.getCurrentPosition(
          (position) => {
            console.log(position);
          },
          (error) => {
            // See error code charts below.
            console.log(error.code, error.message);
          },
          { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
      );
      
    }
  
  }, [])
  

  useEffect(() => {
    if(Platform.OS == 'android') {
      androidPermission()
    } else{
      //IOS
      Geolocation.requestAuthorization();
    }
  }, [])
  

  
  

  return (
    <GestureHandlerRootView styles={{flex:1}}>
      
      {/* <HomeScreen /> */}
      <DestinationSearch />
      {/* <SearchResults /> */}
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:StatusBar.currentHeight
  },
});




// const [latLng, setLatLng] = useState({})

// const checkPermission = async() =>{
//   const hasPermission = await Location.requestForegroundPermissionsAsync();
//   if (hasPermission.status === 'granted') {
//     const permission = await askPermission();
//       return permission
//   }
//   return true
// };

// const askPermission = async()=>{
//   const permission = await Location.requestForegroundPermissionsAsync()
//   return permission.status === 'granted';
// };

// const getLocation = async()=>{
//   try {
//     const {granted} = await Location.requestForegroundPermissionsAsync();
//     if (!granted)return;
//     const {
//       coords:{latitude,longitude},
//     } = await Location.getCurrentPositionAsync();
//     setLatLng({latitude:latitude, longitude:longitude})

//   } catch(err){

//   }
// };

// useEffect(() => {
//   checkPermission();
//   getLocation()
// }, [])

// useEffect(() => {
//   if (getLocation) {
//     Geolocation.getCurrentPosition(
//         (position) => {
//           console.log(position);
//         },
//         (error) => {
//           // See error code charts below.
//           console.log(error.code, error.message);
//         },
//         { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
//     );
//   }
// }, [])