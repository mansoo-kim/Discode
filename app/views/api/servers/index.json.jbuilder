@servers.each do |server|
  json.set! server.id do
    json.extract! server, :name
  end
end
