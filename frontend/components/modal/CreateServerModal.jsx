import { useState, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { closeModalOnEscape } from '../../utils/close_utils';
import { FaTimes } from 'react-icons/fa';

const CreateServerModal = ({ currentUser, closeModal, createServer, openModal, history }) => {

  closeModalOnEscape(closeModal);

  const { register, formState: { errors }, watch, handleSubmit } = useForm({
    shouldFocusError: false,
    defaultValues: { serverName: `${currentUser.username}'s server`},
    reValidateMode: 'onSubmit'
  });

  const serverName = watch("serverName");

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("server[name]", data.serverName);
    if (imgFile) formData.append("server[icon]", imgFile);
    createServer(formData)
      .then(({ res: { server } })=> history.push(`/channels/${server.id}/${server.channels[0]}`))
      .then(() => closeModal());
  }

  const [imgUrl, setImgUrl] = useState("");
  const [imgFile, setImgFile] = useState(null);
  const fileRef = useRef();

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

  const preview = <img src={imgUrl ? imgUrl : 'https://raw.githubusercontent.com/mansoo-kim/Discode/527b97ecaea49ff7f63d222a598be98c4a924d96/app/assets/images/upload_icon.svg'} className="server-icon" />

  return (
    <div className="modal white">
      <div className="close-button" onClick={closeModal}>
        <FaTimes size={20} />
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>

        <div className="modal-header">
          <h2>Customize Your Server</h2>
          <p>Give your new server a personality with a name and an icon. You can always change it later.</p>
        </div>

        <div className="modal-content">

          <div className="icon-input-wrapper">
            <div className={`input-cover ${imgUrl ? "uploaded" : ''}`} onClick={() => fileRef.current.click()}>{ preview }</div>
            <input type="file" accept=".jpg,.jpeg,.png,.gif" className="icon-input" ref={fileRef}onChange={onFileChange} />
          </div>

          <label className={`${errors.serverName ? 'show-errors' : ''}`}>
            SERVER NAME <span>{ errors.serverName?.message }</span>
          </label>
          <input type="text" spellCheck={false} autoFocus className="text-input" {...register("serverName", { required: true,
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
          <button type="button" className="cancel-button" onClick={() => openModal({
            type: "server"
          })}>
            Back
          </button>
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
import { openModal } from '../../actions/modal_actions';

const mSTP = (state) => ({
  serverErrors: state.errors.server,
  currentUser: state.session
});

const mDTP = (dispatch) => ({
  createServer: (server) => dispatch(createServer(server)),
  openModal: (modal) => dispatch(openModal(modal))
});

export default connect(mSTP, mDTP)(CreateServerModal);
