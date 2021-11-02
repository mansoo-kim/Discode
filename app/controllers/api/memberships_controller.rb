class Api::MembershipsController < ApplicationController

  def destroy
    @membership = Membership.find_by(membership_params)

    if @memberships.destroy
      render json: ["Succesfully deleted membership"]
    else
      render json: @memberships.errors, status: 422
    end
  end

  def membership_params
    params.require(:membership).permit(:user_id, :joinable_id, :joinable_type)
  end

end
