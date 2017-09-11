'use strict';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Step1 from '../../components/accounts/register/Step1';

import { onChangeAuthField } from '../../actions/auth';

function mapStateToProps(state) {
  return {
    form: state.auth.get('form')
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ onChangeAuthField }, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Step1);
