class Api::ServersController < ApplicationController
  def index
    @servers = current_user.servers.includes(:channels)
    render 'api/servers/index'
  end

  def show
    @server = current_user.servers.includes(:channels, :members).find_by(id: params[:id])
    render 'api/servers/show'
  end

  def create
    @server = Server.new(server_params)
    @server.owner_id = current_user.id
    if @server.save
      @server.channels.create(name: "general")
      @server.memberships.create(user_id: current_user.id)
      render 'api/servers/show'
    else
      render json: @server.errors, status: 422
    end
  end

  def update
    @server = current_user.servers.find_by(id: params[:id])

    @server.icon.purge if server_params[:remove_icon]

    if @server.update(update_params)
      render 'api/servers/show'
    else
      render json: @server.errors, status: 422
    end
  end

  def destroy
    @server = current_user.servers.find_by(id: params[:id])

    if @server.destroy
      render 'api/servers/show'
    else
      render json: @server.errors, status: 422
    end
  end

  private
  def update_params
    params.require(:server).permit(:name, :icon)
  end

  def server_params
    params.require(:server).permit(:name, :icon, :remove_icon)
  end
end
