import { connect } from 'react-redux';
import CCView from './CCView';
import { requestConversation } from '../../actions/conversation_actions';

const mSTP = (state, ownProps) => ({
  cc: state.entities.conversations[ownProps.match.params.ccId],
  type: 'conversation'
});

const mDTP = (dispatch) => ({
  requestCC: (conversationId) => dispatch(requestConversation(conversationId))
});

const ConnectedCCView = connect(mSTP, mDTP)(CCView);

import { Route, Redirect } from 'react-router-dom';

const mSTP2 = (state, ownProps) => ({
  isMember: state.session.conversations.includes(parseFloat(ownProps.match.params.ccId))
});

const ProtectedConversation = ({ isMember, path }) => (
  <Route
    path={path}
    render={props => (
      isMember ? <ConnectedCCView {...props} /> : <Redirect to='/@me' />
    )}
  />
);

export default connect(mSTP2)(ProtectedConversation);
