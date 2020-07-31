import { StyleSheet, Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window')
const styles = StyleSheet.create({
  container: {
    width,
    height,
    display: 'flex',
    backgroundColor: '#191B1F'
  },
  avatar: {
    width,
    height: (height) * (1 / 3),
    alignSelf: 'center',
    borderRadius: 10
  },
  imageContainer: {
    width,
    height: (height) * (1 / 3),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end'
  },
  MainTextContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 20,
    width
  },
  MainText: {
    color: '#FFF',
    fontFamily: 'bold',
    fontSize: 35
  },
  LargeText: {
    color: '#FFF',
    fontFamily: 'bold',
    fontSize: 25,
    marginBottom: 20
  },
  descriptionContainer: {
    padding: 20
  },
  description: {
    color: '#FFF',
    fontFamily: 'light',
    fontSize: 16
  },
  button: {
    margin: 20,
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#4630eb'
  },
  buttonText: {
    color: '#FFF',
    alignSelf: 'center',
    fontFamily: 'light',
    fontSize: 15
  }
})

export default styles