json.extract! user, :id, :username, :tag
json.set! :status, current_user.friend_status(user)
json.pfpUrl url_for(user.pfp) if user.pfp.attached?
