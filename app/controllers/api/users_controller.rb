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

  end

  def username_params
    params.require(:user).permit(:username, :password)
  end

  def email_params
    params.require(:user).permit(:password, :email)
  end

  def user_params
    params.require(:user).permit(:username, :password, :email, :dob)
  end

end
