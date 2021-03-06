import { closeModalOnEscape } from '../../utils/close_utils';
import ServerIcon from '../server/ServerIcon';
import { FaTimes } from 'react-icons/fa';
import { useForm } from 'react-hook-form';

const JoinServerModal = ({ closeModal, servers, currentUserId, openModal, createMembership, history }) => {

  closeModalOnEscape(closeModal);

  const { register, formState: { isDirty }, handleSubmit, watch } = useForm({
    mode: 'onChange',
    shouldFocusError: false
  });

  const selectedServerId = watch("serverId");

  const onSubmit = (data) => {
    createMembership({
      joinable_id: data.serverId,
      joinable_type: "Server",
      user_id: currentUserId
    })
      .then(({ membership }) => history.push(`/channels/${membership.joinableId}`))
      .then(() => closeModal());
  }

  const showJoinableServers = () => {
    if (servers.length) {
      return (
        <>
        { servers.map(server => {
          return (
            <label key={server.id} className={`server-modal-item ${parseInt(selectedServerId) === server.id ? "selected" : ""}`}>
              <div className="server-info">
                <ServerIcon name={server.name} iconUrl={server.iconUrl} />
                { server.name }
              </div>
              <input type="radio" id="server" value={server.id} {...register("serverId")} />
            </label>
          )
        })}
        </>
      )
    } else {
      return (
        <div className="server-modal-item">
          There are no servers for you to join right now. Ask your friends to make one!
        </div>
      )
    }
  }

  return (
    <div className="modal white">
      <div className="close-button" onClick={closeModal}>
        <FaTimes size={20} />
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>

        <div className="modal-header">
          <h2>Join a Server</h2>
          <p>Select an existing server to join.</p>
        </div>

        <div className="modal-content">
          <div className="server-join-options">
            { showJoinableServers() }
          </div>
        </div>

        <div className="buttons-container">
          <button type="button" className="cancel-button" onClick={() => openModal({
            type: "server"
          })}>
            Back
          </button>
          <button className="submit-button blue-button" disabled={!isDirty}>
            <div>Join Server</div>
          </button>
        </div>

      </form>
    </div>
  )
}

import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_actions';
import { selectJoinableServers } from '../../reducers/selectors';
import { createMembership } from '../../actions/membership_actions';

const mSTP = (state) => ({
  servers: selectJoinableServers(state),
  currentUserId: state.session.id
})

const mDTP = {
  openModal,
  createMembership
}

export default connect(mSTP, mDTP)(JoinServerModal);
