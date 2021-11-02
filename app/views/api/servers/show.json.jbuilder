json.server do
  json.partial! 'api/servers/server', server: @server
  json.members @server.members.map(&:id)
end

json.channels do
  @server.channels.each do |channel|
    json.set! channel.id do
      json.partial! 'api/channels/channel', channel: channel
    end
  end
end

json.members do
  @server.members.each do |member|
    json.set! member.id do
      json.partial! 'api/users/user', user: member
    end
  end
end
