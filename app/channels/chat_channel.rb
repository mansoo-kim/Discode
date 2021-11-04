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
      res = {
        message: message_json,
        type: "message"
      }
      ChatChannel.broadcast_to(@chat, res)
    end
  end

  def update(data)
    @message = Message.find_by(id: data['id'])
    if @message.update(body: data['body'])
      res = {
        message: message_json,
        type: "message"
      }
      ChatChannel.broadcast_to(@chat, res)
    end
  end

  def delete(data)
    @message = Message.find_by(id: data['id'])
    res = {
      message: message_json,
      type: "remove"
    }
    if @message.destroy
      ChatChannel.broadcast_to(@chat, res)
    end
  end

  private
  def message_json
    JSON.parse(
      ApplicationController.render(
        partial: 'api/messages/message',
        locals: { message: @message }))
  end
end
