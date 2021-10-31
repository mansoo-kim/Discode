import { Route } from 'react-router-dom';
import ConversationIndexContainer from '../conversation/ConversationIndexContainer';
import ConversationContainer from '../cc/ConversationContainer';

const Home = () => {
  return (
    <div className="server-main">
      <div className="server-nav">
        DIRECT MESSAGES
        <ConversationIndexContainer />
      </div>

      <Route path='/@me/:ccId' component={ConversationContainer} />
    </div>
  )
}

export default Home
