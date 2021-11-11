import { Route } from 'react-router-dom';
import ConversationIndex from '../conversation/ConversationIndex';
import ConversationContainer from '../cc/ConversationContainer';
import CurrentUser from '../user/CurrentUser';
import Friends from '../friends/Friends';

const Home = ({ match }) => {
  return (
    <div className="main-view">
      <div className="server-nav-column">
        <div>
          <div className="server-header">
            <div className="dummy-search-container">
              <div className="dummy-search">Find or start a conversation</div>
            </div>
          </div>

          <ConversationIndex match={match} />
        </div>

        <CurrentUser />
      </div>

      <Route exact path='/channels/@me' component={Friends} />
      <Route path='/channels/@me/:ccId' component={ConversationContainer} />
    </div>
  )
}

export default Home
