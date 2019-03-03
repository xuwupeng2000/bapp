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
          <View rkCardContent>
            <RkText>Name</RkText>
            <RkText>Descripiton</RkText>
          </View>
          <View rkCardFooter>
            <RkButton style={styles.fullWidthButton} onPress={this.props.onPressed}>
              Make an appointment
            </RkButton>
          </View>
        </RkCard>
      </View>
    )
  }
}
