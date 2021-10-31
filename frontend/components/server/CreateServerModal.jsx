import { useState } from 'react';

const CreateServerModal = ({ currentUser, closeModal}) => {
  const [serverName, setServerName] = useState(`${currentUser.username}'s server`)
  return (
    <div className="modal">
      <button onClick={closeModal}>X</button>
      <h2>Customize your server</h2>
      <p>Give your new server a personality with a name and an icon. You can always change it later.</p>
      <label>SERVER NAME
        <input type="text" value={serverName} onChange={(e) => setServerName(e.target.value)} />
      </label>
      <p>By creating a servere, you agree to Discode's Community Guidelines.</p>
      <button>Create</button>
    </div>
  )
}

import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';

const mSTP = (state) => ({
  currentUser: state.entities.users[state.session.id]
});

const mDTP = (dispatch) => ({
  closeModal: () => dispatch(closeModal())
});

export default connect(mSTP, mDTP)(CreateServerModal);
