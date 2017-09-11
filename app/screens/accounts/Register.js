import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Register from '../../components/accounts/register';
import Reactotron from 'reactotron-react-native';

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

export default connect(mapStateToProps, mapDispatchToProps)(Register);
