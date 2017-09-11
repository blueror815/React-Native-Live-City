import Reactotron from 'reactotron-react-native';
import { List, Map, Record, Sequence, fromJS } from 'immutable';
import { createReducer } from '../utils/createReducer';
import { types } from '../constants/auth';

const Form = Record({
  isFetching: false,
  form: fromJS({ email: '', password: '', name: '', avartar: {} })
});

let initialState = new Form();

export default createReducer(initialState, {
  [types.ON_CHNAGE_FORM_INPUT]: (state, { field, value }) => {
    return state.setIn(['form', field], value);
  }
});
