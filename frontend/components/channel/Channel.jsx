const Channel = ({ channel }) => {
  return channel ? (
    <div>
      showing channel: { channel.name }
    </div>
  ) : null
}

export default Channel
