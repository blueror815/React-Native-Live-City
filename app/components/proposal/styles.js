import { StyleSheet } from 'react-native';
import { COLOR, APP } from '../../constants';

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    padding: 12,
    borderBottomWidth: 0.7
  },
  contentContainer: {
    flex: 1,
    margin: 3,
    marginLeft: 12
  },
  rowContainer: {
    flexDirection: 'row',
    marginTop: 12,
    alignItems: 'flex-end'
  },
  footerContainer: {
    flex: 1,
    alignItems: 'flex-end',
    flexDirection: 'row'
  },
  favoriteContainer: {
    justifyContent: 'flex-end'
  },
  percentages: {
    flex: 1,
    marginLeft: 5,
    marginRight: 25,
    height: 25
  },
  people: {
    width: 25,
    height: 25,
    marginRight: 8
  },
  photo: {
    width: 120,
    height: 120
  },
  favorite: {
    width: 34,
    height: 34
  },
  title: {
    fontWeight: '500'
  },
  label: {
    color: COLOR.GREEN,
    textAlign: 'center',
    fontSize: 12
  },
  city: {
    color: COLOR.DARK_BLUE_900,
    marginLeft: 6,
    fontSize: 13
  },
  overlay: {
    backgroundColor: COLOR.LIGHT_BLUE_200,
    height: 145,
    flex: 1,
    position: 'absolute',
    width: APP.SCREEN_WIDTH,
    opacity: 0.9,
    justifyContent: 'center',
    alignItems: 'center'
  },
  overlayText: {
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    textAlign: 'center',
    alignSelf: 'center',
  }
});

export default styles;
