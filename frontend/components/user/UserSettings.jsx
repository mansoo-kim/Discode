const UserSettings = ({ toggleSettings, logout }) => {
  return (
    <div className="settings-container">
      <div className="settings-left">
        <div>
          User Settings
          <ul>
            <li>
              My Account
            </li>
            <li onClick={logout}>
              Log Out
            </li>
          </ul>
        </div>
      </div>
      <div className="settings-right">
        <div className="settings-pane">
          Main Account
        </div>
        <div className="close-settings">
          <button onClick={toggleSettings}>X</button>
        </div>
      </div>
    </div>
  )
}

export default UserSettings
1251
740
