import { StyleSheet, Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window')

const styles = StyleSheet.create({
  container: {
    width,
    height: height - 65,
    paddingTop: 50,
    display: 'flex',
    backgroundColor: '#191B1F',
    padding: 20
  },
  LargeText: {
    fontFamily: 'bold',
    fontSize: 25,
    color: '#FFF'
  },
  optionsContainer: {
    display: 'flex',
    marginTop: 20
  },
  option: {
    display: 'flex',
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: '#CCC',
  },
  optionName: {
    color: '#FFF',
    fontFamily: 'light',
    fontSize: 20,
    alignSelf: 'center'
  },
  optionValue: {
    color: '#B81351',
    fontFamily: 'light',
    fontSize: 15,
    padding: 10,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#B81351',
    borderRadius: 20,
    alignSelf: 'center'
  }
})

export default styles
