import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text, Image } from 'react-native'
import { RkText, RkCard, RkButton } from 'react-native-ui-kitten';
import styles from './Styles/ProfileCardStyle'

export default class ProfileCard extends Component {
  render () {
    const { attributes: { name, description, avatar_url }} = this.props.barber;

    return (
      <View style={styles.container}>
        <RkCard>
          <View rkCardContent>
            <Image style={styles.avatar} source={{ uri: avatar_url }}></Image>
            <RkText>{name}</RkText>
            <RkText>{description}</RkText>
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
