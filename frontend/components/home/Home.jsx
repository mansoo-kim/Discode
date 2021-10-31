import { Route } from 'react-router-dom';
import ConversationIndex from '../conversation/ConversationIndex';
import ConversationContainer from '../cc/ConversationContainer';
import CurrentUser from '../user/CurrentUser';

const Home = () => {
  return (
    <div className="server-main">
      <div className="server-nav">
        <div>
          DIRECT MESSAGES
          <ConversationIndex />
        </div>
        <CurrentUser />
      </div>

      <Route path='/@me/:ccId' component={ConversationContainer} />
    </div>
  )
}

export default Home
