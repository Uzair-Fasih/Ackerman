import React from 'react'
import ListingView from '../../components/Screens/ListingView'

const LatestView = (props) => (
  <ListingView
    LargeText='Latest Releases'
    flatlist={ props.shows }/>
)

export default LatestView
