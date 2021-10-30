const Channel = ({ channel }) => {
  return channel ? (
    <div className="channel-main">
      showing channel: { channel.name }
    </div>
  ) : null
}

export default Channel
