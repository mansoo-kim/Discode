json.extract! user, :id, :username, :tag, :email, :updated_at
json.servers user.servers.map(&:id);
json.conversations user.conversations.map(&:id);
