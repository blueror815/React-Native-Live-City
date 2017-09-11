'use strict';

import React, { Component } from 'react';

import { StyleSheet, View, Text } from 'react-native';
import { Button, SocialIcon } from 'react-native-elements';
import { APP, COLOR } from '../../constants';
import I18n from '../../utils/I18n';

class ButtonSocial extends Component {
  render() {
    return (
      <View style={[styles.buttonContainer, { bottom: 60 }]}>
        <Text
          style={{
            color: COLOR.WHITE,
            fontSize: APP.DEFAULT_FONT_SIZE,
            textAlign: 'center'
          }}
        >
          {I18n.t('buttonFooter.loginWithSocial')}
        </Text>
        <View style={styles.buttonGroup}>
          <SocialIcon
            light
            type="facebook"
            button
            style={{ width: APP.BUTTON_WIDTH }}
          />
          <SocialIcon
            light
            type="twitter"
            button
            style={{ width: APP.BUTTON_WIDTH }}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonContainer: {
    alignSelf: 'center',
    position: 'absolute',
    bottom: 35
  },
  buttonGroup: {
    flexDirection: 'row',
    paddingTop: 15
  }
});

export default ButtonSocial;
