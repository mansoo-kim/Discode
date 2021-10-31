class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)

    if @user.save
      login!(@user)
      render 'api/users/show'
    else
      render json: @user.errors, status: 422
    end
  end

  def update
    @user = User.find_by(id: params[:id])
    if @user.is_password?(user_params[:password])
      @user.update(username: user_params[:username])
      render 'api/users/show'
    else
      render json: @user.errors, status: 401
    end
  end

  def user_params
    params.require(:user).permit(:username, :password, :email, :dob)
  end

end
