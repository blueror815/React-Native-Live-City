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
import ButtonPhoto from '../ButtonPhoto';
import ButtonFooter from '../../commons/ButtonFooter';
import Form from '../Form';

class Step3 extends Component {
  onNextState = () => {
    this.props.navigator.resetTo({
      screen: 'livecities.home'
    });
  };

  render() {
    return (
      <Layout containerStyle={{ marginTop: 0 }}>
        <ButtonPhoto 
          {...this.props} 
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

Step3.navigatorStyle = {
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

export default Step3;
