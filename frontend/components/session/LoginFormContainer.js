import { connect } from 'react-redux';
import { login, resetSessionErrors } from '../../actions/session_actions';
import SessionForm from './SessionForm';

const mSTP = (state) => ({
  errors: state.errors.session,
  type: 'login'
})

const mDTP = (dispatch) => ({
  processForm: (user) => dispatch(login(user)),
  resetSessionErrors: () => dispatch(resetSessionErrors())
});

export default connect(mSTP, mDTP)(SessionForm);
