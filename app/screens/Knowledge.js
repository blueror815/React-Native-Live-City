'use strict';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Knowledge from '../components/knowledge';

function mapStateToProps(state) {
  return {
    form: state.auth.get('form')
  };
}

function mapDispatchToProps(dispatch) {
  return {
    
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Knowledge);
