import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ServerIndexItem from './ServerIndexItem';

const ServerIndex = ({ servers, requestServers }) => {
  useEffect(() => {
    requestServers();
  }, [])

  return (
    <div className="server-index">
      <ul>
        <li>
          <Link to='/@me'>Home</Link>
        </li>
        {servers.map(server => <ServerIndexItem key={server.id} server={server} />)}
      </ul>
    </div>
  )
}

export default ServerIndex
