import React from 'react'
import { ScrollView } from 'react-native'
import ListingView from '../../components/Screens/ListingView'

const renderComponents = shows => {
  let temp = []
  for (let i = 0; i < shows.length; i++) {
    temp.push(<ListingView
      key={ '' + shows[i].weekday + i }
      LargeText={ shows[i].weekday }
      flatlist={ shows[i].schedule }/>)
  }
  return temp
}

const ScheduleView = (props) => (
  <ScrollView>
    { renderComponents(props.shows) }
  </ScrollView>
)

export default ScheduleView
