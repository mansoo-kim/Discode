class Api::ConversationsController < ApplicationController
  def index
    @conversations = current_user.conversations.includes(:members)
    render 'api/conversations/index'
  end

  def show
    @conversation = current_user.conversations.includes(:members).find_by(id: params[:id])
    render 'api/conversations/show'
  end

  def create
    @conversation = Conversation.new();
    @conversation.member_ids = conversation_params[:member_ids]

    if @conversation.save
      render 'api/conversations/show'
    else
      render json: @conversation.errors, status: 422
    end
  end

  private

  def conversation_params
    params.require(:conversation).permit(member_ids: [])
  end
end
