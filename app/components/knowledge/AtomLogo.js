'use strict';

import React, { Component } from 'react';
import { COLOR, APP } from '../../constants';

import { StyleSheet, View, Image, Text } from 'react-native';

class AtomLogo extends Component {
  render() {
    return (
      <View style={styles.headerContainer}>
        <Image style={styles.logo} source={APP.ATOM_LOGO} />
        <Text style={styles.title}>Anade tus conocimientos:</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headerContainer: {
    alignItems: 'center'
  },
  logo: {
    width: 50,
    height: 50,
    marginBottom: 12
  },
  title: {
    color: COLOR.WHITE,
    fontSize: 18
  }
});

export default AtomLogo;
