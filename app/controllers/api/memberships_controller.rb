class Api::MembershipsController < ApplicationController
  def destroy
    @membership = Membership.find_by(membership_params)

    if @membership.destroy
      render 'api/memberships/show'
    else
      render json: @memberships.errors, status: 422
    end
  end

  private
  def membership_params
    params.require(:membership).permit(:user_id, :joinable_id, :joinable_type)
  end
end
