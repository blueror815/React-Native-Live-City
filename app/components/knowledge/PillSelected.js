'use strict';

import React, { Component } from 'react';
import { COLOR } from '../../constants';

import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';

class Pill extends Component {
  render() {
    const { title, item, removeKnowledge } = this.props;
    return (
      <View style={styles.pillWrapper}>
        <Text style={styles.selectLabel} numberOfLines={1}>
          {title}
        </Text>
        <TouchableOpacity onPress={() => removeKnowledge(item)}>
          <Image
            style={styles.icon}
            source={require('../../images/ic_remove.png')}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  pillWrapper: {
    alignItems: 'center',
    maxWidth: 140,
    borderRadius: 22,
    borderWidth: 1,
    borderColor: COLOR.WHITE,
    margin: 12,
    flexDirection: 'row',
    paddingLeft: 5,
    paddingRight: 5
  },
  selectLabel: {
    fontSize: 16,
    textAlign: 'center',
    color: COLOR.WHITE,
    flex: 1
  },
  icon: {
    width: 30,
    height: 30
  }
});

export default Pill;
