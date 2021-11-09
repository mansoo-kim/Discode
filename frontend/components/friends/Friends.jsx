const Friends = () => {
  return (
    <div>
      <h1>
        friends list
      </h1>

    </div>
  )
}

import { connect } from 'react-redux';
import { selectFriends, selectOutgoing, selectIncoming } from '../../reducers/selectors';

const mSTP = (state) => ({
  friends: selectFriends(state),
  outgoing: selectOutgoing(state),
  incoming: selectIncoming(state),
});

export default connect(mSTP)(Friends);
