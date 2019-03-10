import { StyleSheet } from 'react-native'
import { Colors, Metrics } from '../../Themes/'

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    marginTop: Metrics.navBarHeight
  },
  loginButtonWrapper: {
    flex: 1,
  },
  fullWidthButton: {
    width: "100%",
    marginTop: 5,
    marginBottom: 5,
  },
  h1: {
    fontSize: 24
  }
})
