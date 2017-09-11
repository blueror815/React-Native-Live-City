'use strict';

import React, { Component } from 'react';
import { COLOR, APP } from '../../constants';

import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableHighlight
} from 'react-native';

class Pill extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isSeleted: false
    };
  }

  handleSeletedState() {
    this.setState({ isSeleted: !this.state.isSeleted });
  }

  render() {
    const { title, clear } = this.props;
    const { isSeleted } = this.state;
    return (
      <View style={styles.pillWrapper}>
        <Text style={styles.selectLabel}>
          {title}
        </Text>
        <TouchableHighlight
          underlayColor="transparent"
          onPress={() => this.handleSeletedState()}
        >
          {isSeleted
            ? <Image style={styles.icon} source={APP.ICON_ADD} />
            : <Image style={styles.icon} source={APP.ICON_ADD_GRAY} />}
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  pillWrapper: {
    alignItems: 'center',
    maxWidth: 180,
    borderRadius: 45,
    borderWidth: 1,
    borderColor: COLOR.WHITE,
    margin: 12,
    flexDirection: 'row',
    paddingLeft: 2,
    paddingRight: 5,
    paddingTop: 5,
    paddingBottom: 5
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
