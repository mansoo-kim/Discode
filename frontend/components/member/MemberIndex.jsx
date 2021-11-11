import MemberIndexItem from "./MemberIndexItem";

const MemberIndex = ({ members }) => {

  return (
    <div className="member-index-container">
      <div className="members-index-header">
        MEMBERS - { members.length }
      </div>
      <div className="members-index">
        {members.map(member => <MemberIndexItem key={member.id} member={member} />)}
      </div>
    </div>
  )
}

export default MemberIndex
