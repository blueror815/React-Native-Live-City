'use strict';

import React, { Component } from 'react';
import { Keyboard } from 'react-native';
import hideStatusBar from '../../../config/navigations/hideStatusBar';
import { APP, COLOR } from '../../../constants';
import I18n from '../../../utils/I18n';
import isValidEmail from '../../../utils/isValidEmail';

// Component
import Layout from '../Layout';
import ButtonSocial from '../ButtonSocial';
import ButtonFooter from '../../commons/ButtonFooter';
import Form from '../Form';

class Login extends Component {
  state = {
    isFocus: false,
    keyboardHeight: APP.KEYBOARD_HEIGHT
  };

  onNextState = () => {
    const { form, navigator } = this.props;

    if (isValidEmail(form.get('email'))) {
      navigator.push({
        screen: 'livecities.account.login.step1',
        backButtonTitle: ''
      });
    } else {
      alert(I18n.t('alert.invalidEmail'));
    }
  };

  render() {
    const { navigator, actions, form } = this.props;
    const { isFocus } = this.state;
    return (
      <Layout
        logoProps={{
          onPress: () => navigator.pop()
        }}
      >
        <Form
          placeholder="Escribe tu correo"
          maxLength={40}
          autoFocus
          onChange={value =>
            actions.onChangeAuthField('email', value.toLowerCase())}
          onSubmitEditing={() => {
            if (!isValidEmail(form.get('email'))) {
              alert(I18n.t('alert.invalidEmail'));
            }
          }}
          onFocus={() => this.setState({ isFocus: true })}
          onEndEditing={() => this.setState({ isFocus: false })}
        />
        <ButtonSocial />
        <ButtonFooter
          title={I18n.t('general.next')}
          onPress={this.onNextState}
        />
      </Layout>
    );
  }
}

Login.navigatorStyle = {
  ...hideStatusBar,
  screenBackgroundColor: COLOR.DARK_BLUE
};

export default Login;
