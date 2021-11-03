import { useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import ServerIndex from '../server/ServerIndex';
import ProtectedServer from '../server/Server';
import Home from '../home/Home';
import ModalManager from '../modal/ModalManager';

const Main = ({ currentUser, requestUser}) => {
  useEffect(() => {
    requestUser(currentUser.id);
  }, [])

  return (
    <div className="main">
      <ModalManager />
      <ServerIndex />
      <Switch>
        <Route path='/channels/@me' component={Home} />
        <Route path='/channels/:serverId?' component={ProtectedServer} />
        <Redirect to='/channels/@me' />
      </Switch>
    </div>
  )
}

import { connect } from 'react-redux';
import { requestUser } from '../../actions/user_actions';

const mSTP = (state) => ({
  currentUser: state.session
});

const mDTP = (dispatch) => ({
  requestUser: (id) => dispatch(requestUser(id))
});

export default connect(mSTP, mDTP)(Main);
