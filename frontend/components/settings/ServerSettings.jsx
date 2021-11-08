import { useState, useRef, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { CSSTransition } from 'react-transition-group';
import { FaTimes } from 'react-icons/fa';
import ChangePic from './ChangePic';
import Prompt from './Prompt';

const ServerSettings = ({ toggleSettings, server, updateServer, openModal }) => {
  if (!server) return null;

  const { register, formState: { errors, isDirty }, watch, reset, handleSubmit } = useForm({
    shouldFocusError: false,
    reValidateMode: 'onSubmit',
    defaultValues: { serverName: server.name }
  });

  const darkBackground = 'rgba(32, 34, 37, 0.9)';
  const redBackground = '#F14846';
  const [promptBackground, setPromptBackground] = useState(darkBackground);

  const watchName = watch("serverName");

  useEffect(() => {
    if (promptBackground === redBackground) setTimeout(() => setPromptBackground(darkBackground), 500);
  }, [promptBackground]);

  const [imgUrl, setImgUrl] = useState("");
  const [imgFile, setImgFile] = useState(null);
  const [removeIcon, setRemoveIcon] = useState(false);

  const fileRef = useRef();

  const checkThenExit = () => {
    if (isDirty || imgUrl || removeIcon) {
      setPromptBackground(redBackground);
    } else {
      toggleSettings(null);
    }
  }

  const handleRemove = () => {
    if (server.iconUrl) {
      setRemoveIcon(true);
    }
    setImgUrl("");
    setImgFile(null);
    fileRef.current.value = "";
  }

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("server[name]", data.serverName);
    if (imgFile) formData.append("server[icon]", imgFile);
    if (setRemoveIcon) formData.append("server[remove_icon]", setRemoveIcon);

    updateServer(server.id, formData)
      .then(() => {
        setRemoveIcon(false);
        setImgUrl("");
        setImgFile(null);
        fileRef.current.value = "";
        reset({ serverName: watchName});
      });
  };

  const handleReset = () => {
    setRemoveIcon(false);
    setImgUrl("");
    setImgFile(null);
    reset();
    fileRef.current.value = "";
  }

  const onFileChange = (e) => {
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      setRemoveIcon(false);
      setImgUrl(fileReader.result);
      setImgFile(file);
    };
    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  const imgSrc = removeIcon ? "" : imgUrl || server.iconUrl

  return (
    <div className="settings-container">
      <div className="settings-left-container">
        <div className="settings-options">
          <div className="options-header">
            { watchName.toUpperCase() || "SERVER SETTINGS"}
          </div>

          <div className="option selected">
              Overview
          </div>

          <div className="separator"></div>

          <div className="option action" onClick={() => openModal({type: "deleteServer", server})}>
            Delete Server
          </div>

        </div>
      </div>
      <div className="settings-right-container">
        <div className="settings-pane">
          <h2>Server Overview</h2>
          <div className="fake-form">

            <ChangePic onFileChange={onFileChange} handleRemove={handleRemove} fileRef={fileRef} imgSrc={imgSrc} server={server} />


            <div className="separator bottom"></div>

            <label>SERVER NAME</label>
            <input type="text" className="text-input" placeholder={server.name} {...register("serverName", {
              required: "This field is required",
              minLength: {
                value: 2,
                message: "Must be between 2 and 100 in length"
              },
              maxLength: {
                value: 100,
                message: "Must be between 2 and 100 in length"
              }
            })} />
            { errors.serverName && <div className="error-message">{ errors.serverName?.message }</div> }

            <CSSTransition
              in={(isDirty || Boolean(imgUrl) || removeIcon)}
              timeout={{
                enter: 300,
                exit: 200
              }}
              mountOnEnter
              classNames="prompt">
                <Prompt promptBackground={promptBackground} handleReset={handleReset} handleSubmit={handleSubmit(onSubmit)} />
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
import { withRouter } from 'react-router-dom';
import { updateServer } from '../../actions/server_actions';
import { openModal } from '../../actions/modal_actions';

const mDTP = (dispatch) => ({
  updateServer: (serverId, server) => dispatch(updateServer(serverId, server)),
  openModal: (modal) => dispatch(openModal(modal))
});

export default withRouter(connect(null, mDTP)(ServerSettings));
