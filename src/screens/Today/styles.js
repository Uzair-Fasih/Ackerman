import { StyleSheet, Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window')

const styles = StyleSheet.create({
  container: {
    width,
    height: height - 65,
    paddingTop: 50,
    display: 'flex',
    backgroundColor: '#191B1F'
  },
})

export default styles
