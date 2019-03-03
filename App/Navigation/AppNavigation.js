import { createStackNavigator, createAppContainer } from 'react-navigation'
import ProfilesScreen from '../Containers/ProfilesScreen'
import BookingListScreen from '../Containers/BookingListScreen'
import LoginScreen from '../Containers/LoginScreen'
import LaunchScreen from '../Containers/LaunchScreen'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = createStackNavigator({
  ProfilesScreen: { screen: ProfilesScreen },
  BookingListScreen: { screen: BookingListScreen },
  LoginScreen: { screen: LoginScreen },
  LaunchScreen: { screen: LaunchScreen }
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'LaunchScreen',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default createAppContainer(PrimaryNav)
