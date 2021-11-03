import { useState, useRef } from 'react';

const UserSettings = ({ currentUser, toggleSettings, logout, openModal, updateUser }) => {
  const [showRed, setShowRed] = useState(false);
  const [imgUrl, setImgUrl] = useState("");
  const [imgFile, setImgFile] = useState(null);

  const fileRef = useRef();

  const checkThenExit = () => {
    if (imgUrl) {
      setShowRed(true);
    } else {
      toggleSettings(null);
    }
  }

  const handleSubmit = () => {
    const formData = new FormData();
    if (imgFile) formData.append("user[pfp]", imgFile);
    updateUser(currentUser.id, formData)
      .then(() => {
        setShowRed(false);
        setImgUrl("");
        fileRef.current.value = "";
      });
  }

  const prompt = (
    <div className={`save-prompt ${ showRed ? 'error-input' : ''}`}>
      Careful - you have unsaved changes!
      <button onClick={() => {
        setShowRed(false);
        setImgUrl("");
        fileRef.current.value = "";
      }}>
        Reset
      </button>
      <button onClick={handleSubmit}>Save Changes</button>
    </div>
  )

  const onFileChange = (e) => {
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      setImgUrl(fileReader.result);
      setImgFile(file);
    };
    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  const imgSrc = imgUrl || currentUser.pfpUrl
  const preview = imgSrc ? <img src={imgSrc} className="server-icon" /> : null;

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
          <h2>My Account</h2>
          { preview }
          { currentUser.username }#{ currentUser.tag }
          <form>
            <div>
              <input type="file" onChange={onFileChange} ref={fileRef} />
              <button>Remove Avatar</button>
            </div>
          </form>
          <ul>
            <li>
              <div>
                <div>USERNAME</div>
                <div>{ currentUser.username }#{ currentUser.tag }</div>
                { (imgUrl) && prompt }
              </div>
              <button onClick={() =>
                openModal({type: "editUser", property: "username"})}>
                  Edit
              </button>
            </li>
            <li>
              <div>
                <div>EMAIL</div>
                <div>{ currentUser.email }</div>
              </div>
              <button onClick={() =>
                openModal({type: "editUser", property: "email"})}>
                  Edit
              </button>
            </li>
          </ul>

        </div>
      </div>

      <div className="close-settings">
        <button onClick={checkThenExit}>X</button>
      </div>
    </div>
  )
}

import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { openModal } from '../../actions/modal_actions';
import { updateUser } from '../../actions/user_actions';

const mDTP = (dispatch) => ({
  logout: () => dispatch(logout()),
  openModal: (modal) => dispatch(openModal(modal)),
  updateUser: (userId, user) => dispatch(updateUser(userId, user))
})

export default connect(null, mDTP)(UserSettings);
