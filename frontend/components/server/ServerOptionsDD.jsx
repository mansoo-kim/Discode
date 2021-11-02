const ServerOptionsDD = ({isOwner, openModal}) => {

  const newChannelOption = isOwner ? (
    <div>
      <button onClick={() =>
        openModal({type: "createChannel", serverId})}>
        Create Channel
      </button>
    </div>
  ) : null;

  return (
    <div className="server-options-dd">
      { newChannelOption }
    </div>
  )
}

import { connect } from 'react-redux'
import { openModal } from '../../actions/modal_actions';

const mDTP = (dispatch) => ({
  openModal: (modal) => dispatch(openModal(modal))
});

export default connect(null, mDTP)(ServerOptionsDD);
