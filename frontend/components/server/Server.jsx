import { useEffect } from 'react';
import { Route } from 'react-router-dom';
import ChannelIndex from '../channel/ChannelIndex';
import ChannelContainer from '../cc/ChannelContainer';
import CurrentUser from '../user/CurrentUser';

const Server = ({ server, channels, requestServer, match }) => {
  useEffect(() => {
    requestServer(match.params.serverId);
  }, [match.params.serverId])

  return server ? (
    <div className="server-main">
      <div className="server-nav">
        <div>
          { server.name }
          <ChannelIndex channels={ Object.values(channels) } />
        </div>
        <CurrentUser />
      </div>

      <Route path={`/channels/:serverId/:ccId`} component={ChannelContainer} />
    </div>
  ) : null
}

import { connect } from 'react-redux';
import { requestServer } from '../../actions/server_actions';

const mSTP = (state, ownProps) => ({
  server: state.entities.servers[ownProps.match.params.serverId],
  channels: state.entities.channels
});

const mDTP = (dispatch) => ({
  requestServer: (serverId) => dispatch(requestServer(serverId))
});

export default connect(mSTP, mDTP)(Server);
