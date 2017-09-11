'use strict';

import React, { Component } from 'react';

import { StyleSheet, View, Text, Image } from 'react-native';

import { Divider }  from  'react-native-elements';
import { Icon } from 'react-native-elements';
import { APP, COLOR } from '../../constants';
import I18n from '../../utils/I18n';

class Photo extends Component {
  render() {
    const { form } = this.props;
    return (
      <View style={[styles.subContainer, styles.detailsContainer]}>
        <View style={styles.rowContainer}>
          <Text style={[styles.label, styles.labelLeft]}>
            Nombre
          </Text>
          <Text style={[styles.label, styles.labelRight]}>
            {form.get('name')}
          </Text>
        </View>
        <Divider style={styles.divider} />
        <View style={styles.rowContainer}>
          <Text style={[styles.label, styles.labelLeft]}>
            Correo
          </Text>
          <Text style={[styles.label, styles.labelRight]}>
            {form.get('email')}
          </Text>
        </View>
        <Divider style={styles.divider} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  subContainer: {
    margin: 12
  },
  detailsContainer: {
    marginRight: 0,
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  label: {
    color: COLOR.WHITE,
    fontSize: 16,
  },
  labelLeft: {
    flex: .6
  },
  labelRight: {
    flex: 1
  },
  divider: {
    backgroundColor: COLOR.BLUE_BOLD,
    marginTop: 8,
    marginBottom: 12
  }
});

export default Photo;
