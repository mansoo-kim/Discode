import { Route, Link } from 'react-router-dom';
import ConversationIndex from '../conversation/ConversationIndex';
import ConversationContainer from '../cc/ConversationContainer';
import CurrentUser from '../user/CurrentUser';
import Friends from '../friends/Friends';

const Home = ({ match }) => {
  return (
    <div className="main-view">
      <div className="server-nav-column">
        <div>
          <div className="dummy-search-container">
            <div className="dummy-search">Find or start a conversation</div>
          </div>

          <Link className={`friends-link ${match.url === "/channels/@me" ? "active" : ""}`} to='/channels/@me'>
            <img src='https://raw.githubusercontent.com/mansookim/Discode/0d26be6a765cb13972bba354d10d5463fc80ae42/app/assets/images/wave_icon.svg' />
            Friends
          </Link>

          <ConversationIndex activeConversationId={parseInt(match.params.conversationId)}/>
        </div>

        <CurrentUser />
      </div>

      <Route exact path='/channels/@me' component={Friends} />
      <Route path='/channels/@me/:ccId' component={ConversationContainer} />
    </div>
  )
}

export default Home
