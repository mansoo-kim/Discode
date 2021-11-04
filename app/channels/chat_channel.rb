class ChatChannel < ApplicationCable::Channel
  def subscribed
    if (params[:type] == "Channel")
      @chat = Channel.find_by(id: params[:id])
    else
      @chat = Conversation.find_by(id: params[:id])
    end

    stream_for @chat
  end

  def receive(data)
    @message = Message.new(data)
    if @message.save
      ChatChannel.broadcast_to(@chat, message_json)
    end
  end

  def update(data)
    @message = Message.find_by(id: data['id'])
    if @message.update(body: data['body'])
      ChatChannel.broadcast_to(@chat, message_json)
    end
  end

  # def unsubscribed
  # end

  private
  def message_json
    JSON.parse(
      ApplicationController.render(
        partial: 'api/messages/message',
        locals: { message: @message }))
  end
end
