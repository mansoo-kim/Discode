import { connect } from 'react-redux';
import { registerNewUser } from '../../actions/session_actions';
import SessionForm from './SessionForm';

const mSTP = (state) => ({
  errors: state.errors.session,
  type: "register"
})

const mDTP = (dispatch) => ({
  processForm: (user) => dispatch(registerNewUser(user))
});

export default connect(mSTP, mDTP)(SessionForm);
