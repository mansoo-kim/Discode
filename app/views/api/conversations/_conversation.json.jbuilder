# json.extract! conversation, :id, :name
json.id conversation.id
json.name conversation.display_name
json.members conversation.members.map(&:id)
