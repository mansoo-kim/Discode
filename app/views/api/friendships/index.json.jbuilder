@user.friends.each do |friend|
  json.set! friend.id do
    json.partial! 'api/users/user', user: friend
  end
end

@user.outgoings.each do |outgoing|
  json.set! outgoing.id do
    json.partial! 'api/users/user', user: outgoing
  end
end

@user.incomings.each do |incoming|
  json.set! incoming.id do
    json.partial! 'api/users/user', user: incoming
  end
end
