import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';

const CreateServerModal = ({ serverErrors, currentUser, closeModal, createServer, resetServerErrors, history }) => {
  const { register, formState: { errors }, handleSubmit } = useForm({
    mode: 'onChange',
    shouldFocusError: false,
    defaultValues: { serverName: `${currentUser.username}'s server`}
  });

  useEffect(() => {
    return () => resetServerErrors();
  }, [])

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
    <div className="modal">
      <button onClick={closeModal}>X</button>

      <form onSubmit={handleSubmit(onSubmit)}>
        <h2>Customize your server</h2>
        <p>Give your new server a personality with a name and an icon. You can always change it later.</p>

        <div>
          <input type="file" {...register("iconFile")} onChange={onFileChange} />
          { preview }
        </div>

        <div>
          <label>SERVER NAME { serverErrors.name }</label>
          <input type="text" {...register("serverName", { required: true })} />
        </div>

        <p>By creating a server, you agree to Discode's Community Guidelines.</p>

        <button disabled={!!errors["serverName"]}>
          Create
        </button>
      </form>
    </div>
  )
}

import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';
import { createServer, resetServerErrors } from '../../actions/server_actions';

const mSTP = (state) => ({
  serverErrors: state.errors.server,
  currentUser: state.session
});

const mDTP = (dispatch) => ({
  closeModal: () => dispatch(closeModal()),
  createServer: (server) => dispatch(createServer(server)),
  resetServerErrors: () => dispatch(resetServerErrors())
});

export default connect(mSTP, mDTP)(CreateServerModal);
