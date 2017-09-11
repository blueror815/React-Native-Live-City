'use strict';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Step2 from '../../components/accounts/register/Step2';

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

export default connect(mapStateToProps, mapDispatchToProps)(Step2);
