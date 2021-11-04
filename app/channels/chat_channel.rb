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
    message = Message.new(data)
    if message.save
      ChatChannel.broadcast_to(@chat, message)
    end
  end

  # def load
  #   messages = Message.all
  #   socket = { messages: messages, type: 'messages' }
  #   ChatChannel.broadcast_to('chat_channel', socket)
  # end

  def unsubscribed
  end

end
