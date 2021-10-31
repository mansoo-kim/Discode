json.extract! server, :id, :name, :owner_id
json.channels server.channels.map(&:id)
