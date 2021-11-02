import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { updateServer, deleteServer } from '../../actions/server_actions';
import SettingsPage from '../settings/SettingsPage';

const mSTP = () => ({
  type: "Server"
})

const mDTP = (dispatch) => ({
  updateSubject: (serverId, server) => dispatch(updateServer(serverId, server)),
  deleteSubject: (serverId) => dispatch(deleteServer(serverId))
});

export default withRouter(connect(mSTP, mDTP)(SettingsPage));
