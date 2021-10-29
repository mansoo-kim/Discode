import { connect } from 'react-redux';
import { registerNewUser } from '../../actions/session_actions';
import RegisterForm from './RegisterForm';

const mSTP = (state) => ({
  errors: state.errors.session
})

const mDTP = (dispatch) => ({
  processForm: (user) => dispatch(registerNewUser(user))
});

export default connect(mSTP, mDTP)(RegisterForm);
