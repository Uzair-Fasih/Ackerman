import React from 'react'
import { View, Dimensions, StatusBar } from 'react-native'
import * as Font from 'expo-font'
import Header from './src/components/Widgets/Header'
import StackNavigation from './src/navigation/StackNavigator'

const { width, height } = Dimensions.get('window')
export default class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      areFontsLoaded: false
    }
  }

  async componentDidMount () {
    await Font.loadAsync({
      'light': require('./assets/fonts/light.ttf'),
      'bold': require('./assets/fonts/bold.ttf'),
    })
    this.setState({ areFontsLoaded: true })
  }

  render () {
    if (this.state.areFontsLoaded) return (
      <View style={{ display: 'flex', width, height, backgroundColor: '#191B1F' }}>
        <StatusBar hidden/>
        <StackNavigation />
      </View>
    )
    else return null
  }
}
