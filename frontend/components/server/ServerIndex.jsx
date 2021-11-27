import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ServerIndexItem from './ServerIndexItem';
import ServerIcon from './ServerIcon';
import { HiOutlinePlus } from 'react-icons/hi';

const ServerIndex = ({ servers, requestServers, openModal, match }) => {
  useEffect(() => {
    requestServers();
  }, [])

  return (
    <div className="server-index">

      <div className="server-index-item">
        <Link to='/channels/@me'>
          <div className={`home-icon ${match.params.serverId === '@me' ? 'active-home' : ''}`}>
            <ServerIcon name={"Home"} iconUrl={'https://raw.githubusercontent.com/mansoo-kim/Discode/main/app/assets/images/icon_clyde_white_RGB.png'} />
          </div>
        </Link>

        <div className="server-name-popup">
          Home
        </div>
        <div className="server-hover-triangle"></div>
      </div>

      <div className="separator"></div>

      {servers.map(server => <ServerIndexItem key={server.id} server={server} activeServerId={parseInt(match.params.serverId)} />)}

      <div className="separator"></div>

      <div>
        <div className={"server-icon-container new-server-icon"} onClick={() => openModal({
          type: "createServer"
        })}>
          <HiOutlinePlus size={20} />
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
