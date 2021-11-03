const ServerIcon = ({ server }) => {

  const abbreviation = server.name.split(" ").map(word => word[0]).join('');
  const img = <img src={server.iconUrl} className="server-icon" />
  return (
    <div className="default-server-icon">
      { server.iconUrl ? img : abbreviation }
    </div>
  )
}

export default ServerIcon
