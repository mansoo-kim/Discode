class Api::ServersController < ApplicationController
  def index
    @servers = current_user.servers.includes(:channels)
    render 'api/servers/index'
  end

  def show
    @server = current_user.servers.includes(:channels).includes(:members).find_by(id: params[:id])
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
    @server = Server.find_by(id: params[:id])

    if @server.update(server_params)
      render 'api/servers/show'
    else
      render json: @server.errors, status: 422
    end
  end

  def destroy
    @server = Server.find_by(id: params[:id])

    if @server.destroy
      render 'api/servers/show'
    else
      render json: @server.errors, status: 422
    end
  end

  def server_params
    params.require(:server).permit(:name, :icon)
  end

end
