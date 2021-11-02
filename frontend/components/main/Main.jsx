import { Route } from 'react-router-dom';
import ServerIndex from '../server/ServerIndex';
import ProtectedServer from '../server/Server';
import Home from '../home/Home';
import ModalManager from '../modal/ModalManager';
import CurrentUser from '../user/CurrentUser';

const Main = () => {
  return (
    <div className="main">
      <ModalManager />
      <ServerIndex />
      <CurrentUser />
      <Route path='/channels/:serverId' component={ProtectedServer} />
      <Route path='/@me' component={Home} />
    </div>
  )
}

export default Main
