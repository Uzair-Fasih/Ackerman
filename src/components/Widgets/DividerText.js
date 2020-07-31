import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  DividerText: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  Divider: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#000',
    flexGrow: 1,
    alignSelf: 'center'
  },
  Text: {
    color: '#000',
    fontFamily: 'light',
    fontSize: 16,
    margin: 10
  }
})

const DividerText = props => (
  <View style={ styles.DividerText }>
    <View style={ styles.Divider }></View>
    <Text style={ styles.Text }>{ props.text }</Text>
    <View style={ styles.Divider }></View>
  </View>
)

export default DividerText
