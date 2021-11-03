const ServerIcon = ({ name, iconUrl }) => {

  const abbreviation = name.split(" ").map(word => word[0]).join('');
  const img = <img src={iconUrl} className="server-icon" />
  return (
    <div className="default-server-icon">
      { iconUrl ? img : abbreviation }
    </div>
  )
}

export default ServerIcon
