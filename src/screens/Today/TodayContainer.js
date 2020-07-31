import React, { Component } from 'react'
import { View, ActivityIndicator } from 'react-native'
import axios from 'axios'
import cheerio from 'cheerio-without-node-native'
import TodayView from './TodayView'
import styles from './styles'

class Today extends Component {
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
    axios.get('https://horriblesubs.info/')
    .then( res => {
      let index = 1
      const $ = cheerio.load(res.data)
      const shows = []
      const schedule_table_entries = $('.schedule-table').find('tr')
    
      for (let i = 0; i < schedule_table_entries.length; i++) {
        const show = schedule_table_entries[i];
        let mtext = $(show).children('.schedule-widget-show').text().trim()
        let mlink = $(show).find('.schedule-widget-show > a').attr('href')
        shows.push({
          MainText: mtext,
          SubText: $(show).children('.schedule-widget-time').text().trim(),
          link: mlink,
          onPress: () => this.props.navigation.navigate('Showcase', { link: mlink, title: mtext }),
          index
        })
        index += 1
      }
      this.setState({ shows })
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
          <TodayView shows={ this.state.shows }/>
        }
        {
          (!this.state.isDataLoaded) &&
          <ActivityIndicator style={{ alignSelf: 'center' }} size="large" color="#B81351" />
        }
      </View>
    )
  }
}

export default Today