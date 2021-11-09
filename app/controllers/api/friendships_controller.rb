class Api::FriendshipsController < ApplicationController
  def index
    @user = current_user

    render 'api/friendships/index'
  end

  private
  def friendship_params
    params.require(:membership).permit(:user_id, :joinable_id, :joinable_type)
  end
end
