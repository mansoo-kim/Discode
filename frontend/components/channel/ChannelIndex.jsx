import ChannelIndexItem from './ChannelIndexItem'

const ChannelIndex = ({ channels }) => {
  return (
    <ul>
      {channels.map(channel => <ChannelIndexItem key={channel.id} channel={channel} />)}
    </ul>
  )
}

export default ChannelIndex
