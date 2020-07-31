import React from 'react'
import ListingView from '../../components/Screens/ListingView'

const TodayView = (props) => (
  <ListingView
    LargeText="Today's Schedule"
    DividerText='Saturday, 20th January'
    flatlist={ props.shows }
  />
)

export default TodayView
