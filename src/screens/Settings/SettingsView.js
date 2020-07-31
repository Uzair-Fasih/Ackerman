import React from 'react'
import { View, Text } from 'react-native'
import styles from './styles';

const SettingsView = (props) => (
  <View style={styles.container}>
    <Text style={styles.LargeText}>Settings</Text>
    <View style={ styles.optionsContainer}>
      <View style={ styles.option }>
        <Text style={ styles.optionName }>Quality</Text>
        <Text style={ styles.optionValue }>480p</Text>
      </View>
    </View>
  </View>
)

export default SettingsView