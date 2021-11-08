import CreateServerModal from './CreateServerModal';
import CreateChannelModal from './CreateChannelModal';
import EditUserModal from './EditUserModal';
import DeleteMessageModal from './DeleteMessageModal';
import DeleteChannelModal from './DeleteChannelModal';
import DeleteServerModal from './DeleteServerModal';
import LogOutModal from './LogOutModal';
import LeaveServerModal from './LeaveServerModal';

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
    case "deleteMessage":
      component = <DeleteMessageModal message={modal.message} sender={modal.sender} chat={modal.chat} />
      break;
    case "deleteChannel":
      component = <DeleteChannelModal channel={modal.channel} history={history} />
      break;
    case "deleteServer":
      component = <DeleteServerModal server={modal.server} history={history} />
      break;
    case "logout":
      component = <LogOutModal />
      break
    case "leaveServer":
      component = <LeaveServerModal server={modal.server} currentUserId={modal.currentUserId} history={history} />
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
