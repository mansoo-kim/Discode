import { connect } from 'react-redux';
import CCView from './CCView';
import { requestConversation } from '../../actions/conversation_actions';
import { selectMembers } from '../../reducers/selectors';

const mSTP = (state, ownProps) => ({
  cc: state.entities.conversations[ownProps.match.params.ccId],
  type: 'Conversation',
  members: selectMembers(state, "conversations", ownProps.match.params.ccId)
});

const mDTP = (dispatch) => ({
  requestCC: (conversationId) => dispatch(requestConversation(conversationId))
});

const ConnectedCCView = connect(mSTP, mDTP)(CCView);

import { Route, Redirect } from 'react-router-dom';

const mSTP2 = (state, ownProps) => ({
  isMember: state.session.conversations?.includes(parseInt(ownProps.match.params.ccId))
});

const ProtectedConversation = ({ isMember, path }) => {
  if ( isMember === undefined ) return null;
  return (
    <Route
      path={path}
      render={props => (
        isMember ? <ConnectedCCView {...props} /> : <Redirect to='/@me' />
      )}
    />
  )
};

export default connect(mSTP2)(ProtectedConversation);
