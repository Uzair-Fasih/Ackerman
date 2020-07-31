import React from 'react'
import { StyleSheet, TouchableHighlight } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

const styled = StyleSheet.create({
  MinimalButton: {
    padding: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center'
  }
})

const MinimalButton = (props) => (
  <TouchableHighlight onPress={ props.onPress } style={[ styled.MinimalButton, props.styles ]}>
    <Ionicons name={ props.iconName } size={25} color={ props.color } style={{ alignSelf: 'center' }}/>
  </TouchableHighlight>
)

export default MinimalButton
