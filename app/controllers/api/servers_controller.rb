class Api::ServersController < ApplicationController
  def index
    @servers = current_user.servers.includes(:channels)
    render 'api/servers/index'
  end

  def show
    @server = Server.includes(:channels).includes(:members).find_by(id: params[:id])
    render 'api/servers/show'
  end

  def create
    @server = Server.new(server_params)
    if @server.save
      @server.channels.create(name: "general")
      @server.memberships.create(user_id: server_params[:owner_id])
      render 'api/servers/show'
    else

    end
  end

  def server_params
    params.require(:server).permit(:name, :owner_id)
  end

end
