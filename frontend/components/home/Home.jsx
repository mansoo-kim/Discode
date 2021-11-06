import { Route } from 'react-router-dom';
import ConversationIndex from '../conversation/ConversationIndex';
import ConversationContainer from '../cc/ConversationContainer';
import CurrentUser from '../user/CurrentUser';

const Home = () => {
  return (
    <div className="main-view">
      <div className="server-nav-column">
        <div>
          <ConversationIndex />
        </div>

        <CurrentUser />
      </div>

      <Route path='/channels/@me/:ccId' component={ConversationContainer} />
    </div>
  )
}

export default Home
