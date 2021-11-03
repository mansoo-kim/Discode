import { useState, useRef } from 'react';
import { useForm } from 'react-hook-form';
import ServerIcon from './ServerIcon';

const ServerSettings = ({ toggleSettings, server, updateServer, deleteServer, history }) => {
  if (!server) return null;

  const { register, formState: { errors, isDirty }, watch, reset, handleSubmit } = useForm({
    shouldFocusError: false,
    defaultValues: { serverName: server.name }
  });

  const [showRed, setShowRed] = useState(false);
  const watchName = watch("serverName");

  const [imgUrl, setImgUrl] = useState("");
  const [imgFile, setImgFile] = useState(null);
  const [removeIcon, setRemoveIcon] = useState(false);

  const fileRef = useRef();

  const handleDelete = () => {
    deleteServer(server.id)
      .then(() => toggleSettings(null))
      .then(() => {
        if (history.location.pathname !== '/channels/@me') history.push('/channels/@me')
      });
  }

  const checkThenExit = () => {
    if (isDirty || imgUrl || removeIcon) {
      setShowRed(true);
    } else {
      toggleSettings(null);
    }
  }

  const handleRemove = () => {
    if (server.iconUrl) {
      setRemoveIcon(true);
      setImgUrl("");
      setImgFile(null);
      fileRef.current.value = "";
    }
  }

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("server[name]", data.serverName);
    if (imgFile) formData.append("server[icon]", imgFile);
    if (setRemoveIcon) formData.append("server[remove_icon]", setRemoveIcon);

    updateServer(server.id, formData)
      .then(() => {
        setShowRed(false);
        setRemoveIcon(false);
        setImgUrl("");
        setImgFile(null);
        fileRef.current.value = "";
        reset({ serverName: watchName});
      });
  };

  const prompt = (
    <div className={`save-prompt ${ showRed ? 'error-input' : ''}`}>
      Careful - you have unsaved changes!
      <button onClick={() => {
        setShowRed(false);
        setRemoveIcon(false);
        setImgUrl("");
        setImgFile(null);
        reset();
        fileRef.current.value = "";
      }}>
        Reset
      </button>
      <button>Save Changes</button>
    </div>
  )

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
      <div className="settings-left">
        <div>
          <div>
            { watchName }
          </div>
          <ul>
            <li>
              Overview
            </li>
            <li onClick={handleDelete}>
              Delete Server
            </li>
          </ul>
        </div>
      </div>
      <div className="settings-right">
        <div className="settings-pane">
          <h2>Server Overview</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <ServerIcon name={server.name} iconUrl={imgSrc} />
              <input type="file" onChange={onFileChange} ref={fileRef} />
              { server.iconUrl && <button type="button" onClick={handleRemove}>Remove</button> }
            </div>
            <label>SERVER NAME</label>
            <input type="text" placeholder={server.name} {...register("serverName", {
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
            { errors.serverName?.message }
            { (isDirty || imgUrl || removeIcon) && prompt }
          </form>
        </div>
      </div>

      <div className="close-settings">
        <button onClick={checkThenExit}>X</button>
      </div>
    </div>
  )
}

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { updateServer, deleteServer } from '../../actions/server_actions';

const mDTP = (dispatch) => ({
  updateServer: (serverId, server) => dispatch(updateServer(serverId, server)),
  deleteServer: (serverId) => dispatch(deleteServer(serverId))
});

export default withRouter(connect(null, mDTP)(ServerSettings));
