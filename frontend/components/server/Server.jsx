import { useEffect } from 'react';
import ChannelIndex from '../channel/ChannelIndex';
import Channel from '../channel/Channel'
import MemberIndex from '../members/MemberIndex';

const Server = ({ server, channels, members, requestServer, match }) => {
  useEffect(() => {
    requestServer(match.params.serverId);
  }, [match.params.serverId])

  return server ? (
    <div>
      showing server: { server.name }
      <ChannelIndex channels={ Object.values(channels) } />
      <Channel channel={channels[match.params.channelId]} />
      <MemberIndex members={members} />
    </div>
  ) : null
}

export default Server
