import React, { Component } from 'react'
import { ScrollView, Text } from 'react-native'
import { connect } from 'react-redux'
import ProfileCard from "../Components/ProfileCard";

// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/ProfilesScreenStyle'

class ProfilesScreen extends Component {
  // constructor (props) {
  //   super(props)
  //   this.state = {}
  // }

  onPrefilePressed = () => {
    this.props.navigation.navigate("BookingListScreen")
  };

  render () {
    return (
      <ScrollView style={styles.container}>
        <ProfileCard onPressed={this.onPrefilePressed}></ProfileCard>
        <ProfileCard onPressed={this.onPrefilePressed}></ProfileCard>
      </ScrollView>
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

export default connect(mapStateToProps, mapDispatchToProps)(ProfilesScreen)
