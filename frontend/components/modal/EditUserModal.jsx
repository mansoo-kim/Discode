const EditUserModal = () => {
  return (
    <div>

    </div>
  )
}

import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';
import { createServer, resetServerErrors } from '../../actions/server_actions';

const mSTP = (state) => ({
  serverErrors: state.errors.server,
  currentUser: state.entities.users[state.session.id]
});

const mDTP = (dispatch) => ({
  closeModal: () => dispatch(closeModal()),
  createServer: (server) => dispatch(createServer(server)),
  resetServerErrors: () => dispatch(resetServerErrors())
});

export default connect(mSTP, mDTP)(EditUserModal);
