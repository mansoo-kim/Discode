import { useEffect } from 'react'
import ServerIndexItem from './ServerIndexItem'

const ServerIndex = ({ servers, requestServers }) => {
  useEffect(() => {
    requestServers();
  }, [])

  return (
    <div className="server-index">
      <ul>
        {servers.map(server => <ServerIndexItem key={server.id} server={server} />)}
      </ul>
    </div>
  )
}

export default ServerIndex
