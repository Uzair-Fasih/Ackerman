import React from 'react'
import { StyleSheet, View, Text, TouchableHighlight } from 'react-native'
import MinimalButton from './MinimalButton'

const styles = StyleSheet.create({
  ShowListing: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
    borderRadius: 5,
    padding: 5,
    paddingLeft: 15,
    backgroundColor: '#222327'
  },
  TextContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    flexGrow: 1,
    padding: 10,
    alignSelf: 'center'
  },
  MainText: {
    color: '#FFF',
    fontFamily: 'bold',
    fontSize: 16
  },
  SubText: {
    color: '#6F6F6F',
    fontFamily: 'light',
    fontSize: 13
  },
  index:  {
    color: '#6F6F6F',
    fontFamily: 'light',
    alignSelf: 'center',
    fontSize: 25,
    marginRight: 10
  }
})

const getDecoratedIndex = (index) => {
  if (('' + index).length === 1) {
    return '0' + index
  }
  return index
}

const ShowListing = props => (
  <TouchableHighlight onPress={ props.onPress }>
    <View style={ styles.ShowListing }>
      <Text style={ styles.index }>{ getDecoratedIndex(props.index) }</Text>
      <View style={ styles.TextContainer }>
        <Text style={ styles.MainText }>{ props.MainText }</Text>
        {
          (props.SubText) &&
          <Text style={ styles.SubText }>{ props.SubText }</Text>
        }
      </View>
      <MinimalButton iconName='ios-arrow-forward' color='#6F6F6F' styles={{ height: 30, width: 35, alignSelf: 'center' }}/>
    </View>
  </TouchableHighlight>
)

export default ShowListing
