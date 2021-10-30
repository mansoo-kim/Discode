import { useEffect } from 'react';
import ChannelIndex from '../channel/ChannelIndex';
import Channel from '../channel/Channel'

const Server = ({ server, channels, activeChannelId, requestServer, match }) => {
  useEffect(() => {
    requestServer(match.params.serverId);
  }, [])

  return server ? (
    <div>
      showing server: { server.name }
      <ChannelIndex channels={ Object.values(channels) } />
      <Channel channel={channels[activeChannelId]} />
    </div>
  ) : null
}

export default Server
