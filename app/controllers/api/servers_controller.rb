class Api::ServersController < ApplicationController
  def index
    @servers = current_user.servers
    render 'api/servers/index'
  end

  def show
    @server = Server.find_by(params[:id])
    render 'api/servers/show'
  end
end
