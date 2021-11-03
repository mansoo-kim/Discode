require 'open-uri'

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

  def show
    @user = User.find_by(id: params[:id])

    render 'api/users/show'
  end

  def update
    @user = User.find_by(id: params[:id])

    if user_params[:pfp] || user_params[:remove_pfp] || @user.is_password?(user_params[:password])
      # if @user.update(username: user_params[:username], email: user_params[:email])
      if user_params[:remove_pfp]
        pfp = open('https://discode-seeds.s3.us-east-2.amazonaws.com/icon_clyde_white_RGB.png')
        @user.pfp.attach(io: pfp, filename: "icon_clyde_white_RGB.png")
        render 'api/users/show'
      elsif @user.update(user_params)
        render 'api/users/show'
      else
        render json: @user.errors, status: 422
      end
    else
      render json: {password: ['- Password does not match'] }, status: 401
    end
  end

  def user_params
    params.require(:user).permit(:username, :password, :email, :dob, :pfp, :remove_pfp)
  end

end
