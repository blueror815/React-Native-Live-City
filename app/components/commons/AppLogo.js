'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Image, TouchableOpacity } from 'react-native';
import { APP, COLOR } from '../../constants';

const propTypes = {
  imageStyle: PropTypes.object,
  containerStyles: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  onPress: PropTypes.func
};

const defaultProps = {
  imageStyle: {},
  containerStyles: {}
};

const AppLogo = ({ imageStyle, onPress, containerStyles }) =>
  <TouchableOpacity onPress={onPress} style={containerStyles}>
    <Image source={APP.ICON_LOGO} style={[styles.imageLogo, imageStyle]} />
  </TouchableOpacity>;

AppLogo.propTypes = propTypes;
AppLogo.defaultProps = defaultProps;

const styles = StyleSheet.create({
  imageLogo: {
    resizeMode: 'contain',
    width: 126,
    alignSelf: 'center',
    marginTop: 54
  }
});

export default AppLogo;
