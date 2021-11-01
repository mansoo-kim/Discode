import CreateServerModal from './CreateServerModal';
import CreateChannelModal from './CreateChannelModal';
import EditUserModal from './EditUserModal';

const ModalManager = ({ modal, closeModal, history }) => {
  if (!modal) return null;

  let component;

  switch (modal.type) {
    case "createServer":
      component = <CreateServerModal history={history} />
      break;
    case "createChannel":
      component = <CreateChannelModal serverId={modal.serverId} history={history} />
      break;
    case "editUser":
      component = <EditUserModal type={modal.property} />
      break;
    default:
      return null;
  }

  const handleClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  }

  return (
    <div className="modal-container" onClick={handleClick}>
      { component }
    </div>
  )
}

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { closeModal } from '../../actions/modal_actions';

const mSTP = (state) => ({
  modal: state.ui.modal
});

const mDTP = (dispatch) => ({
  closeModal: () => dispatch(closeModal())
});

export default withRouter(connect(mSTP, mDTP)(ModalManager));
