import { connect } from 'react-redux';
import MemberIndex from './MemberIndex';
import { selectMembers } from '../../reducers/selectors';

const mSTP = (state, ownProps) => ({
  members: selectMembers(state, ownProps.type, ownProps.id)
});

export default connect(mSTP)(MemberIndex);
