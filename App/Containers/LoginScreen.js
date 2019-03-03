import React, { Component } from 'react'
import { View, ScrollView, Text } from 'react-native'
import { connect } from 'react-redux'
import { RkText, RkTextInput, RkButton, RkCard } from 'react-native-ui-kitten';
import Icon from 'react-native-vector-icons/Ionicons';
import {styles as s} from "react-native-style-tachyons";

// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/LoginScreenStyle'

class LoginScreen extends Component {
  // constructor (props) {
  //   super(props)
  //   this.state = {}
  // }

  render () {
    return (
      <RkCard style={styles.container}>
        <View rkCardHeader>
          <RkText style={styles.h1}>LoginScreen Container</RkText>
        </View>
        <RkTextInput rkType='rounded' placeholder='Email'/>
        <RkTextInput rkType='rounded' placeholder='Password' secureTextEntry/>
        <View style={styles.loginButtonWrapper}>
          <RkButton onPress={() => this.props.navigation.navigate("ProfilesScreen")} style={styles.fullWidthButton}>Login</RkButton>
        </View>
      </RkCard>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen)
