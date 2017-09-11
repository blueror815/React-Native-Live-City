import { Platform } from 'react-native';
import { COLOR } from '../../constants';

const styles = {
  statusBarTextColorScheme: 'light',
  screenBackgroundColor: COLOR.GREEN,
  statusBarColor: COLOR.GREEN,
  tabBarHidden: true,
  navBarButtonColor: COLOR.WHITE,
  navBarTextColor: COLOR.WHITE,
  navBarNoBorder: true,
  navigatorStyle: {
    navBarHidden: false
  },
  navBarBackgroundColor: COLOR.GREEN,
  ...Platform.select({
    android: {
      navBarTransparent: true
    }
  })
};

export default styles;
