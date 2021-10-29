import { connect } from 'react-redux';
import { registerNewUser, resetSessionErrors } from '../../actions/session_actions';
import SessionForm from './SessionForm';

const mSTP = (state) => ({
  errors: state.errors.session,
  type: 'register'
})

const mDTP = (dispatch) => ({
  processForm: (user) => dispatch(registerNewUser(user)),
  resetSessionErrors: () => dispatch(resetSessionErrors())
});

export default connect(mSTP, mDTP)(SessionForm);
