/* eslint-disable import/prefer-default-export */
import { Navigation } from 'react-native-navigation';

import Account from './screens/accounts';
import Login from './screens/accounts/Login';
import LoginStep1 from './screens/accounts/LoginStep1';
import RegisterStep1 from './screens/accounts/RegisterStep1';
import RegisterStep2 from './screens/accounts/RegisterStep2';
import RegisterStep3 from './screens/accounts/RegisterStep3';
import Register from './screens/accounts/Register';

import Knowledge  from './screens/Knowledge';
import Interest   from './screens/Interest';
import Proposal   from  './screens/Proposal';

import Home from './screens/Home';

export function registerScreens(store, Provider) {
  Navigation.registerComponent(
    'livecities.account.index',
    () => Account,
    store,
    Provider
  );
  Navigation.registerComponent(
    'livecities.account.login',
    () => Login,
    store,
    Provider
  );
  Navigation.registerComponent(
    'livecities.account.login.step1',
    () => LoginStep1,
    store,
    Provider
  );

  Navigation.registerComponent(
    'livecities.account.register',
    () => Register,
    store,
    Provider
  );

  Navigation.registerComponent(
    'livecities.account.register.step1',
    () => RegisterStep1,
    store,
    Provider
  );
  Navigation.registerComponent(
    'livecities.account.register.step2',
    () => RegisterStep2,
    store,
    Provider
  );
  Navigation.registerComponent(
    'livecities.account.register.step3',
    () => RegisterStep3,
    store,
    Provider
  );

  Navigation.registerComponent('livecities.home', () => Home, store, Provider);

  Navigation.registerComponent(
    'livecities.knowledge',
    () => Knowledge,
    store,
    Provider
  );

  Navigation.registerComponent(
    'livecities.interest',
    () => Interest,
    store,
    Provider
  );

  Navigation.registerComponent(
    'livecities.proposal',
    () => Proposal,
    store,
    Provider
  );
}
