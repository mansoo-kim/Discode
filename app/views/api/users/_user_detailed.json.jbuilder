json.extract! user, :id, :username, :tag, :email
json.servers user.servers.map(&:id);
json.conversations user.conversations.map(&:id);
