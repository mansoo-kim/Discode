const UserPfp = ({ user }) => {

  const imgSrc = user.pfpUrl || 'https://raw.githubusercontent.com/mansoo-kim/Discode/main/app/assets/images/icon_clyde_white_RGB.png'
  return (
    <div className={`pfp-container ${user.pfpUrl ? '' : 'default-pfp'}`}>
      <img src={imgSrc} className='pfp' />
    </div>
  )
}

export default UserPfp
