import CreateServerModal from '../server/CreateServerModal';

const ModalManager = ({ modal }) => {
  if (!modal) return null;

  let component;

  switch (modal.type) {
    case "createServer":
      component = <CreateServerModal />
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
