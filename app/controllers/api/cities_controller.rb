class Api::CitiesController < ApplicationController

    def index
        @all_cities = City.all
        render :index 
    end

    def show
        @city = City.find(params[:id])
        render :show
    end

end


