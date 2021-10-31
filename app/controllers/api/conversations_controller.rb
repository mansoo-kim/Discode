class Api::ConversationsController < ApplicationController
  def index
    @conversations = current_user.conversations
    render 'api/conversations/index'
  end

  def show
    @conversation = Conversation.includes(:members).find_by(id: params[:id])
    render 'api/conversations/show'
  end
end
