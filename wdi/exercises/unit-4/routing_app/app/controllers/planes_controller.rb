class PlanesController < ApplicationController
    
    def index
        @planes = Plane.all
    end

    def new
        @plane = Plane.new
    end
    
    def create
        plane = params[:plane].permit(:name,:kind, :description,)
        Plane.create(:plane)
        redirect_to "/planes"
    end

    def show
        id = params[:id]
        @plane = Plane.find(id)
    end



end