'use strict';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Login from '../../components/accounts/login/Step1';

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

export default connect(mapStateToProps, mapDispatchToProps)(Login);
