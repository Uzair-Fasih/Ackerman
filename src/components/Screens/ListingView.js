import React from 'react'
import { View, Text, FlatList, StyleSheet, Dimensions } from 'react-native'
import ShowListing from '../Widgets/ShowListing'
import FadeInView from '../Animated/FadeInView'

const { width } = Dimensions.get('window')
const styles = StyleSheet.create({
  container: {
    width,
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: '#191B1F',
    padding: 20,
    marginBottom: 20
  },
  LargeText: {
    color: '#FFF',
    fontFamily: 'bold',
    fontSize: 25,
    marginBottom: 20
  }
})

const ListingView = (props) => (
  <FadeInView>
    <View style={ styles.container }>
      <Text style={ styles.LargeText }>{ props.LargeText }</Text>
      <FlatList
        data={ props.flatlist }
        keyExtractor={(item) => item.MainText}
        renderItem={({item}) => <ShowListing MainText={ item.MainText } SubText={ item.SubText } index={ item.index } onPress={ item.onPress }/> }/>
    </View>
  </FadeInView>
)

export default ListingView
