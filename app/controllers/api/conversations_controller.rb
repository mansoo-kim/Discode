class Api::ConversationsController < ApplicationController
  def index
    @conversations = current_user.conversations
    render 'api/conversations/index'
  end

  def show
    @conversation = current_user.conversations.includes(:members).find_by(id: params[:id])
    render 'api/conversations/show'
  end
end
