import { useEffect} from 'react';
import { useForm } from 'react-hook-form';

const CreateServerModal = ({ serverErrors, currentUser, closeModal, createServer, resetServerErrors, history }) => {
  const { register, formState: { errors }, handleSubmit } = useForm({
    mode: 'onChange',
    shouldFocusError: false,
    defaultValues: { serverName: `${currentUser.username}'s server`}
  });

  const onSubmit = (data) => {
    const server = {
      name: data.serverName
    };
    createServer(server)
      .then(({ res })=> history.push(`/channels/${res.server.id}/${res.server.channels[0]}`))
      .then(() => closeModal())
  }

  useEffect(() => {
    return () => resetServerErrors();
  }, [])

  return (
    <div className="modal">
      <button onClick={closeModal}>X</button>

      <h2>Customize your server</h2>
      <p>Give your new server a personality with a name and an icon. You can always change it later.</p>
      <label>SERVER NAME { serverErrors.name }
        <input type="text" {...register("serverName", { required: true })} />
      </label>
      <p>By creating a server, you agree to Discode's Community Guidelines.</p>

      <button onClick={handleSubmit(onSubmit)} disabled={!!errors["serverName"]}>
        Create
      </button>
    </div>
  )
}

import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';
import { createServer, resetServerErrors } from '../../actions/server_actions';

const mSTP = (state) => ({
  serverErrors: state.errors.server,
  currentUser: state.entities.users[state.session.id]
});

const mDTP = (dispatch) => ({
  closeModal: () => dispatch(closeModal()),
  createServer: (server) => dispatch(createServer(server)),
  resetServerErrors: () => dispatch(resetServerErrors())
});

export default connect(mSTP, mDTP)(CreateServerModal);
