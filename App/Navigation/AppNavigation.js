import { createStackNavigator, createAppContainer } from 'react-navigation'
import ProfilesScreen from '../Containers/ProfilesScreen'
import BookingListScreen from '../Containers/BookingListScreen'
import LoginScreen from '../Containers/LoginScreen'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = createStackNavigator({
  LoginScreen: { screen: LoginScreen },
  ProfilesScreen: {
    screen: ProfilesScreen,
    navigationOptions: {
      header: null,
    }
  },
  BookingListScreen: {
    screen: BookingListScreen,
  }
}, {
  // Default config for all screens
  initialRouteName: 'LoginScreen',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default createAppContainer(PrimaryNav)
