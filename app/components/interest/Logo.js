'use strict';

import React, { Component } from 'react';
import { COLOR, APP } from '../../constants';

import { StyleSheet, View, Image, Text } from 'react-native';

class Logo extends Component {
  render() {
    return (
      <View style={styles.headerContainer}>
        <Image style={styles.logo} source={APP.RECKET_ICON} />
        <Text style={styles.title}>
          Personaliza tu experiencia, escoge tus intereses:
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headerContainer: {
    alignItems: 'center',
    marginBottom: 12
  },
  logo: {
    width: 50,
    height: 50,
    marginBottom: 12
  },
  title: {
    color: COLOR.WHITE,
    fontSize: 18,
    textAlign: 'center'
  }
});

export default Logo;
