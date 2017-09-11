/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';
import { registerScreens } from './screens';
import { iconsMap, iconsLoaded } from './utils/AppIcons';
import configureStore from './stores/configureStore';
import hideStatusBar from './config/navigations/hideStatusBar';
import './utils/ReactotronConfig';

const store = configureStore();

registerScreens(store, Provider);

class App extends Component {
  constructor(props) {
    super(props);

    iconsLoaded.then(() => {
      this.startSingleApp();
    });
  }

  startSingleApp() {
    Navigation.startSingleScreenApp({
      screen: {
        screen: 'livecities.account.index',
        navigatorStyle: hideStatusBar
      }
    });
  }
}

export default App;
