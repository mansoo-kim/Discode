import { useState, useRef, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import { FaTimes } from 'react-icons/fa';
import ChangePic from './ChangePic';
import Prompt from './Prompt';

const UserSettings = ({ currentUser, toggleSettings, openModal, updateUser }) => {
  const [imgUrl, setImgUrl] = useState("");
  const [imgFile, setImgFile] = useState(null);
  const [removePfp, setRemovePfp] = useState(false);

  const darkBackground = 'rgba(32, 34, 37, 0.9)';
  const redBackground = '#F14846';
  const [promptBackground, setPromptBackground] = useState(darkBackground);
  const fileRef = useRef();

  const handleEscapeExit = (e) => {
    if (e.keyCode === 27) {
      console.log("escape");
      toggleSettings();
    }
  };

  useEffect(() => {
   document.addEventListener("keydown", handleEscapeExit);
   return () => document.removeEventListener("keydown", handleEscapeExit);
  });

  useEffect(() => {
    if (promptBackground === redBackground) setTimeout(() => setPromptBackground(darkBackground), 500);
  }, [promptBackground]);

  const checkThenExit = () => {
    if (imgUrl || removePfp) {
      setPromptBackground(redBackground);
    } else {
      toggleSettings();
    }
  }

  const handleRemove = () => {
    if (currentUser.pfpUrl) {
      setRemovePfp(true);
    }
    setImgUrl("");
    setImgFile(null);
    fileRef.current.value = "";
  }

  const handleSubmit = () => {
    const formData = new FormData();
    if (imgFile) formData.append("user[pfp]", imgFile);
    if (removePfp) formData.append("user[remove_pfp]", removePfp);
    updateUser(currentUser.id, formData)
      .then(() => {
        setRemovePfp(false);
        setImgUrl("");
        setImgFile(null);
        fileRef.current.value = "";
      });
  }

  const handleReset = () => {
    setRemovePfp(false);
    setImgUrl("");
    setImgFile(null);
    fileRef.current.value = "";
  }

  const onFileChange = (e) => {
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      setRemovePfp(false);
      setImgUrl(fileReader.result);
      setImgFile(file);
    };
    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  const imgSrc = removePfp ? 'https://raw.githubusercontent.com/mansookim/Discode/main/app/assets/images/icon_clyde_white_RGB.png' : imgUrl || currentUser.pfpUrl || 'https://raw.githubusercontent.com/mansookim/Discode/main/app/assets/images/icon_clyde_white_RGB.png'

  return (
    <div className="settings-container">
      <div className="settings-left-container">
        <div className="settings-options">
          <div  className="options-header">
            USER SETTINGS
          </div>

          <div className="option selected">
            My Account
          </div>

          <div className="separator"></div>

          <div className="option action" onClick={() =>
                openModal({type: "logout"})}>
            Log Out
          </div>

        </div>
      </div>
      <div className="settings-right-container">
        <div className="settings-pane">
          <h2>My Account</h2>

          <div className="fake-form">

            <ChangePic onFileChange={onFileChange} handleRemove={handleRemove} fileRef={fileRef} imgSrc={imgSrc} imageable={currentUser} type={"user"} />

            <div className="separator large"></div>

            <div className="user-settings-section">

              <div className="attribute-container">
                <div className="text-group">
                  <div class="label">USERNAME</div>
                  <div className="attribute-value">
                    { currentUser.username }
                    <span>#{ currentUser.tag }</span>
                  </div>
                </div>
                <button onClick={() =>
                  openModal({type: "editUser", property: "username"})}>
                    Edit
                </button>
              </div>

              <div className="attribute-container">
                <div className="text-group">
                  <div class="label">EMAIL</div>
                  <div className="attribute-value">{ currentUser.email }</div>
                </div>
                <button onClick={() =>
                  openModal({type: "editUser", property: "email"})}>
                    Edit
                </button>
              </div>
            </div>

            <CSSTransition
              in={(Boolean(imgUrl) || removePfp)}
              timeout={{
                enter: 300,
                exit: 200
              }}
              mountOnEnter
              classNames="prompt">
                <Prompt promptBackground={promptBackground} handleReset={handleReset} handleSubmit={handleSubmit} />
            </CSSTransition>
          </div>

        </div>

        <div className="close-settings">
          <div className="close-circle" onClick={checkThenExit}>
            <FaTimes size={16} />
          </div>
          ESC
        </div>

      </div>
    </div>
  )
}

import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_actions';
import { updateUser } from '../../actions/user_actions';

const mDTP = (dispatch) => ({
  openModal: (modal) => dispatch(openModal(modal)),
  updateUser: (userId, user) => dispatch(updateUser(userId, user))
})

export default connect(null, mDTP)(UserSettings);
