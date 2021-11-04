import { connect } from 'react-redux';
import CCView from './CCView';
import { selectChannel } from '../../reducers/selectors';

const mSTP = (state, ownProps) => ({
  cc: selectChannel(state, ownProps.match.params.serverId, ownProps.match.params.ccId),
  type: 'Channel'
});

const mDTP = () => ({
  requestCC: () => (null)
});

export default connect(mSTP, mDTP)(CCView);
