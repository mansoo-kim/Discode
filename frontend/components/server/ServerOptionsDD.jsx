import { BsFillGearFill } from 'react-icons/bs';
import { BsPlusCircleFill } from 'react-icons/bs';
import { FaArrowAltCircleLeft } from 'react-icons/fa';

const ServerOptionsDD = ({isOwner, server, setShowDD, currentUserId, openModal, toggleSettings}) => {
  const serverSettingsOption = isOwner ? (
    <div className="server-option" onMouseDown={(e => e.preventDefault())}
    onClick={toggleSettings}>
      Server Settings
      <BsFillGearFill size={14} />
    </div>
  ) : null;

  const newChannelOption = isOwner ? (
    <div className="server-option"  onMouseDown={(e => e.preventDefault())}
    onClick={() => openModal({type: "createChannel", serverId: server.id })}>
      Create Channel
      <BsPlusCircleFill size={14} />
    </div>
  ) : null;

  const leaveOption = isOwner ? null : (
    <div className="server-option leave-server" onMouseDown={(e => e.preventDefault())} onClick={() => openModal({type: "leaveServer", server, currentUserId })}>
      Leave Server
      <FaArrowAltCircleLeft size={14} />
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

const mSTP = (state) => ({
  currentUserId: state.session.id
});

const mDTP = (dispatch) => ({
  openModal: (modal) => dispatch(openModal(modal))
});

export default connect(mSTP, mDTP)(ServerOptionsDD);
