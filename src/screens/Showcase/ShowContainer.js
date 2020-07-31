import React, { Component } from 'react'
import { ActivityIndicator } from 'react-native'
import axios from 'axios'
import cheerio from 'cheerio-without-node-native'
import ShowView from './ShowView'
import { WebBrowser } from 'expo'

class ShowContainer extends Component {
  constructor (props) {
    super(props)
    this.state= {
      isDataLoaded: false,
      areEpisodesLoaded: false,
      allowReload: false,
      link: '',
      title: '',
      show: null,
      episodes: [],
      page: 0
    }
  }

  componentDidMount () {
    this.setState({ link: this.props.navigation.state.params.link.split('#')[0] })
    this.setState({ title: this.props.navigation.state.params.title })
    this.getData()
  }

  getData () {
    this.setState({ isDataLoaded: false })
    this.setState({ allowReload: false })
    const url = ('https://horriblesubs.info' + this.props.navigation.state.params.link.split('#')[0] + '/')
    axios.get(url)
    .then( res => {
      let $ = cheerio.load(res.data)
      let hsid
      const scripts = $('.entry-content').find('script')
      for (let i = 0; i < scripts.length; i++) {
        const script = $(scripts[i]).html();
        if (script.substr(0, 15) === 'var hs_showid =') {
          hsid = script.substr(16, script.length).replace(';', '');
          break;
        }
      }
      let data = {
        description: $('.series-desc').find('p').text(),
        image: $('.series-image').find('img').attr('src'),
        hsid,
        title: this.state.title
      }
      this.setState({ show: data })
      this.setState({ isDataLoaded: true })
      this.setState({ allowReload: true })
      this.getEpisodes()
    })
    .catch(err => {
      this.setState({ allowReload: true })
      console.log(err)
    })
  }

  getEpisodes () {
    this.setState({ areEpisodesLoaded: false })
    this.setState({ allowReload: false })
    axios.get('https://horriblesubs.info/api.php?method=getshows&type=show&showid=' + this.state.show.hsid + '&nextid=' + this.state.page)
    .then(res => {
      $ = cheerio.load(res.data)
      const div = $('.link-480p')
      let episodes = this.state.episodes
      for (let i = 0; i < div.length; i++) {
        episodes.push({
          MainText: $(div[i]).attr('id'),
          onPress: () => WebBrowser.openBrowserAsync($(div[i]).find('a').attr('href'))
        })
      }
      this.setState({ page: this.state.page + 1})
      this.setState({ episodes })
      this.setState({ areEpisodesLoaded: true })
      this.setState({ allowReload: true })
    })
    .catch(err => {
      this.setState({ allowReload: true })
      console.log(err)
    })
  }

  render () {
    if (this.state.isDataLoaded)
      return <ShowView
        show={ this.state.show }
        areEpisodesLoaded={ this.state.areEpisodesLoaded }
        episodes={ this.state.episodes }
        onPress={() => this.getEpisodes()} />
    else
      return <ActivityIndicator style={{ alignSelf: 'center', marginTop: 50 }} size="large" color="#B81351" />
  }
}

export default ShowContainer