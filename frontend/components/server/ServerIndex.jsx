import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ServerIndexItem from './ServerIndexItem';

const ServerIndex = ({ servers, requestServers, openModal }) => {
  useEffect(() => {
    requestServers();
  }, [])

  return (
    <div className="server-index">
      <ul>
        <li>
          <Link to='/channels/@me'>
            <div className="default-server-icon">
              Home
            </div>
          </Link>
        </li>
        {servers.map(server => <ServerIndexItem key={server.id} server={server} />)}
        <li>
          <button onClick={() => openModal({
            type: "createServer"
          })}>
            New Server
          </button>
        </li>
      </ul>
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
