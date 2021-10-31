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

  end
end
