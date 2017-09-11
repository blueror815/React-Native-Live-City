import { Dimensions, Platform } from 'react-native';

const { width, height } = Dimensions.get('window');

module.exports = {
  SCREEN_WIDTH: width,
  SCREEN_HEIGHT: height,
  BUTTON_WIDTH: width / 2.5,
  BACKGROUND_IMAGE: require('../images/img_background.png'),
  ICON_LOGO: require('../images/ic_logo.png'),
  IOS_ICON_LOGO: require('../images/logo.png'),
  RECKET_ICON: require('../images/ic_rocket.png'),
  ICON_ADD: require('../images/ic_added.png'),
  ICON_AVATAR: require('../images/ic_avatar.png'),
  ICON_ADD_GRAY: require('../images/ic_add_gray.png'),
  ICON_DOT_GRAY: require('../images/ic_dot_gray.png'),
  ICON_DOT_GREEN: require('../images/ic_dot_green.png'),
  ATOM_LOGO: require('../images/ic_atom.png'),
  ICON_FAVORITE: require('../images/ic_favorite.png'),
  ICON_PEOPLE: require('../images/ic_people.png'),
  ICON_FAVORITE_2: require('../images/ic_favorite_2.png'),
  IMAGE_1: require('../images/image_1.png'),
  IMAGE_2: require('../images/image_2.png'),
  IMAGE_3: require('../images/image_3.png'),
  LOGO:
    Platform.OS === 'ios'
      ? require('../images/logo.png')
      : require('../images/ic_icon.png'),
  ICON_FAVORITE_SELECTED: require('../images/ic_favorite_select.png'),
  DEFAULT_FONT_SIZE: 16,
  KEYBOARD_HEIGHT: 216
};
