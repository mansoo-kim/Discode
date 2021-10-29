import { Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../utils/route_utils';
import Splash from './splash/Splash';
import LoginFormContainer from './session/LoginFormContainer';
import RegisterFormContainer from './session/RegisterFormContainer';
import Home from './home/Home';

const App = () => {
  return (
    <div>
      <Route exact path='/' component={Splash} />
      <AuthRoute path='/register' component={RegisterFormContainer} />
      <AuthRoute path='/login' component={LoginFormContainer} />
      <ProtectedRoute path='/@me' component={Home} />
    </div>
  )
}

export default App
