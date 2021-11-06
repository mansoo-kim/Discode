import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ServerIndexItem from './ServerIndexItem';
import ServerIcon from './ServerIcon';
import { HiOutlinePlus } from 'react-icons/hi';

const ServerIndex = ({ servers, requestServers, openModal }) => {
  useEffect(() => {
    requestServers();
  }, [])

  return (
    <div className="server-index">

      <div>
        <Link to='/channels/@me'>
          <div className="server-icon-container home-icon">
            <ServerIcon name={"Home"} iconUrl={'https://raw.githubusercontent.com/mansookim/Discode/main/app/assets/images/icon_clyde_white_RGB.png'} />
          </div>
        </Link>
      </div>

      <div className={"separator"}></div>

      {servers.map(server => <ServerIndexItem key={server.id} server={server} />)}

      <div className={"separator"}></div>

      <div>
        <div className={"server-icon-container new-server-icon"} onClick={() => openModal({
          type: "createServer"
        })}>
          <div>
            <HiOutlinePlus size={24} />
          </div>
        </div>
      </div>

    </div>
  )
}

import { connect } from 'react-redux';
import { requestServers } from '../../actions/server_actions';
import { openModal } from '../../actions/modal_actions';

const mSTP = (state) => ({
  servers: Object.values(state.entities.servers)
});

const mDTP = (dispatch) => ({
  requestServers: () => dispatch(requestServers()),
  openModal: (modal) => dispatch(openModal(modal))
});

export default connect(mSTP, mDTP)(ServerIndex);
