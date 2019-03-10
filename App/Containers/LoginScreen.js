import React, { Component } from 'react'
import { View, ScrollView, Text } from 'react-native'
import { connect } from 'react-redux'
import { RkText, RkTextInput, RkButton, RkCard } from 'react-native-ui-kitten';
import Icon from 'react-native-vector-icons/Ionicons';
import {styles as s} from "react-native-style-tachyons";
import LoginActions from "../Redux/LoginRedux";

// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/LoginScreenStyle'

class LoginScreen extends Component {
  state = { email: 'jwu@bapp.com', password: 'passpass' }

  onChange (e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  render () {
    return (
      <RkCard style={styles.container}>
        <View rkCardHeader>
          <RkText style={styles.h1}>LoginScreen Container</RkText>
        </View>
        <RkTextInput
          onChange={(e) => this.onChange(e)}
          value={this.state.email}
          rkType='rounded'
          placeholder='Email'/>
        <RkTextInput
          onChange={(e) => this.onChange(e)}
          value={this.state.password}
          rkType='rounded'
          placeholder='Password' secureTextEntry/>

        <View style={styles.loginButtonWrapper}>
          <RkButton
            onPress={() => this.props.loginRequest(this.state)}
            style={styles.fullWidthButton}>
            Login
          </RkButton>

          <RkButton
            onPress={() => this.props.loginAsGuest()}
            style={styles.fullWidthButton}>
            Continue as Guest
          </RkButton>
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
    loginRequest: (data) => dispatch(LoginActions.loginRequest(data)),
    loginAsGuest: (data) => dispatch(LoginActions.loginAsGuest())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen)
