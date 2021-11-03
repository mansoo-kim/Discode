const MemberIndexItem = ({ member }) => {
  const imgSrc = currentUser.pfpUrl || 'https://raw.githubusercontent.com/mansookim/Discode/main/app/assets/images/icon_clyde_white_RGB.png'
  return (
    <li>
      <img src={imgSrc} className="pfp" />
      { member.username }
    </li>
  )
}

export default MemberIndexItem
