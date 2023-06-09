import { View, Text, StyleSheet, Pressable } from 'react-native'
import { Icon } from '@rneui/themed'
import * as React from 'react';

const HomeSearch = () => {
  return (
    <View>
      {/*  Input Box */}
      <Pressable  style={styles.inputBox}>
        <Text style={styles.inputText}>Where To?</Text>

        <View style={styles.timeContainer}>
        <Icon type = 'material-community' name='clock-time-four' color={'#535353'} size = {26}/>
          <Text>Now</Text>
          <Icon type = 'material-community' name='chevron-down' size = {26}/>
        </View>
      </Pressable>

      {/* Previous destination */}
      <View style={styles.row}>
        <View style={styles.iconContainer}>
          <Icon type = 'material-community' name='clock-time-four' size={20} color={'#ffffff'} />
        </View>
        <Text style={styles.destinationText}>Spin Nightclub</Text>
      </View>

      {/* Home destination */}
      <View style={styles.row}>
        <View style={[styles.iconContainer, {backgroundColor: '#218cff'}]}>
          <Icon type = 'material-community'  name={'home'} size={20} color={'#ffffff'} />
        </View>
        <Text style={styles.destinationText}>Spin Nightclub</Text>
      </View>

    </View>

  )
}

export default HomeSearch

const styles = StyleSheet.create({
    inputBox: {
      backgroundColor: '#e7e7e7',
      marginTop: 10,
      padding: 10,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      //borderRadius: 10,
    },
    inputText: {
      fontSize: 20,
      fontWeight: '600',
      color: '#434343',
    },
    timeContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: 100,
      padding: 10,
      backgroundColor: '#fff',
      borderRadius: 50
    },
  
    row: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 20,
      borderBottomWidth: 1,
      borderColor: '#dbdbdb',
    },
    iconContainer: {
      backgroundColor: '#b3b3b3',
      padding: 10,
      borderRadius: 25,
    },
    destinationText: {
      marginLeft: 10,
      fontWeight: '500',
      fontSize: 16,
    },
  });