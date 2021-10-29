import { connect } from 'react-redux';
import { login, resetSessionErrors } from '../../actions/session_actions';
import LoginForm from './LoginForm';

const mSTP = (state) => ({
  errors: state.errors.session
})

const mDTP = (dispatch) => ({
  login: (user) => dispatch(login(user)),
  resetSessionErrors: () => dispatch(resetSessionErrors())
});

export default connect(mSTP, mDTP)(LoginForm);
