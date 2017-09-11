import { types } from '../constants/auth';

export function onChangeAuthField(field, value) {
  return {
    type: types.ON_CHNAGE_FORM_INPUT,
    field,
    value
  };
}
