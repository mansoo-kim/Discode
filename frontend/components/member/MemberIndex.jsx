import MemberIndexItem from "./MemberIndexItem";

const MemberIndex = ({ members }) => {
  return (
    <div className="member-index">
      <ul>
        {members.map(member => <MemberIndexItem key={member.id} member={member} />)}
      </ul>
    </div>
  )
}

import { connect } from 'react-redux';
import { selectMembers } from '../../reducers/selectors';

const mSTP = (state, ownProps) => ({
  members: selectMembers(state, ownProps.type, ownProps.id)
});

export default connect(mSTP)(MemberIndex);
