import { Route } from 'react-router-dom';
import ConversationIndexContainer from '../conversation/ConversationIndexContainer';
import ConversationContainer from '../conversation/ConversationContainer';

const Home = () => {
  return (
    <div className="server-main">
      <div className="server-nav">
        DIRECT MESSAGES
        <ConversationIndexContainer />
      </div>

      <Route path='/@me/:conversationId' component={ConversationContainer} />
    </div>
  )
}

export default Home
