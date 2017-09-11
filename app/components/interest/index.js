'use strict';

import React, { Component } from 'react';
import { StyleSheet, View, Text, Platform, Image } from 'react-native';
import defaultNavigator from '../../config/navigations/default';
import { iconsMap, iconsLoaded } from '../../utils/AppIcons';
import { COLOR, APP } from '../../constants';
import I18n from '../../utils/I18n';
import Logo from './Logo';
import Pill from './Pill';
import ButtonFooter from '../commons/ButtonFooter';

class Interest extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  onNextState = () => {
    this.props.navigator.resetTo({
      screen: 'livecities.proposal'
    });
  };

  componentDidMount() {
    this.props.navigator.setButtons({
      leftButtons: [
        {
          id: 'logo',
          icon: APP.LOGO
        }
      ]
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Logo />
        <View style={styles.selectContainer}>
          <View style={styles.pillsContainer}>
            <Pill title="Sport" />
            <Pill title="Politic" />
            <Pill title="Education" />
            <Pill title="Travel" />
            <Pill title="Fashion" />
            <Pill title="Trends" />
            <Pill title="Technology" />
            <Pill title="Food" />
            <Pill title="Architecture" />
          </View>
        </View>
        <ButtonFooter
          title={I18n.t('general.next')}
          backgroundColor={COLOR.WHITE}
          textColor={COLOR.BLACK}
          onPress={this.onNextState}
        />
      </View>
    );
  }
}

Interest.navigatorStyle = defaultNavigator;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 64,
    alignItems: 'center'
  },
  selectLabel: {
    textAlign: 'right',
    color: COLOR.WHITE
  },
  pillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center'
  },
  pillSelectedContainer: {
    height: 80,
    backgroundColor: COLOR.DARK_GREEN,
    flexDirection: 'row'
  }
});

export default Interest;
