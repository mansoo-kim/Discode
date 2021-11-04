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
      if user_params[:remove_pfp]
        @user.pfp.purge
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

  private
  def user_params
    params.require(:user).permit(:username, :password, :email, :dob, :pfp, :remove_pfp)
  end
end
