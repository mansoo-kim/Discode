import MemberIndexItem from "./MemberIndexItem"

const MemberIndex = ({ members }) => {
  return (
    <ul>
      {members.map(member => <MemberIndexItem key={member.id} member={member} />)}
    </ul>
  )
}

export default MemberIndex
