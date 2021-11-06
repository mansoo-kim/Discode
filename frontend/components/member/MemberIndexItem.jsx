import UserPfp from "../user/UserPfp"

const MemberIndexItem = ({ member }) => {

  return (
    <div className="member-index-item">
      <UserPfp user={member} />
      { member.username }
    </div>
  )
}

export default MemberIndexItem
