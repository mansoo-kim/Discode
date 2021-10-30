import { Route } from 'react-router-dom';
import ServerIndexContainer from '../server/ServerIndexContainer';
import ServerContainer from '../server/ServerContainer';


const Home = () => {
  return (
    <div className="home">
      <ServerIndexContainer />
      <Route path='/channels/:serverId/:channelId' component={ServerContainer} />
    </div>
  )
}

export default Home
