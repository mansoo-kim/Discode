import { useForm } from 'react-hook-form';

const DeleteServerModal = ({ server, deleteServer, closeModal, history }) => {
  const { register, formState: { errors }, handleSubmit, getValues } = useForm({
    shouldFocusError: false,
    reValidateMode: 'onSubmit',
  });

  const onSubmit = () => {
    deleteServer(server.id)
      .then(() => {
        if (history.location.pathname !== '/channels/@me') history.push('/channels/@me')
      })
      .then(() => closeModal());
  }

  return (
    <div className="modal">

      <h2>Delete '{server.name}'</h2>
      <p>Are you sure you want to delete {server.name}? This action cannot be undone.</p>

      <form onSubmit={handleSubmit(onSubmit)}>
        ENTER SERVER NAME

        <input type="text" {...register("serverName", { validate: value => value === server.name || "You didn't enter the server name correctly" })} />
        { errors.serverName?.message }
        <div>
          <button type="button" onClick={closeModal}>Cancel</button>
          <button>Delete</button>
        </div>
      </form>

    </div>
  )
}

import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';
import { deleteServer } from '../../actions/server_actions';

const mDTP = (dispatch) => ({
  closeModal: () => dispatch(closeModal()),
  deleteServer: (serverId) => dispatch(deleteServer(serverId))
});

export default connect(null, mDTP)(DeleteServerModal);
