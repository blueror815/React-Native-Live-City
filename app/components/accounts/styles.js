import { StyleSheet } from 'react-native';
import { APP, COLOR } from '../../constants';

const styles = StyleSheet.create({
  imageContaninerBackground: {
    resizeMode: 'stretch',
    width: APP.SCREEN_WIDTH,
    height: APP.SCREEN_HEIGHT
  },
  imageLogo: {
    resizeMode: 'contain',
    width: 126,
    alignSelf: 'center',
    marginTop: 54
  },
  labelContainer: {
    backgroundColor: COLOR.TRANSPARENT,
    width: APP.SCREEN_WIDTH - 60,
    alignSelf: 'center',
    padding: 15,
    position: 'absolute',
    top: APP.SCREEN_HEIGHT / 3
  },
  headingLabel: {
    fontSize: 24,
    color: COLOR.WHITE,
    textAlign: 'center',
    padding: 15
  },
  subHeadingLabel: {
    fontSize: 16,
    color: COLOR.WHITE,
    textAlign: 'center',
    marginTop: 15
  },
  buttonContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    position: 'absolute',
    bottom: 35,
    backgroundColor: 'transparent'
  }
});
export default styles;
