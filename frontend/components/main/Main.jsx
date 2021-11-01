import { Route } from 'react-router-dom';
import ServerIndex from '../server/ServerIndex';
import Server from '../server/Server';
import Home from '../home/Home';
import ModalManager from '../modal/ModalManager';

const Main = () => {
  return (
    <div className="main">
      <ServerIndex />
      <Route path='/@me' component={Home} />
      <Route path='/channels/:serverId' component={Server} />
      <ModalManager />
    </div>
  )
}

export default Main
