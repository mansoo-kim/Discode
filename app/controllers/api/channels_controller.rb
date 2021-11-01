class Api::ChannelsController < ApplicationController
  def create
    @channel = Channel.new(channel_params)
    @channel.server_id = params[:server_id]
    if @channel.save
      render 'api/channels/show'
    else
      render json: @channel.errors, status: 422
    end
  end

  def update
    @channel = Channel.find_by(id: params[:id])

    if @channel.update(channel_params)
      render 'api/channels/show'
    else
      render json: @channel.errors, status: 422
    end
  end

  def channel_params
    params.require(:channel).permit(:name)
  end
end
