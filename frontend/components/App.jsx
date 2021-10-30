import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../utils/route_utils';
import Splash from './splash/Splash';
import LoginFormContainer from './session/LoginFormContainer';
import RegisterFormContainer from './session/RegisterFormContainer';
import Home from './home/Home';

const App = () => {
  return (
    <Switch>
      <Route exact path='/' component={Splash} />
      <AuthRoute path='/register' component={RegisterFormContainer} />
      <AuthRoute path='/login' component={LoginFormContainer} />
      <ProtectedRoute component={Home} />
    </Switch>
  )
}

export default App
