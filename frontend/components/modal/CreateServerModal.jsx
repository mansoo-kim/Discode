import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaTimes } from 'react-icons/fa';


const CreateServerModal = ({ currentUser, closeModal, createServer, history }) => {
  const { register, formState: { errors }, watch, handleSubmit } = useForm({
    shouldFocusError: false,
    defaultValues: { serverName: `${currentUser.username}'s server`},
    reValidateMode: 'onSubmit'
  });

  const serverName = watch("serverName");

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("server[name]", data.serverName);
    if (data.iconFile[0]) formData.append("server[icon]", data.iconFile[0]);
    createServer(formData)
      .then(({ res: { server } })=> history.push(`/channels/${server.id}/${server.channels[0]}`))
      .then(() => closeModal());
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

  const preview = imgUrl ? <img src={imgUrl} className="server-icon" /> : null;

  return (
    <div className="modal white">
      <div className="close-button" onClick={closeModal}>
        <FaTimes size={20} />
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>

        <div className="modal-header">
          <h2>Customize your server</h2>
          <p>Give your new server a personality with a name and an icon. You can always change it later.</p>
        </div>

        <div className="modal-content">

          <div>
            <input type="file" {...register("iconFile")} onChange={onFileChange} />
            { preview }
          </div>

          <label className={`${errors.serverName ? 'show-errors' : ''}`}>
            SERVER NAME <span>{ errors.serverName?.message }</span>
          </label>
          <input type="text" className="text-input" {...register("serverName", { required: true,
            minLength: {
              value: 2,
              message: "- Must be between 2 and 32 in length"
            },
            maxLength: {
              value: 32,
              message: "- Must be between 2 and 32 in length"
            }
          })} />

          <p className="fine-print">By creating a server, you agree to Discode's <span>Community Guidelines</span>.</p>
        </div>

        <div className="buttons-container">
          <button type="button" className="cancel-button" onClick={closeModal}>Cancel</button>
          <button className="submit-button blue-button" disabled={serverName === ""}>
            <div>Create</div>
          </button>
        </div>

      </form>
    </div>
  )
}

import { connect } from 'react-redux';
import { createServer } from '../../actions/server_actions';

const mSTP = (state) => ({
  serverErrors: state.errors.server,
  currentUser: state.session
});

const mDTP = (dispatch) => ({
  createServer: (server) => dispatch(createServer(server))
});

export default connect(mSTP, mDTP)(CreateServerModal);
