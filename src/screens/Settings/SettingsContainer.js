import React, { Component } from 'react'
import SettingsView from './SettingsView'

class SettingsContainer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      quality: '480'
    }
  }
  render () {
    return <SettingsView {...this.state} 
      setQuality={(itemValue) => this.setState({ quality: itemValue })} />
  }
}

export default SettingsContainer