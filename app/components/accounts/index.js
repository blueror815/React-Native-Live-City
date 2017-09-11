'use strict';

import React from 'react';
import { View, Image, ScrollView, Text } from 'react-native';
import { Button } from 'react-native-elements';
import PropTypes from 'prop-types';
import { APP, COLOR } from '../../constants';
import I18n from '../../utils/I18n';
import styles from './styles';
import Layout from './Layout';

const propsTypes = {
  navigator: PropTypes.object.isRequired
};

const Account = ({ navigator }) => {
  return (
    <Layout background>
      <View style={styles.labelContainer}>
        <Text style={styles.headingLabel}>
          {I18n.t('account.heading')}
        </Text>

        <Text style={styles.subHeadingLabel}>
          {I18n.t('account.subHeading')}
        </Text>
      </View>

      <View style={styles.buttonContainer}>
        <Button
          onPress={() =>
            navigator.push({ screen: 'livecities.account.register' })}
          title={I18n.t('account.register')}
          borderRadius={34}
          buttonStyle={{
            backgroundColor: COLOR.LIGHT_BLUE,
            width: APP.BUTTON_WIDTH
          }}
          containerViewStyle={{
            backgroundColor: COLOR.LIGHT_BLUE,
            borderRadius: 34
          }}
        />
        <Button
          onPress={() => navigator.push({ screen: 'livecities.account.login' })}
          title={I18n.t('account.loginLabel')}
          backgroundColor={COLOR.TRANSPARENT}
          borderRadius={34}
          buttonStyle={{
            borderWidth: 1,
            borderColor: COLOR.WHITE,
            width: APP.BUTTON_WIDTH
          }}
          containerViewStyle={{
            borderColor: COLOR.WHITE,
            borderRadius: 34
          }}
        />
      </View>
    </Layout>
  );
};

Account.propsTypes = propsTypes;

export default Account;
