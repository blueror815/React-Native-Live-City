import React, { Component } from 'react';

import { View, Image, Keyboard } from 'react-native';
import { APP, COLOR } from '../../constants';
import styles from '../accounts/styles';
import AppLogo from '../commons/AppLogo';
import PropTypes from 'prop-types';

const propTypes = {
  background: PropTypes.bool,
  children: PropTypes.node.isRequired,
  containerStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  footerCount: PropTypes.number
};

const defaultProps = {
  background: false,
  footerCount: 0,
  containerStyle: {
    flex: 1
  }
};

class Layout extends Component {
  state = {
    isKeyboardOpen: false,
    keyboardHeight: APP.KEYBOARD_HEIGHT
  };

  componentWillMount() {
    this.keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      this.keyboardDidShow
    );
    this.keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      this.keyboardDidHide
    );
  }

  componentWillUnmount() {
    this.keyboardDidShowListener.remove();
    this.keyboardDidHideListener.remove();
  }

  keyboardDidShow = e => {
    if (this.props.footerCount !== 0) {
      this.setState({
        isKeyboardOpen: true,
        keyboardHeight: e.endCoordinates.height + 15
      });
    }
  };

  keyboardDidHide = () => {
    this.setState({ isKeyboardOpen: false });
  };

  render() {
    const { children, background, logoProps, containerStyle } = this.props;
    const { isKeyboardOpen, keyboardHeight } = this.state;

    return (
      <View
        style={[
          containerStyle,
          isKeyboardOpen
            ? { height: APP.SCREEN_HEIGHT - keyboardHeight, flex: 0 }
            : { flex: 1, marginTop: 64 }
        ]}
      >
        {children}
      </View>
    );
  }
}

Layout.propTypes = propTypes;
Layout.defaultProps = defaultProps;

export default Layout;
