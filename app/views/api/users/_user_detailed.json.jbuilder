json.extract! user, :id, :username, :tag, :email
json.pfpUrl url_for(user.pfp) if user.pfp.attached?
json.servers user.servers.map(&:id);
json.conversations user.conversations.map(&:id);
json.friends user.friends.map(&:id);
json.outgoing user.outgoing.map(&:id);
json.incoming user.incoming.map(&:id);
