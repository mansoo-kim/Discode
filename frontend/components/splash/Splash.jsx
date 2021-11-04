import { Link } from 'react-router-dom';

const Splash = ({ loggedIn }) => {
  const appLink = loggedIn ? (
    <Link to='/channels/@me'>Open Discode</Link>
  ) : (
    <Link to='/login'>Login</Link>
  )

  return (
    <div className="splash">
      <nav className="splash-nav">
        <div className="splash-logo">
          <img src='https://raw.githubusercontent.com/mansookim/Discode/main/app/assets/images/icon_clyde_white_RGB.png' className="splash-logo-icon" />
          <span>Discode</span>
        </div>

        <ul>
          <li><a href="#">Github</a></li>
          <li><a href="#">LinkedIn</a></li>
          <li><a href="#">Portfolio</a></li>
        </ul>
        <div className="app-link">{ appLink }</div>
      </nav>
    </div>
  )
}

import { connect } from 'react-redux';

const mSTP = (state) => ({
  loggedIn: Boolean(state.session.id)
});


export default connect(mSTP)(Splash);
