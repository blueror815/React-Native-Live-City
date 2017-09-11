'use strict';

import React, { Component } from 'react';
import { Platform } from 'react-native';
import Reactotron from 'reactotron-react-native';
import hideStatusBar from '../../../config/navigations/hideStatusBar';
import { COLOR } from '../../../constants';
import I18n from '../../../utils/I18n';
import isValidEmail from '../../../utils/isValidEmail';

// Component
import Layout from '../Layout';
import ButtonSocial from '../ButtonSocial';
import ButtonFooter from '../../commons/ButtonFooter';
import Form from '../Form';

class Step1 extends Component {
  onNextState = () => {
    const { navigator } = this.props;

    navigator.resetTo({
      screen: 'livecities.home'
    });
  };

  render() {
    const { navigator, actions, form } = this.props;
    return (
      <Layout containerStyle={{ marginTop: -64 }} footerCount={1}>
        <Form
          placeholder={I18n.t('general.definePassword')}
          maxLength={16}
          secureTextEntry
          autoFocus
          onChange={value =>
            actions.onChangeAuthField('password', value.toLowerCase())}
        />

        <ButtonFooter
          title={I18n.t('general.next')}
          backgroundColor={COLOR.WHITE}
          textColor={COLOR.BLACK}
          onPress={this.onNextState}
        />
      </Layout>
    );
  }
}

Step1.navigatorStyle = {
  statusBarColor: COLOR.LIGHT_BLUE,
  tabBarHidden: true,
  screenBackgroundColor: COLOR.LIGHT_BLUE,
  navBarButtonColor: '#fff',
  navBarTextColor: '#fff',
  navBarNoBorder: true,
  navBarBackgroundColor: COLOR.LIGHT_BLUE,
  ...Platform.select({
    android: {
      navBarTransparent: true
    }
  })
};

export default Step1;
