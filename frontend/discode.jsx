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
  delete window.currentUser;

  const store = configureStore(preloadedState);

  window.store = store;

  render(<Root store={store} />, root);
});
