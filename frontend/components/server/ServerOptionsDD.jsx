const ServerOptionsDD = ({isOwner, serverId, setShowDD, currentUserId, openModal, deleteMembership, history, toggleSettings}) => {
  const serverSettingsOption = isOwner ? (
    <div className="server-option" onMouseDown={(e => e.preventDefault())}
    onClick={toggleSettings}>
      <div>
        Server Settings
      </div>
    </div>
  ) : null;

  const newChannelOption = isOwner ? (
    <div className="server-option"  onMouseDown={(e => e.preventDefault())}
    onClick={() => openModal({type: "createChannel", serverId })}>
      <div>
        Create Channel
      </div>
    </div>
  ) : null;

  const handleLeaving = () => {
    deleteMembership({
      user_id: currentUserId,
      joinable_id: serverId,
      joinable_type: "Server"
    })
      .then(() => history.push('/@me'))
  }

  const leaveOption = isOwner ? null : (
    <div className="server-option leave-server" onMouseDown={(e => e.preventDefault())} onClick={handleLeaving}>
      <div>
        Leave Server
      </div>
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
