import { Route } from 'react-router-dom';
import ServerIndexContainer from '../server/ServerIndexContainer';
import ServerContainer from '../server/ServerContainer';


const Home = () => {
  return (
    <div>
      this is home
      <ServerIndexContainer />
      <Route path='/channels/:serverId/:channelId' component={ServerContainer} />
    </div>
  )
}

export default Home
