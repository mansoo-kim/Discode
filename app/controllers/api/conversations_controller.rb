class Api::ConversationsController < ApplicationController
  def index
    @conversations = current_user.conversations.includes(:members)
    render 'api/conversations/index'
  end

  def show
    @conversation = current_user.conversations.includes(:members, :messages).find_by(id: params[:id])
    render 'api/conversations/show'
  end

  def create
    found_c = current_user.conversations.includes(:members).select{ |c| c.member_ids.sort == conversation_params[:member_ids].map(&:to_i) }
    if found_c[0]
      @conversation = found_c[0]
      render 'api/conversations/show'
      return
    end

    @conversation = Conversation.new()
    @conversation.member_ids = conversation_params[:member_ids]

    if @conversation.save
      render 'api/conversations/show'
    else
      render json: @conversation.errors, status: 422
    end
  end

  def update
    @conversation = current_user.conversations.includes(:members).find_by(id: params[:id])

    if @conversation.update(conversation_params)
      render 'api/conversations/show'
    else
      render json: @conversation.errors, status: 422
    end
  end

  private

  def conversation_params
    params.require(:conversation).permit(:name, member_ids: [])
  end
end
