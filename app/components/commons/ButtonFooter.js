'use strict';

import React, { Component } from 'react';

import { View, Platform } from 'react-native';
import { Button } from 'react-native-elements';
import PropTypes from 'prop-types';
import { APP, COLOR } from '../../constants';

const propTypes = {
  backgroundColor: PropTypes.string,
  buttonStyle: PropTypes.object,
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func
};

const defaultProps = {
  backgroundColor: COLOR.LIGHT_BLUE,
  buttonStyle: {
    width: APP.SCREEN_WIDTH
  },
  textColor: COLOR.WHITE,
  onPress: () => {}
};

const ButtonFooter = ({
  title,
  backgroundColor,
  buttonStyle,
  onPress,
  textColor
}) => {
  return (
    <View
      style={{
        position: 'absolute',
        bottom: 0,
        left: 0
      }}
    >
      <Button
        onPress={onPress}
        title={title}
        backgroundColor={backgroundColor}
        containerViewStyle={{
          backgroundColor: 'yellow',
          width: APP.SCREEN_WIDTH,
          marginLeft: 0
        }}
        buttonStyle={[buttonStyle]}
        color={textColor}
      />
    </View>
  );
};

ButtonFooter.propTypes = propTypes;
ButtonFooter.defaultProps = defaultProps;

export default ButtonFooter;
