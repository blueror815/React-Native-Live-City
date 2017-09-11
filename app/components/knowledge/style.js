import { StyleSheet } from 'react-native';
import { COLOR } from '../../constants';

const styles = StyleSheet.create({
  selectContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    padding: 12
  },
  selectLabel: {
    textAlign: 'right',
    color: COLOR.WHITE
  },
  pillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center'
  },
  pillSelectedContainer: {
    height: 80,
    backgroundColor: COLOR.DARK_GREEN,
    flexDirection: 'row'
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginLeft: 12,
    marginRight: 12
  },
  buttonContainer: {
    backgroundColor: COLOR.WHITE,
    alignItems: 'center',
    justifyContent: 'center',
    width: 80,
  },
  ok: {
    fontSize: 18,
    color: COLOR.BLACK
  }
});

export default styles;
