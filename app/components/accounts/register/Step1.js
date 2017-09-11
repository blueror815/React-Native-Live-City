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
    const { form, navigator } = this.props;
    if (form.get('name') != '') {
      navigator.push({
        screen: 'livecities.account.register.step2',
        backButtonTitle: ''
      });
    } else {
      alert(I18n.t('alert.blankName'));
    }
  };
  render() {
    const { navigator, actions, form } = this.props;
    return (
      <Layout containerStyle={{ marginTop: -64 }} footerCount={1}>
        <Form
          placeholder="Escribe tu nombre y apellido"
          maxLength={30}
          autoFocus
          onChange={value => actions.onChangeAuthField('name', value)}
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
  statusBarColor: COLOR.DARK_BLUE,
  tabBarHidden: true,
  screenBackgroundColor: COLOR.DARK_BLUE,
  navBarButtonColor: '#fff',
  navBarTextColor: '#fff',
  navBarNoBorder: true,
  navBarBackgroundColor: COLOR.DARK_BLUE,
  ...Platform.select({
    android: {
      navBarTransparent: true
    }
  })
};

export default Step1;
