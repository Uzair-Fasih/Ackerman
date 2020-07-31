import React, { Component } from 'react'
import { ActivityIndicator, View } from 'react-native'
import axios from 'axios'
import cheerio from 'cheerio-without-node-native'
import LatestView from './LatestView'
import styles from './styles'

const capitalize = (s) => {
  if (typeof s !== 'string') return ''
  return s.charAt(0).toUpperCase() + s.slice(1)
}

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
    axios.get('https://horriblesubs.info/api.php?method=getlatest')
    .then( res => {
      let index = 1
      const $ = cheerio.load(res.data)
      const div = $('li')
      const shows = []
      for (let i = 0; i < div.length; i++) {
        let link = $(div[i]).find('a').attr('href')
        let text = capitalize(link.replace('/shows/', '').split('-').join(' ')).split('#')
        shows.push({
          link,
          index,
          onPress: () => this.props.navigation.navigate('Showcase', { link, title: text[0]}),
          MainText: text.join(' Ep - ')
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
          <LatestView shows={ this.state.shows } />
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