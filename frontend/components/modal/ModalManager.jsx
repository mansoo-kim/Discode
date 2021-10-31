import CreateServerModal from './CreateServerModal';
import CreateChannelModal from './CreateChannelModal';

const ModalManager = ({ modal }) => {
  if (!modal) return null;

  let component;

  switch (modal.type) {
    case "createServer":
      component = <CreateServerModal />
      break;
    case "createChannel":
      component = <CreateChannelModal serverId={modal.serverId} />
      break;
    default:
      return null;
  }

  return (
    <div className="modal-container">
      { component }
    </div>
  )
}

import { connect } from 'react-redux';

const mSTP = (state) => ({
  modal: state.ui.modal
});

export default connect(mSTP)(ModalManager);
