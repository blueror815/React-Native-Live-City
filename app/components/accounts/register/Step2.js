'use strict';

import React, { Component } from 'react';
import { Platform } from 'react-native';
import Reactotron from 'reactotron-react-native';
import hideStatusBar from '../../../config/navigations/hideStatusBar';
import { COLOR } from '../../../constants';
import I18n from '../../../utils/I18n';
import isValidPassword from '../../../utils/isValidPassword';

// Component
import Layout from '../Layout';
import Password from '../Password';
import ButtonFooter from '../../commons/ButtonFooter';
import Form from '../Form';

class Step2 extends Component {
  onNextState = () => {
    const { form, navigator } = this.props;
    if (isValidPassword(form.get('password'))) {
      navigator.push({
        screen: 'livecities.account.register.step3',
        backButtonTitle: ''
      });
    } else {
      alert(I18n.t('alert.invalidPassword'));
    }
  };

  render() {
    const { navigator, actions, form } = this.props;
    return (
      <Layout containerStyle={{ marginTop: -64 }}>
        <Form
          placeholder="Define tu contraseña"
          maxLength={16}
          secureTextEntry
          onChange={value => actions.onChangeAuthField('password', value)}
        />
        <Password />
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

Step2.navigatorStyle = {
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

export default Step2;
