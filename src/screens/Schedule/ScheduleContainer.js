import React, { Component } from 'react'
import { ActivityIndicator, View } from 'react-native'
import axios from 'axios'
import cheerio from 'cheerio-without-node-native'
import ScheduleView from './ScheduleView'
import styles from './styles'

class Loading extends Component {
  constructor (props) {
    super(props)
    this.state= {
      isDataLoaded: false,
      allowReload: false,
      shows: []
    }
  }

  componentDidMount () {
    this.getData()
  }

  getData () {
    this.setState({ isDataLoaded: false })
    axios.get('https://horriblesubs.info/release-schedule/')
    .then( res => {
      let $ = cheerio.load(res.data)
      const table = $('table')
      let weekday = []
      let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
      for (let j = 0; j < table.length; j++) {
        let day = {
          weekday: days[j],
          schedule: []
        }
        const div = $(table[j]).find('.schedule-page-show')
        for (let i = 0; i < div.length; i++) {
          const comm = $(div[i]).find('a')
          day.schedule.push({
            link: comm.attr('href'),
            onPress: () => this.props.navigation.navigate('Showcase', { link: comm.attr('href'), title: comm.text()}),
            MainText: comm.text()
          })
        }
        weekday.push(day)
      }
      this.setState({ shows: weekday })
      this.setState({ isDataLoaded: true })
      this.setState({ allowReload: true })
    })
    .catch(err => {
      this.setState({ allowReload: true })
      console.log(err)
    })
  }

  render () {
    return (
      <View style={ styles.container }>
        {
          (this.state.isDataLoaded) &&
          <ScheduleView shows={ this.state.shows } />
        }
        {
          (!this.state.isDataLoaded) &&
          <ActivityIndicator style={{ alignSelf: 'center' }} size="large" color="#B81351" />
        }
      </View>
    )
  }
}

export default Loading