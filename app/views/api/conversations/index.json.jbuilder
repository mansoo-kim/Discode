json.conversations do
  @conversations.each do |conversation|
    json.set! conversation.id do
      json.partial! 'api/conversations/conversation', conversation: conversation
    end
  end
end

json.members do
  @conversations.each do |conversation|
    conversation.members.each do |member|
      json.set! member.id do
        json.partial! 'api/users/user', user: member
      end
    end
  end
end
