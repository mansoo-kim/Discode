import { Link } from 'react-router-dom';
import { MdOutlineFileDownload } from 'react-icons/md';

const Splash = ({ loggedIn }) => {

  return (
    <div className="splash">
      <div className="blue">

        <div className="main-images">
          <div className="background"></div>
          <div className="left"></div>
          <div className="right"></div>
        </div>

        <header>
          <nav className="splash-nav">
            <div className="splash-logo">
              <img src='https://raw.githubusercontent.com/mansoo-kim/Discode/main/app/assets/images/icon_clyde_white_RGB.png' className="splash-logo-icon" />
              <span>Discode</span>
            </div>

            <ul>
              <li><a href="https://github.com/mansoo-kim/Discode" target="_blank">Github</a></li>
              <li><a href="https://www.linkedin.com/in/mansoo-kim/" target="_blank">LinkedIn</a></li>
              <li><a href="https://mansoo.net/" target="_blank">Portfolio</a></li>
            </ul>
            <div className="app-link">
              <Link className="button" to='/login'>{loggedIn ? 'Open Discode' : 'Login'}</Link>
            </div>
          </nav>
        </header>

        <main className="splash-main">
          <div className="main-content">

            <h1 className="main-header">
              IMAGINE A PLACE...
            </h1>

            <div className="description">
              ...where you can belong to a school club, a gaming group, or a worldwide art community. Where just you and a handful of friends can spend time together. A place that makes it easy to talk every day and hang out more often.
            </div>

            <div className="header-buttons">
              <div className="splash-button download button">
                <MdOutlineFileDownload className="download-icon" size={25} />
                Download for { window.navigator.platform.includes('Win') ? 'Windows' : 'Mac'}
              </div>
              <Link className="splash-button open button" to='/login'>Open Discode in your browser</Link>
            </div>

          </div>
        </main>
      </div>

      <section className="splash-rows">
        <div>

        </div>



      </section>
    </div>
  )
}

import { connect } from 'react-redux';

const mSTP = (state) => ({
  loggedIn: Boolean(state.session.id)
});


export default connect(mSTP)(Splash);
