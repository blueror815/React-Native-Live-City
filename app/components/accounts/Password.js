'use strict';

import React, { Component } from 'react';

import { StyleSheet, View, Text } from 'react-native';
import { Button, SocialIcon } from 'react-native-elements';
import { APP, COLOR } from '../../constants';
import I18n from '../../utils/I18n';

class Password extends Component {
  render() {
    return (
      <View style={[styles.passwordTextContainer, { bottom: 60 }]}>
        <Text
          style={{
            color: COLOR.WHITE,
            fontSize: APP.DEFAULT_FONT_SIZE,
            textAlign: 'center'
          }}
        >
          {I18n.t('footer.password')}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  passwordTextContainer: {
    alignSelf: 'center',
    position: 'absolute',
    bottom: 35
  }
});

export default Password;
