'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, TextInput } from 'react-native';
import { COLOR } from '../../constants';

const propsTypes = {
  onChange: PropTypes.func.isRequired,
  onSubmitEditing: PropTypes.func,
  placeholder: PropTypes.string,
  maxLength: PropTypes.number,
  secureTextEntry: PropTypes.bool,
  onFocus: PropTypes.func,
  onEndEditing: PropTypes.func,
  autoFocus: PropTypes.bool
};

const defaultProps = {
  placeholder: '',
  maxLength: 40,
  secureTextEntry: false,
  autoFocus: false,
  onSubmitEditing: () => {},
  onFocus: () => {},
  onEndEditing: () => {}
};

const Form = ({
  onChange,
  placeholder,
  maxLength,
  onSubmitEditing,
  secureTextEntry,
  onFocus,
  onEndEditing,
  autoFocus
}) => {
  return (
    <View style={{ paddingLeft: 30, paddingRight: 30, marginTop: 30 }}>
      <TextInput
        style={{
          height: 73,
          fontSize: 24,
          color: COLOR.WHITE,
          fontWeight: '300'
        }}
        underlineColorAndroid={COLOR.TRANSPARENT}
        autoFocus={autoFocus}
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        placeholderTextColor={'rgba(255, 255, 255, 0.78)'}
        returnKeyType={'done'}
        selectionColor={COLOR.WHITE}
        selectTextOnFocus={true}
        onChangeText={text => onChange(text)}
        maxLength={maxLength}
        clearButtonMode={'always'}
        onSubmitEditing={onSubmitEditing}
        onFocus={onFocus}
        onEndEditing={onEndEditing}
      />
    </View>
  );
};

Form.propsTypes = propsTypes;
Form.defaultProps = defaultProps;

export default Form;
