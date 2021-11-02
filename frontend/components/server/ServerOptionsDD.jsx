const ServerOptionsDD = ({isOwner, serverId, setShowDD, currentUserId, openModal, deleteMembership}) => {

  const serverSettingsOption = isOwner ? (
    <div>
      <button onMouseDown={(e => e.preventDefault())}
      onClick={() => null}>
        Server Settings
      </button>
    </div>
  ) : null;

  const newChannelOption = isOwner ? (
    <div>
      <button onMouseDown={(e => e.preventDefault())}
      onClick={() => openModal({type: "createChannel", serverId})}>
        Create Channel
      </button>
    </div>
  ) : null;

  const leaveOption = isOwner ? null : (
    <div>
      <button onMouseDown={(e => e.preventDefault())}
      onClick={() => deleteMembership({
        user_id: currentUserId,
        joinable_id: serverId,
        joinable_type: "Server"
      })}>
        Leave Server
      </button>
    </div>
  )

  return (
    <div className="server-options-dd" onClick={() => setShowDD(false)}>
      { serverSettingsOption }
      { newChannelOption }
      { leaveOption }
    </div>
  )
}

import { connect } from 'react-redux'
import { openModal } from '../../actions/modal_actions';
import { deleteMembership } from '../../actions/membership_actions';

const mSTP = (state) => ({
  currentUserId: state.session.id
});

const mDTP = (dispatch) => ({
  openModal: (modal) => dispatch(openModal(modal)),
  deleteMembership: (membership) => dispatch(deleteMembership(membership))
});

export default connect(mSTP, mDTP)(ServerOptionsDD);
