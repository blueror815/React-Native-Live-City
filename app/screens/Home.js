'use strict';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Home from '../components/home';


function mapStateToProps(state) {
  return {
    form: state.auth.get('form')
  };
}

function mapDispatchToProps(dispatch) {
  return {
    
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
