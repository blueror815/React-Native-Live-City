'use strict';

import React, { Component } from 'react';
import { StyleSheet, View, Text, Platform, Image } from 'react-native';
import defaultNavigator from '../../config/navigations/default';
import { iconsMap, iconsLoaded } from '../../utils/AppIcons';
import { COLOR, APP } from '../../constants';
import I18n from '../../utils/I18n';

import Header from './Header';
import RowDetail from './RowDetail';
import ButtonFooter from '../commons/ButtonFooter';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      form: props.form
    };
  }

  onNextState = () => {
    this.props.navigator.resetTo({
      screen: 'livecities.knowledge'
    });
  };

  componentDidMount() {
    this.props.navigator.setButtons({
      rightButtons: [
        {
          id: 'more',
          icon: iconsMap['md-more']
        }
      ],
      leftButtons: [
        {
          id: 'logo',
          icon: APP.LOGO
        }
      ]
    });
  }

  render() {
    const { form } = this.state;
    return (
      <View style={styles.container}>
        <Header form={form} />
        <RowDetail form={form} />
        <ButtonFooter
          title={I18n.t('account.profit.begin')}
          backgroundColor={COLOR.WHITE}
          textColor={COLOR.BLACK}
          onPress={this.onNextState}
        />
      </View>
    );
  }
}

Home.navigatorStyle = defaultNavigator;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 64
  }
});

export default Home;
