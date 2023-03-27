import { View, Text, StyleSheet, Pressable,} from 'react-native'
import React from 'react'
import UbertypeRow from '../UbertypeRow/UbertypeRow'

import typeData from '../../../assets/data/types'

const UberTypes = () => {
  const onSubmit = ()=> {
    console.log('submit')
  }
  return (
    <View >
      {typeData.map( (type) => 
      <UbertypeRow type={type} />)}

      <Pressable onPress={onSubmit} style={{
        backgroundColor: 'black',
        padding: 10,
        margin: 10,
        alignItems: 'center',
      }}>
        <Text style={{color: 'white', fontWeight: 'bold'}}>
          Confirm Uber
        </Text>
      </Pressable>
    </View>
  )
}

export default UberTypes

const styles = StyleSheet.create({

});