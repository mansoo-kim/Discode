# json.extract! conversation, :id, :name
json.id conversation.id
json.name conversation.name if conversation.name
json.members conversation.members.map(&:id)
