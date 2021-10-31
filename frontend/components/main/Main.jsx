import { Route } from 'react-router-dom';
import ServerIndexContainer from '../server/ServerIndexContainer';
import ServerContainer from '../server/ServerContainer';
import Home from '../home/Home';

const Main = () => {
  return (
    <div className="main">
      <ServerIndexContainer />
      <Route path='/@me' component={Home} />
      <Route path='/channels/:serverId/:channelId' component={ServerContainer} />
    </div>
  )
}

export default Main
