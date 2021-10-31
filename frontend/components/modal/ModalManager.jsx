const ModalManager = ({ modal, openModal, closeModal }) => {
  return modal ? (
    <div className="modal-container">
      hellow world
    </div>
  ) : null
}

import { connect } from 'react-redux';
import { openModal, closeModal } from '../../actions/modal_actions';

const mSTP = (state) => ({
  modal: state.ui.modal
});

const mDTP = (dispatch) => ({
  openModal: (modal) => dispatch(openModal(modal)),
  closeModal: () => dispatch(closeModal())
});

export default connect(mSTP, mDTP)(ModalManager);
