import { StyleSheet, Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window')

const styles = StyleSheet.create({
  container: {
    width,
    paddingTop: 50,
    height: height - 65,
    display: 'flex',
    backgroundColor: '#191B1F'
  }
})

export default styles
