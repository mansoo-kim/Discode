import CreateServerModal from './CreateServerModal';
import CreateChannelModal from './CreateChannelModal';
import EditUserModal from './EditUserModal';

const ModalManager = ({ modal, closeModal }) => {
  if (!modal) return null;

  let component;

  switch (modal.type) {
    case "createServer":
      component = <CreateServerModal />
      break;
    case "createChannel":
      component = <CreateChannelModal serverId={modal.serverId} />
      break;
    case "editUser":
      component = <EditUserModal type={modal.property} />
      break;
    default:
      return null;
  }

  const handleClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
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
import { closeModal } from '../../actions/modal_actions';

const mSTP = (state) => ({
  modal: state.ui.modal
});

const mDTP = (dispatch) => ({
  closeModal: () => dispatch(closeModal())
});

export default connect(mSTP, mDTP)(ModalManager);
