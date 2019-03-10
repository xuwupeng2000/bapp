import React, { Component } from 'react'
import { ScrollView, Text, View } from 'react-native'
import { connect } from 'react-redux'
import ProfileCard from "../Components/ProfileCard";

// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/ProfilesScreenStyle'

class ProfilesScreen extends Component {
  onPrefilePressed = () => {
    this.props.navigation.navigate("BookingListScreen")
  };

  render () {
    let list;
    if (this.props.barbers) {
      list = this.props.barbers.map((barber) => {
        return <ProfileCard key={barber.id} barber={barber} onPressed={this.onPrefilePressed}></ProfileCard>
      });
    }

    return (
      <ScrollView style={styles.container}>
        {list}
      </ScrollView>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    barbers: state.barber.data || []
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfilesScreen)
