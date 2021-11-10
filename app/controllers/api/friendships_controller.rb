class Api::FriendshipsController < ApplicationController
  def index
    @user = current_user

    render 'api/friendships/index'
  end

  def create
    @friendship = Friendship.create(user_id: current_user.id, friend_id: friendship_params[:friend_id], status: 1)
    Friendship.create(friend_id: current_user.id, user_id: friendship_params[:friend_id], status: 2)

    render 'api/friendships/show'
  end

  def update
    @friendship = Friendship.find_by(user_id: friendship_params[:user_id], friend_id: friendship_params[:friend_id])
    friendship = Friendship.find_by(user_id: friendship_params[:friend_id], friend_id: current_user.id)

    if @friendship.update(status: 3) && friendship.update(status: 3)
      render 'api/friendships/show'
    else
      render json: @friendship.errors, status: 422
    end
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
