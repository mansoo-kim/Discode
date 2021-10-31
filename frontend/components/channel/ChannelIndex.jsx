import ChannelIndexItem from './ChannelIndexItem';

const ChannelIndex = ({ channels }) => {
  return (
    <div className="channel-index">
      <ul>
        {channels.map(channel => <ChannelIndexItem key={channel.id} channel={channel} />)}
      </ul>
    </div>
  )
}

export default ChannelIndex
