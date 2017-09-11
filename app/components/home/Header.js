'use strict';

import React, { Component } from 'react';

import { StyleSheet, View, Text, Image } from 'react-native';
import { Icon } from 'react-native-elements';
import { APP, COLOR } from '../../constants';
import I18n from '../../utils/I18n';

class Photo extends Component {
  render() {
    const { form } = this.props;
    return (
      <View style={styles.centeringItem}>
        <View style={styles.subContainer}>
          <Text style={styles.welcomeLabel}>
            ¡Bienvenido {form.get('name')}!
          </Text>
        </View>
        <View style={styles.subContainer}>
          <Text style={styles.details}>
            {I18n.t('account.profit.description')}
          </Text>
        </View>
        <View style={[styles.imageContainer, styles.subContainer]}>
          <View style={styles.innerImageContainer}>
            <Image 
              style={styles.image} 
              source={form.get('avatar') != null ? form.get('avatar') : APP.ICON_AVATAR}
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  centeringItem: {
    alignItems: 'center',
  },
  subContainer: {
    margin: 12
  },
  imageContainer: {
    width: 200,
    height: 200,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: COLOR.WHITE,
    alignItems: 'center',
    justifyContent: 'center'
  },
  innerImageContainer: {
    width: 170,
    height: 170,
    borderRadius: 85,
    backgroundColor: COLOR.DARK_GREEN,
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    width: 140,
    height: 140,
    borderRadius: 70
  },
  details: {
    textAlign: 'center',
    color: COLOR.WHITE,
    fontSize: 18
  },
  welcomeLabel: {
    fontSize: 26,
    color: COLOR.WHITE
  },
});

export default Photo;
