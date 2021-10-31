import { Route } from 'react-router-dom';
import ServerIndex from '../server/ServerIndex';
import Server from '../server/Server';
import Home from '../home/Home';

const Main = () => {
  return (
    <div className="main">
      <ServerIndex />
      <Route path='/@me' component={Home} />
      <Route path='/channels/:serverId/:channelId' component={Server} />
    </div>
  )
}

export default Main
