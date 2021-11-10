import { useRef } from 'react';
import { closeOnEscape, closeOnOutsideClick } from '../../utils/close_utils';
import { BsFillGearFill } from 'react-icons/bs';
import { BsPlusCircleFill } from 'react-icons/bs';
import { FaArrowAltCircleLeft } from 'react-icons/fa';

const ServerOptionsDD = ({isOwner, server, setShowDD, currentUserId, openModal, toggleSettings}) => {

  const popupRef = useRef();

  closeOnOutsideClick(popupRef, setShowDD);
  closeOnEscape(setShowDD);

  const serverSettingsOption = isOwner ? (
    <div className="server-option" onClick={() => {
        toggleSettings();
        setShowDD(false);
    }}>
      Server Settings
      <BsFillGearFill size={14} />
    </div>
  ) : null;

  const newChannelOption = isOwner ? (
    <div className="server-option" onClick={() => {
      openModal({type: "createChannel", serverId: server.id })
      setShowDD(false);
    }}>
      Create Channel
      <BsPlusCircleFill size={14} />
    </div>
  ) : null;

  const leaveOption = isOwner ? null : (
    <div className="server-option leave-server" onClick={() => {
      openModal({type: "leaveServer", server, currentUserId });
      setShowDD(false);
    }}>
      Leave Server
      <FaArrowAltCircleLeft size={14} />
    </div>
  )

  return (
    <div className="server-options-dd" ref={popupRef}>
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
