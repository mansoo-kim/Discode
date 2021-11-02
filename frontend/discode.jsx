import { render } from 'react-dom';
import Root from './components/Root';
import configureStore from './store/store';
import { registerNewUser, login, logout } from './actions/session_actions';

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById('root');

  const preloadedState = window.currentUser ? {
    entities: {
      users: { [window.currentUser.id]: window.currentUser }
    },
    session: window.currentUser
  } : {}

  const store = configureStore(preloadedState);

  window.store = store;
  window.registerNewUser = registerNewUser;
  window.login = login;
  window.logout = logout;

  render(<Root store={store} />, root);
});
