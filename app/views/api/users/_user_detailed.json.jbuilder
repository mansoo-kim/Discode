json.extract! user, :id, :username, :tag, :email
json.pfpUrl url_for(user.pfp) if user.pfp.attached?
json.servers user.servers.map(&:id);
json.conversations user.conversations.map(&:id);
