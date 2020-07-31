import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { View, StyleSheet, Text } from 'react-native'

const styles = StyleSheet.create({
  Header: {
    display: 'flex',
    flexDirection: 'row',
    margin: 20,
    marginTop: 30,
    marginBottom: 10,
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#222327'
  },
  searchtext: {
    fontFamily: 'light',
    fontSize: 16,
    alignSelf: 'center',
    color: '#707070',
    marginLeft: 20
  }
})

const Header = () => (
  <View style={ styles.Header }>
    <Ionicons name='ios-search' size={20} color='#707070' />
    <Text style={ styles.searchtext }> Search for your favourite shows </Text>
  </View>
)

export default Header