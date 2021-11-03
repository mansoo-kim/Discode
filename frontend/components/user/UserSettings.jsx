import { useState } from 'react';
import { useForm } from 'react-hook-form';

const UserSettings = ({ currentUser, toggleSettings, logout, openModal }) => {

  const { register, formState: { errors, isDirty }, watch, reset, handleSubmit } = useForm({
    shouldFocusError: false,
    defaultValues: { subjectName: subject.name }
  });

  const [showRed, setShowRed] = useState(false);

  const checkThenExit = () => {
    if (isDirty) {
      setShowRed(true);
    } else {
      toggleSettings(null);
    }
  }

  const [imgUrl, setImgUrl] = useState("");

  const onFileChange = (e) => {
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => setImgUrl(fileReader.result);
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
              <input type="file" {...register("iconFile")} onChange={onFileChange} />
              { preview }
              <button>Remove Avatar</button>
            </div>
          </form>
          <ul>
            <li>
              <div>
                <div>USERNAME</div>
                <div>{ currentUser.username }#{ currentUser.tag }</div>
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
        <button onClick={toggleSettings}>X</button>
      </div>
    </div>
  )
}

import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { openModal } from '../../actions/modal_actions';

const mDTP = (dispatch) => ({
  logout: () => dispatch(logout()),
  openModal: (modal) => dispatch(openModal(modal))
})

export default connect(null, mDTP)(UserSettings);
