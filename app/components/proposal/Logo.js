'use strict';

import React, { Component } from 'react';
import { 
  StyleSheet, 
  View, 
  Image, 
  Text 
} from 'react-native';
import { COLOR, APP } from '../../constants';


class Logo extends Component {
  render() {
    return (
      <View style={styles.headerContainer}>
        <Image style={styles.logo} source={APP.RECKET_ICON} />
        <Text style={styles.title}>
          Puedes empezar siguiendo a estos retos y propuestas.
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
