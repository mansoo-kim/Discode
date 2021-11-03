json.extract! server, :id, :name, :owner_id
json.iconUrl url_for(server.icon) if server.icon.attached?

json.channels server.channels.map(&:id)
