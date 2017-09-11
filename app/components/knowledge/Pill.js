'use strict';

import React, { Component } from 'react';
import { COLOR } from '../../constants';

import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity
} from 'react-native';

class Pill extends Component {
  render() {
    const { title, addKnowledge, item } = this.props;
    return (
      <View style={styles.pillWrapper}>
        <TouchableOpacity
          onPress={() => addKnowledge(item)}
        >
          <Text style={styles.selectLabel}>{title}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  pillWrapper: {
    alignItems: 'center',
    minWidth: 80,
    padding: 8,
    borderRadius: 22,
    borderWidth: 0.5,
    borderColor: COLOR.WHITE,
    margin: 6
  },
  selectLabel: {
    textAlign: 'right',
    color: COLOR.WHITE
  }
});


export default Pill;