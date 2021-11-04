json.extract! server, :id, :name, :owner_id
json.channels server.channels.map(&:id)

json.iconUrl url_for(server.icon) if server.icon.attached?
