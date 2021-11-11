import { CSSTransition } from 'react-transition-group';
import CreateServerModal from './CreateServerModal';
import CreateChannelModal from './CreateChannelModal';
import EditUserModal from './EditUserModal';
import DeleteMessageModal from './DeleteMessageModal';
import DeleteChannelModal from './DeleteChannelModal';
import DeleteServerModal from './DeleteServerModal';
import LogOutModal from './LogOutModal';
import LeaveServerModal from './LeaveServerModal';
import RemoveFriendModal from './RemoveFriendModal';

const ModalManager = ({ modal, closeModal, history }) => {
  let component;

  switch (modal.type) {
    case "createServer":
      component = <CreateServerModal history={history} closeModal={() => closeModal(modal)} />
      break;
    case "createChannel":
      component = <CreateChannelModal serverId={modal.serverId} history={history} closeModal={() => closeModal(modal)} />
      break;
    case "editUser":
      component = <EditUserModal type={modal?.property} closeModal={() => closeModal(modal)} />
      break;
    case "deleteMessage":
      component = <DeleteMessageModal message={modal.message} sender={modal.sender} chat={modal.chat} closeModal={() => closeModal(modal)} />
      break;
    case "deleteChannel":
      component = <DeleteChannelModal channel={modal.channel} history={history} closeModal={() => closeModal(modal)} />
      break;
    case "deleteServer":
      component = <DeleteServerModal server={modal.server} history={history} closeModal={() => closeModal(modal)} />
      break;
    case "logout":
      component = <LogOutModal closeModal={() => closeModal(modal)} />
      break
    case "leaveServer":
      component = <LeaveServerModal server={modal.server} currentUserId={modal.currentUserId} history={history} closeModal={() => closeModal(modal)} />
      break;
    case "removeFriend":
      component = <RemoveFriendModal currentUserId={modal.currentUserId} friend={modal.friend} history={history} closeModal={() => closeModal(modal)} />
      break;
    default:
      component = <div className="modal"><h2>Nothing to see here</h2></div>;
      break;
  }

  const handleClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal(modal);
    }
  }

  return (
    <CSSTransition
      in={modal.action === "open"}
      timeout={300}
      mountOnEnter
      unmountOnExit
      classNames="modals">
      <div className="modal-container" onClick={handleClick}>
        { component }
      </div>
    </CSSTransition>
  )
}

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { closeModal } from '../../actions/modal_actions';

const mSTP = (state) => ({
  modal: state.ui.modal
});

const mDTP = (dispatch) => ({
  closeModal: (modal) => dispatch(closeModal(modal))
});

export default withRouter(connect(mSTP, mDTP)(ModalManager));
