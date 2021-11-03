json.extract! user, :id, :username, :tag
json.pfpUrl url_for(user.pfp) if user.pfp.attached?
