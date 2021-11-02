const ServerOptionsDD = ({isOwner, serverId, openModal, setShowDD}) => {

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
      onClick={() => null}>
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

const mDTP = (dispatch) => ({
  openModal: (modal) => dispatch(openModal(modal))
});

export default connect(null, mDTP)(ServerOptionsDD);
