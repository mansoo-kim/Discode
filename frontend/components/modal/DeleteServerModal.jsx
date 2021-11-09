import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

const DeleteServerModal = ({ server, deleteServer, closeModal, history }) => {

  const handleEscapeExit = (e) => {
    if (e.keyCode === 27) {
      e.stopImmediatePropagation();
      closeModal();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleEscapeExit, true);
    return () => document.removeEventListener("keydown", handleEscapeExit, true);
   });

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
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2>Delete '{server.name}'</h2>

        <div className="modal-content">

          <p className="delete-server-message">Are you sure you want to delete <span>{server.name}</span>? This action cannot be undone.</p>

          <label>ENTER SERVER NAME</label>

          <input type="text" spellCheck={false} autoFocus className="text-input" {...register("serverName", { validate: value => value === server.name || "You didn't enter the server name correctly" })} />
          { errors.serverName && <div className="error-message">{ errors.serverName?.message }</div> }

        </div>

        <div className="buttons-container">
          <button type="button" className="cancel-button" onClick={closeModal}>Cancel</button>
          <button className="submit-button red-button">
            <div>Delete Server</div>
          </button>
        </div>

      </form>
    </div>
  )
}

import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';
import { deleteServer } from '../../actions/server_actions';

const mDTP = (dispatch) => ({
  deleteServer: (serverId) => dispatch(deleteServer(serverId))
});

export default connect(null, mDTP)(DeleteServerModal);
