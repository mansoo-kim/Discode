import { Route, Switch, Redirect } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../utils/route_utils';
import Splash from './splash/Splash';
import LoginFormContainer from './session/LoginFormContainer';
import RegisterFormContainer from './session/RegisterFormContainer';
import Main from './main/Main';

const App = () => {
  return (
    <Switch>
      <Route exact path='/' component={Splash} />
      <AuthRoute path='/register' component={RegisterFormContainer} />
      <AuthRoute path='/login' component={LoginFormContainer} />
      <ProtectedRoute path='/' component={Main} />
    </Switch>
  )
}

export default App
