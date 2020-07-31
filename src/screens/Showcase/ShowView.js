import React from 'react'
import { View, ImageBackground, Text, TouchableHighlight, ActivityIndicator, ScrollView } from 'react-native'
import ListingView from '../../components/Screens/ListingView'
import styles from './styles' 

const Show = (props) => (
  <View style={ styles.container }>
    <ImageBackground
      style={ styles.avatar }  
      source={{ uri: props.show.image }}>
      <View style={ styles.imageContainer }>
        <View style={ styles.MainTextContainer }>
          <Text style={ styles.MainText }>{ props.show.title }</Text>
        </View>
      </View>
    </ImageBackground>
    <ScrollView>
      <View style={ styles.descriptionContainer }>
        <Text style={ styles.LargeText }>Description</Text>
        <Text style={ styles.description }>{ props.show.description }</Text>
      </View>
      {
        (!props.areEpisodesLoaded) &&
        <ActivityIndicator size="small" color="#B81351" />
      }
      {
        (props.areEpisodesLoaded) &&
        <ListingView
          LargeText='Episodes'
          flatlist={ props.episodes }
        />
      }
      <TouchableHighlight style={ styles.button } onPress={ props.onPress }>
        <Text style={ styles.buttonText }>Load More</Text>
      </TouchableHighlight>    
    </ScrollView>
  </View>
)

export default Show