import React, { Component } from 'react';

import { View, Image, Keyboard, Platform } from 'react-native';
import { APP, COLOR } from '../../constants';
import styles from './styles';
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
  footerCount: 2,
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
    this.setState({
      isKeyboardOpen: true,
      keyboardHeight: e.endCoordinates.height + (Platform.OS === 'ios' ? 0 : 15)
    });
  };

  keyboardDidHide = () => {
    this.setState({ isKeyboardOpen: false });
  };

  render() {
    const {
      children,
      background,
      logoProps,
      containerStyle,
      footerCount
    } = this.props;

    const { isKeyboardOpen, keyboardHeight } = this.state;
    const marginLogoTop = footerCount >= 2 ? -60 : 0;

    if (background) {
      return (
        <View>
          <Image
            source={APP.BACKGROUND_IMAGE}
            style={styles.imageContaninerBackground}
          >
            <AppLogo {...logoProps} />

            {children}
          </Image>
        </View>
      );
    }
    return (
      <View
        style={[
          containerStyle,
          isKeyboardOpen
            ? { height: APP.SCREEN_HEIGHT - keyboardHeight, flex: 0 }
            : { flex: 1 }
        ]}
      >
        <AppLogo
          {...logoProps}
          containerStyles={[
            (logoProps && logoProps.containerStyles) || {},
            isKeyboardOpen ? { marginTop: marginLogoTop } : {}
          ]}
        />
        {children}
      </View>
    );
  }
}

Layout.propTypes = propTypes;
Layout.defaultProps = defaultProps;

export default Layout;
