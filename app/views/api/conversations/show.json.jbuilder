json.conversation do
  json.partial! 'api/conversations/conversation', conversation: @conversation
  json.members @conversation.members.map(&:id)
end

json.users do
  @conversation.members.each do |member|
    json.set! member.id do
      json.partial! 'api/users/user', user: member
    end
  end
end
