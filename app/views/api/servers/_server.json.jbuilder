json.extract! server, :id, :name
json.channels server.channels.map(&:id)
