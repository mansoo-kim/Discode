import { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import ChannelIndex from '../channel/ChannelIndex';
import ChannelContainer from '../cc/ChannelContainer';
import CurrentUser from '../user/CurrentUser';
import ServerOptionsDD from './ServerOptionsDD';

const Server = ({ server, channels, isOwner, requestServer, match }) => {
  useEffect(() => {
    requestServer(match.params.serverId);
  }, [match.params.serverId])

  const [ showDD, setShowDD] = useState(false);

  const serverOptionsDD = showDD ? (
    <ServerOptionsDD isOwner={isOwner} />
  ) : null;

  return server ? (
    <div className="server-main">
      <div className="server-nav">
        <div>
          <div className="server-name-container">
            <div tabIndex="0" onClick={() => setShowDD(!showDD)} onBlur={() => setShowDD(false)}>{ server.name }</div>
            { serverOptionsDD }
          </div>
          <ChannelIndex channels={channels} isOwner={isOwner} serverId={server.id} />
        </div>
        <CurrentUser />
      </div>

      <Route path={`/channels/:serverId/:ccId?`} component={ChannelContainer} />
    </div>
  ) : null
}

import { connect } from 'react-redux';
import { requestServer } from '../../actions/server_actions';

const mSTP = (state, ownProps) => ({
  server: state.entities.servers[ownProps.match.params.serverId],
  channels: Object.values(state.entities.channels),
  isOwner: state.session.id === state.entities.servers[ownProps.match.params.serverId]?.ownerId
});

const mDTP = (dispatch) => ({
  requestServer: (serverId) => dispatch(requestServer(serverId))
});

export default connect(mSTP, mDTP)(Server);
