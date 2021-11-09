class Api::FriendshipsController < ApplicationController
  def index
    @user = current_user

    render 'api/friendships/index'
  end

  def create
    # @user = current_user
    # @friend = User.find_by(id: friendship_params[:friend_id])
    # @user.outgoings.append(@friend)
    # @friend.incomings.append(@user)
    @friendship = Friendship.create(user_id: current_user.id, friend_id: friendship_params[:friend_id], status: 0)
    Friendship.create(friend_id: current_user.id, user_id: friendship_params[:friend_id], status: 1)

    render 'api/friendships/show'
  end

  def update


  end

  def destroy
    @friendship = Friendship.find_by(user_id: friendship_params[:user_id], friend_id: friendship_params[:friend_id])
    friendship = Friendship.find_by(user_id: friendship_params[:friend_id], friend_id: current_user.id)

    if @friendship.destroy && friendship.destroy
      render 'api/friendships/show'
    else
      render json: @friendship.errors, status: 422
    end
  end

  private
  def friendship_params
    params.require(:friendship).permit(:user_id, :friend_id)
  end
end
