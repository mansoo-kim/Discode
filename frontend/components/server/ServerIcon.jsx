const ServerIcon = ({ name, iconUrl }) => {

  const abbreviation = name.split(" ").map(word => word[0]).join('');
  const img = <img src={iconUrl} className="server-icon" />

  const fontSize = abbreviation.length < 4 ? 18 : 12;

  return (
    <div className="server-icon-container" style={{ fontSize }}>
      { iconUrl ? img : abbreviation }
    </div>
  )
}

export default ServerIcon
