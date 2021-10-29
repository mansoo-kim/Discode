import { AuthRoute, ProtectedRoute } from '../utils/route_utils';
import LoginFormContainer from './session/LoginFormContainer';

const App = () => {
  return (
    <div>
      <h1>Hello Discode</h1>
      <AuthRoute path='/login' component={LoginFormContainer} />
    </div>
  )
}

export default App
