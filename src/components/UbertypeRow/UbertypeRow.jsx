import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { Icon } from '@rneui/themed'
import Ionicons from "react-native-vector-icons/Ionicons";

const UbertypeRow = (props) => {
  const {type} = props;

  const getImage = () => {
    if (type.type === 'UberX') {
      return require('../../../assets/images/UberX.jpeg');
    }
    if (type.type === 'Comfort') {
      return require('../../../assets/images/Comfort.jpeg');
    }
    return require('../../../assets/images/UberXL.jpeg');
  }


  return (
    <View style={styles.container}>
      {/* IMAGE */}
      <Image style={styles.image} 
      source={getImage()} 
      />

      <View >
          <Text style={styles.type}>
            {type.type} {''}
            <Ionicons name={'person'} size={16} />
            3
          </Text>
          <Text style={styles.time}>
              8:11pm Drop off
          </Text>
      </View>

      <View style={styles.rightContainer}>
      <Ionicons name={'pricetag'} size={18} color={'#42d742'} />
        <Text style={styles.price}>
          est ${type.price}
        </Text>
      </View>
    </View>
  )
}

export default UbertypeRow

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 10,
    },
    image: {
      height: 70,
      width: 80,
      resizeMode: 'contain',
      marginRight: 5,
    },
    middleContainer: {
      flex: 1,
      marginHorizontal: 10,
    },
    type: {
      fontWeight: 'bold',
      fontSize: 18,
      marginBottom: 5,
    },
    time: {
      color: '#5d5d5d',
    },
    rightContainer: {
      width: 100,
      justifyContent: 'flex-end',
      flexDirection: 'row',
      marginLeft: 20,
    },
    price: {
      fontWeight: 'bold',
      fontSize: 18,
      marginLeft: 5,
    },
  });