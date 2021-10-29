import { Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../utils/route_utils';
import LoginFormContainer from './session/LoginFormContainer';
import RegisterFormContainer from './session/RegisterFormContainer';

const App = () => {
  return (
    <div>
      <Switch>
        <AuthRoute path='/register' component={RegisterFormContainer} />
        <AuthRoute path='/login' component={LoginFormContainer} />
      </Switch>
    </div>
  )
}

export default App
