import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text } from 'react-native'
import { RkText, RkCard, RkButton } from 'react-native-ui-kitten';
import styles from './Styles/ProfileCardStyle'

export default class ProfileCard extends Component {
  // // Prop type warnings
  // static propTypes = {
  //   someProperty: PropTypes.object,
  //   someSetting: PropTypes.bool.isRequired,
  // }
  //
  // // Defaults for props
  // static defaultProps = {
  //   someSetting: false
  // }

  render () {
    return (
      <View style={styles.container}>
        <RkCard>
          <RkText>Name</RkText>
          <RkText>Descripiton</RkText>
          <RkButton onPress={this.props.onPressed}>
            Book
          </RkButton>
        </RkCard>
      </View>
    )
  }
}
