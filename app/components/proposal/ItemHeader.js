'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Image,
  Text
} from 'react-native';
import { COLOR, APP } from '../../constants';

class ItemHeader extends Component {
  render() {
    return (
      <View style={styles.headerContainer}>
        <Image
          style={styles.dotGreen} 
          source={APP.ICON_DOT_GREEN}
        />
        <Text style={styles.label}>EQUIPAMIENTO</Text>
        <Image
          style={styles.dotGray} 
          source={APP.ICON_DOT_GRAY}
        />
        <Text style={styles.label}>LIBRE</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  dotGreen: {
    width: 8,
    height: 8,
  },
  dotGray: {
    width: 5,
    height: 5,
    marginLeft: 8,
    marginRight: 8
  },
  label: {
    color: COLOR.GRAY,
    fontSize: 12,
    marginLeft: 4,
  },
});


export default ItemHeader;