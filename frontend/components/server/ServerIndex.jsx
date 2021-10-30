import { useEffect } from 'react'
import ServerIndexItem from './ServerIndexItem'

const ServerIndex = ({ servers, requestServers }) => {
  console.log(servers);

  useEffect(() => {
    requestServers();
  }, [])

  return (
    <ul>
      {servers.map(server => <ServerIndexItem key={server.id} server={server} />)}
    </ul>
  )
}

export default ServerIndex
