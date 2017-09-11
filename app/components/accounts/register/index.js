'use strict';

import React, { Component } from 'react';

import hideStatusBar from '../../../config/navigations/hideStatusBar';
import { COLOR } from '../../../constants';
import accountStyles from '../styles';
import I18n from '../../../utils/I18n';
import isValidEmail from '../../../utils/isValidEmail';

// Component
import Layout from '../Layout';
import ButtonSocial from '../ButtonSocial';
import ButtonFooter from '../../commons/ButtonFooter';
import Form from '../Form';

class Register extends Component {
  onNextState = () => {
    const { form, navigator } = this.props;

    if (isValidEmail(form.get('email'))) {
      navigator.push({
        screen: 'livecities.account.register.step1',
        backButtonTitle: ''
      });
    } else {
      alert(I18n.t('alert.invalidEmail'));
    }
  };
  render() {
    const { navigator, actions } = this.props;
    return (
      <Layout logoProps={{ onPress: () => navigator.pop() }}>
        <Form
          placeholder="Escribe tu correo"
          autoFocus
          onChange={value =>
            actions.onChangeAuthField('email', value.toLowerCase())}
        />
        <ButtonSocial />
        <ButtonFooter
          title={I18n.t('account.login.button.submit')}
          onPress={this.onNextState}
        />
      </Layout>
    );
  }
}

Register.navigatorStyle = {
  ...hideStatusBar,
  screenBackgroundColor: COLOR.DARK_BLUE
};

export default Register;
