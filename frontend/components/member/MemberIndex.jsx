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

export default MemberIndex
