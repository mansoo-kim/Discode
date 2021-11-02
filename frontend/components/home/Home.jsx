import { Route } from 'react-router-dom';
import ConversationIndex from '../conversation/ConversationIndex';
import ConversationContainer from '../cc/ConversationContainer';

const Home = () => {
  return (
    <div className="server-main">
      <div className="server-nav">
        <div>
          DIRECT MESSAGES
          <ConversationIndex />
        </div>
      </div>

      <Route path='/@me/:ccId' component={ConversationContainer} />
    </div>
  )
}

export default Home
